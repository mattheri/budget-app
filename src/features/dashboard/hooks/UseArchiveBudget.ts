import useAppDispatch from "store/hooks/UseAppDispatch";
import { Budget } from "../dashboard";
import { removeBudget } from "../dashboardSlice";
import DashboardService from "../service/dashboard";

const dashboardService = new DashboardService();

const useArchiveBudget = (budget?: Budget) => {
  const dispatch = useAppDispatch();

  return async (budgetToArchive: Budget | undefined = budget) => {
    if (!budgetToArchive) return;

    const archivedBudget = {
      ...budgetToArchive,
      archived: true,
    };

    await dashboardService.updateBudget(archivedBudget);
    dispatch(removeBudget(budgetToArchive));
  };
};

export default useArchiveBudget;
