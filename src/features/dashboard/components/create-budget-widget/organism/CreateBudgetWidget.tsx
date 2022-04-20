import { Box, Button } from "@chakra-ui/react";
import Loading from "components/loading/Loading";
import useUserId from "features/auth/hooks/UseUserId";
import useCreateBudget from "features/dashboard/hooks/UseCreateBudget";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../../../components/form/Form";

const initialValue = {
  name: "",
  archived: false,
  user: "",
};

const CreateBudgetWidget: FC = () => {
  const {
    state: { loading, data: budget, error },
    mutation,
  } = useCreateBudget();
  const userId = useUserId();
  const navigate = useNavigate();

  const onSubmit = async (values: typeof initialValue) => {
    if (!userId) return;
    values.user = userId;

    try {
      await mutation(values);

      if (error) throw new Error(error.message);

      if (budget?._id) {
        navigate(`/dashboard/${budget._id}`);
      }
    } catch (e) {
      const error = e as Error;

      console.error(error.message);
    }
  };

  return (
    <Box>
      <Form initialValues={initialValue} onSubmit={onSubmit}>
        <Box paddingBottom="1rem">
          <Form.Input name="name" placeholder="Name" />
        </Box>
        <Button type="submit" colorScheme="teal">
          Create
        </Button>
      </Form>
      {loading && <Loading />}
    </Box>
  );
};

export default CreateBudgetWidget;
