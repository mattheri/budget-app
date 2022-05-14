import { FC, useEffect } from "react";

// Components
import Loading from "components/loading/Loading";
import Board from "../components/board/organism/Board";

// Hooks
import useAddStoreBudgets from "../hooks/UseAddStoreBudgets";
import useGetBudgets from "../hooks/UseGetBudgets";

// Refs
import { sideBarHookRef } from "components/layout/Layout";
import CreateBudgetWidget from "../components/create-budget-widget/CreateBudgetWidget";

const DashboardTemplate: FC = () => {
  const { loading, value: budgets } = useGetBudgets();

  const addBudgetsToStore = useAddStoreBudgets();

  useEffect(() => {
    if (!budgets || !budgets.length) return;

    addBudgetsToStore(budgets);
  }, [budgets, addBudgetsToStore]);

  sideBarHookRef.current?.hook(<CreateBudgetWidget />);

  sideBarHookRef.current?.title("Dashboard");

  return loading ? <Loading /> : <Board />;
};

export default DashboardTemplate;
