import { Box, Flex, Grid, VStack } from "@chakra-ui/react";
import Form from "components/form/Form";
import { Expense as CashExpense } from "features/cashflow/cashflow";
import CATEGORIES from "features/cashflow/constants/categories";
import FREQUENCIES from "features/cashflow/constants/frequencies";
import { FC } from "react";
import useExpenseContext from "../hook/UseExpenseContext";
import ExpenseControls from "./ExpanseControls";

interface Props {
  expense: CashExpense;
}

const Expense: FC<Props> = ({ expense }) => {
  const initialValues = {
    name: expense.name,
    amount: expense.amount,
    date: expense.date,
    category: expense.category,
    frequency: expense.frequency,
  };

  const { deleteExpense } = useExpenseContext();

  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  const onDelete = () => {
    deleteExpense(expense);
  };

  return (
    <Box
      _last={{
        paddingBottom: "10rem",
      }}
      paddingBottom="2rem"
    >
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        <VStack spacing="1rem" alignItems="start">
          <Flex w="100%" gap="1rem">
            <Box flex="1">
              <Form.Input name="name" placeholder="Name" />
            </Box>
            <Box>
              <ExpenseControls onDelete={onDelete} />
            </Box>
          </Flex>
          <Form.Input name="amount" type="number" placeholder="Amount" />
          <Grid
            w="100%"
            gridTemplateColumns={["1fr", "repeat(2, 1fr)"]}
            gap="1rem"
          >
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
          </Grid>
          <Form.Datepicker name="date" placeholder="Date" />
        </VStack>
      </Form>
    </Box>
  );
};

export default Expense;
