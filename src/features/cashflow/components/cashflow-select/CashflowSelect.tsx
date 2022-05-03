// Types
import { FC } from "react";
import { SelectProps } from "components/form/select/Select";

// Constants
import {
  EXPENSE_CATEGORIES,
  INCOME_CATEGORIES,
} from "features/cashflow/constants/categories";

// Components
import Form from "components/form/Form";

interface Props extends Omit<SelectProps, "options" | "as"> {
  type: "income" | "expense";
}

const CashflowSelect: FC<Props> = ({ type = "income", ...rest }) => {
  const options = type === "income" ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

  return <Form.Select {...rest} options={options} />;
};

export default CashflowSelect;
