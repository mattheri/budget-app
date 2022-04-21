import Loading from "components/loading/Loading";
import { FC, useEffect } from "react";
import Board from "../components/board/organism/Board";
import useAddStoreBudgets from "../hooks/UseAddStoreBudgets";
import useBudgets from "../hooks/UseBudgets";
import useGetBudgets from "../hooks/UseGetBudgets";

const DashboardTemplate: FC = () => {
  const { loading, value: budgets } = useGetBudgets();

  const addBudgetsToStore = useAddStoreBudgets();
  const storeBudgets = useBudgets();

  useEffect(() => {
    if (!budgets || !budgets.length) return;

    if (!storeBudgets.length) addBudgetsToStore(budgets);
  }, [addBudgetsToStore, budgets, storeBudgets, loading]);

  return loading ? <Loading /> : <Board />;
};

export default DashboardTemplate;
