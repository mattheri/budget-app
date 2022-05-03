import dayjs from "dayjs";

const DEFAULT_TEMPLATE = "YYYY-MM-DD";

const formatDate = (
  date: Date = new Date(),
  format: string = DEFAULT_TEMPLATE
) => {
  return dayjs(date).format(format);
};

export default formatDate;
