interface GenericFrenquencyDTO {
  frequency: {
    _id: string;
  };
}

type GenericDTO<T> = T & GenericFrenquencyDTO;

class CashflowAdapter {
  clientFrequencyToDatabaseFrequency<T = any>(item: GenericDTO<T>) {
    const frequencyId = item.frequency ? item.frequency._id : "";

    return {
      ...item,
      frequency: frequencyId,
    };
  }
}

export default CashflowAdapter;
