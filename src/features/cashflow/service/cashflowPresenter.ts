interface GenericFrenquencyDTO {
  frequency: {
    _id: string;
    createdAt: string;
    updatedAt: string;
    value: {
      label: string;
      value: string;
    };
  };
}

type GenericDTO<T> = T & GenericFrenquencyDTO;

class CashflowPresenter {
  databaseFrequencyToClientFrequency<T = any>(item: GenericDTO<T>) {
    const {
      _id,
      value: { label, value },
    } = item.frequency;

    return {
      ...item,
      frequency: {
        _id,
        label,
        value,
      },
    };
  }
}

export default CashflowPresenter;
