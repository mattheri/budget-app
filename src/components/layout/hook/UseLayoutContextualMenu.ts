import AddExpenseWidget from "features/cashflow/components/widgets/organism/AddExpenseWidget";
import BackToDashboardWidget from "features/dashboard/components/back-to-dashboard-widget/BackToDashboardWidget";
import { useLocation } from "react-router-dom";
import AddIncomeWidget from "../../../features/cashflow/components/widgets/organism/AddIncomeWidget";
import CreateBudgetWidget from "../../../features/dashboard/components/create-budget-widget/organism/CreateBudgetWidget";

const useLayoutContextualMenu = () => {
  const location = useLocation();

  const title = () => {
    const dashboardPaths = ["/", "/dashboard"];
    const budgetPaths = ["/budget"];

    if (dashboardPaths.some((path) => location.pathname === path)) {
      return "Dashboard";
    }

    if (budgetPaths.some((path) => location.pathname.includes(path))) {
      return "Budget";
    }

    return "Home";
  };

  const menu = () => {
    const dashboardPaths = ["/", "/dashboard"];
    const budgetPaths = ["/budget"];

    if (dashboardPaths.some((path) => location.pathname === path)) {
      return [
        {
          title: "Create Budget",
          element: CreateBudgetWidget,
        },
      ];
    }

    if (budgetPaths.some((path) => location.pathname.includes(path))) {
      return [
        {
          title: "Add New Income",
          element: AddIncomeWidget,
        },
        {
          title: "Add New Expense",
          element: AddExpenseWidget,
        },
        {
          title: "",
          element: BackToDashboardWidget,
          additionalProps: {
            style: {
              marginTop: "auto",
            },
          },
        },
      ];
    }

    return [
      {
        title: "Create Budget",
        element: CreateBudgetWidget,
      },
    ];
  };

  return {
    title: title(),
    menu: menu(),
  };
};

export default useLayoutContextualMenu;
