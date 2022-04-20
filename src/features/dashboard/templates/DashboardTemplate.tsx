import Loading from "components/loading/Loading";
import { FC } from "react";
import Board from "../components/board/organism/Board";
import useGetBudgets from "../hooks/UseGetBudgets";

const DashboardTemplate: FC = () => {
  const { loading, value: budgets } = useGetBudgets();

  return loading ? <Loading /> : <Board budgets={budgets || []} />;
};

export default DashboardTemplate;
