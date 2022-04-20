import { Box, Button, VStack } from "@chakra-ui/react";
import { FormikHelpers } from "formik";
import { FC } from "react";
import Form from "components/form/Form";
import InMemoryDatabase, {
  MemoryDatabaseKey,
} from "services/in-memory-database";
import { Income, IncomeDTO } from "features/cashflow/cashflow";
import { useParams } from "react-router-dom";
import useAddIncome from "features/cashflow/hooks/UseAddIncome";
import dayjs from "dayjs";
import FREQUENCIES from "features/cashflow/constants/frequencies";
import CATEGORIES from "features/cashflow/constants/categories";

const inMemoryDatabase = new InMemoryDatabase<Income>(
  MemoryDatabaseKey.INCOMES,
  true
);

const initialValues: IncomeDTO = {
  name: "",
  amount: 0,
  frequency: "monthly",
  category: "",
  date: dayjs().format("YYYY-MM-DD"),
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
          <Form.Select
            name="category"
            placeholder="Category"
            options={CATEGORIES}
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
