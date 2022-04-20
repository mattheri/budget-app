import { useAsync } from "react-use";
import DashboardService from "../service/dashboard";
import useUserId from "features/auth/hooks/UseUserId";

const dashboardService = new DashboardService();

const useGetBudgets = () => {
  const id = useUserId();

  return useAsync(async () => {
    if (!id) return [];

    return await dashboardService.getBudgets(id);
  }, [id]);
};

export default useGetBudgets;
