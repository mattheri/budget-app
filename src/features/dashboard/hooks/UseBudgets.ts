import useAppSelector from "store/hooks/UseAppSelector";

const useBudgets = () => {
  return useAppSelector(({ dashboard }) => {
    return dashboard.budgets;
  });
};

export default useBudgets;
