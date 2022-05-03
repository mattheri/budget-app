// Types
import { FormikHelpers } from "formik";
import { FC } from "react";
import { Income, IncomeDTO } from "features/cashflow/cashflow";

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
import useAddIncome from "features/cashflow/hooks/UseAddIncome";

// Library utils
import formatDate from "utils/format-date";

// Constants
import FREQUENCIES from "features/cashflow/constants/frequencies";

const inMemoryDatabase = new InMemoryDatabase<Income>(
  MemoryDatabaseKey.INCOMES,
  true
);

const initialValues: IncomeDTO = {
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

const AddIncomeWidget: FC = () => {
  const params = useParams();
  const addIncome = useAddIncome();
  inMemoryDatabase.subscribe(addIncome);

  const onSubmit = (
    values: typeof initialValues,
    helpers?: FormikHelpers<typeof initialValues>
  ) => {
    inMemoryDatabase.set({ ...values, budgetId: Number(params.id) });

    helpers?.resetForm();
  };

  return (
    <Box>
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        <VStack spacing="1rem" alignItems="start">
          <Form.Input name="name" placeholder="Name" />
          <Form.Input name="amount" placeholder="Amount" type="number" />
          <Form.Select
            name="frequency"
            placeholder="Frequency"
            options={FREQUENCIES}
          />
          <CashflowSelect
            name="category"
            placeholder="Category"
            type="income"
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

export default AddIncomeWidget;
