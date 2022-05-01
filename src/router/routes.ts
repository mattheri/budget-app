const routes = {
  index: "/",
  login: "/login",
  googleAuth: "/google-auth",
  budget: "/budget/:id",
  buildBudgetRoute: (id: string) => `/budget/${id}`,
  expenses: "expenses",
  expense: "expenses/:id",
  buildExpenseRoute: (id: string) => `/expenses/${id}`,
  incomes: "incomes",
  income: "incomes/:id",
  buildIncomeRoute: (id: string) => `/incomes/${id}`,
};

export default routes;
