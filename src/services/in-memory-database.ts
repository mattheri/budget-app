export enum MemoryDatabaseKey {
  BUDGETS = "budgets",
  INCOMES = "incomes",
  EXPENSES = "expenses",
}

type ReturnTypeDTO<T extends { _id?: any }> = T["_id"] extends any
  ? Partial<Omit<T, "_id">>
  : T;

type SubscribeCallbackFn = (...args: any[]) => any;

class InMemoryDatabase<ReturnType extends { _id: number | string }> {
  key: string;
  autoIncrementIndex: boolean;
  private db = window.localStorage;
  private subscribers: SubscribeCallbackFn[] = [];
  constructor(key: string, autoIncrementIndex: boolean = false) {
    this.key = key;
    this.autoIncrementIndex = autoIncrementIndex;
  }

  subscribe(callbackFn: SubscribeCallbackFn) {
    this.subscribers.push(callbackFn);
  }

  private serialize(value: ReturnType[]): string {
    return JSON.stringify(value);
  }

  private deserialize(value: string): ReturnType[] {
    return JSON.parse(value) as ReturnType[];
  }

  private getLastIndex(): number {
    const value = this.get(this.key);

    if (!value) return 0;

    if (Array.isArray(value)) {
      return value.length;
    }

    return 0;
  }

  private dedupe(value: ReturnTypeDTO<ReturnType>): ReturnType[] {
    const existing = this.get(this.key).find((item) => item === value);

    if (existing) {
      const index = this.get(this.key).indexOf(existing);

      return [
        ...this.get(this.key).slice(0, index),
        ...this.get(this.key).slice(index + 1),
        this.autoIncrement(value),
      ];
    }

    return [...this.get(this.key), this.autoIncrement(value)];
  }

  private autoIncrement(value: ReturnTypeDTO<ReturnType>): ReturnType {
    return this.autoIncrementIndex
      ? ({ ...value, id: this.getLastIndex() + 1 } as ReturnType)
      : (value as ReturnType);
  }

  get(key: string = this.key): ReturnType[] {
    const value = this.db.getItem(key);

    if (!value) return [];

    return this.deserialize(value);
  }

  set(value: ReturnTypeDTO<ReturnType>, key: string = this.key): void {
    const valueToAdd = this.dedupe(value);

    this.db.setItem(key, this.serialize(valueToAdd));

    this.subscribers.forEach((subscriber) => subscriber(valueToAdd));
  }

  removeOne(value: ReturnType, key: string = this.key): void {
    const valueToRemove = this.get(key).find((item) => item._id === value._id);

    if (!valueToRemove) return;

    const newValues = this.get(key).filter((item) => item._id !== value._id);

    this.db.setItem(key, this.serialize(newValues));

    this.subscribers.forEach((subscriber) => subscriber(newValues));
  }

  removeAll(id: number, key: string = this.key): void {
    const valuesToRemove = this.get(key).filter((item) => item._id === id);

    if (!valuesToRemove) return;

    this.db.setItem(
      key,
      this.serialize(this.get(key).filter((item) => item._id !== id))
    );

    this.subscribers.forEach((subscriber) => subscriber(valuesToRemove));
  }
}

export default InMemoryDatabase;
