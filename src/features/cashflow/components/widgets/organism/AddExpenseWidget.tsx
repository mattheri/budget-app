// Types
import { FormikHelpers } from "formik";
import { FC } from "react";
import { Expense, ExpenseDTO } from "features/cashflow/cashflow";

// Library components
import { Box, Button, VStack } from "@chakra-ui/react";

// Components
import Form from "components/form/Form";
import CashflowSelect from "../../cashflow-select/CashflowSelect";

// Services
import InMemoryDatabase, {
  MemoryDatabaseKey,
} from "services/in-memory-database";

// Library hooks
import { useParams } from "react-router-dom";

// Hooks
import useAddExpense from "features/cashflow/hooks/UseAddExpense";

// Utilities
import formatDate from "utils/format-date";

// Constants
import FREQUENCIES from "features/cashflow/constants/frequencies";

const initialValues: ExpenseDTO = {
  name: "",
  amount: 0,
  frequency: {
    label: "Monthly",
    value: "monthly",
    _id: "",
  },
  category: "",
  date: formatDate(),
};

const AddExpenseWidget: FC = () => {
  const params = useParams();

  const onSubmit = (
    values: typeof initialValues,
    helpers?: FormikHelpers<typeof initialValues>
  ) => {
    helpers?.resetForm();
  };

  return (
    <Box>
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        <VStack spacing="1rem" alignItems="start">
          <Form.Input name="name" placeholder="Name" />
          <Form.Input
            name="amount"
            placeholder="Amount"
            type="number"
            min="1"
          />
          <Form.Select
            name="frequency"
            placeholder="Frequency"
            options={FREQUENCIES}
          />
          <CashflowSelect
            type="expense"
            name="category"
            placeholder="Category"
          />
          <Form.Datepicker name="date" placeholder="Date" />
          <Button type="submit" w="100%" colorScheme="messenger">
            Add
          </Button>
        </VStack>
      </Form>
    </Box>
  );
};

export default AddExpenseWidget;
