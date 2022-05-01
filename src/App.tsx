import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Client from "infra/client";

import ProtectedTemplate from "features/auth/templates/ProtectedTemplate";
import Layout from "./components/layout/Layout";
import DashboardTemplate from "./features/dashboard/templates/DashboardTemplate";
import CashflowLayout from "features/cashflow/components/cashflow-layout/organism/CashflowLayout";
import CashflowTemplate from "./features/cashflow/templates/CashflowTemplate";
import Expanses from "features/cashflow/components/expenses/organism/Expenses";
import LoginTemplate from "features/auth/templates/LoginTemplate";

import store from "./store/store";
import routes from "router/routes";
import AuthTemplate from "features/auth/templates/AuthTemplate";

export const App = () => (
  <ApolloProvider client={Client}>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route element={<ProtectedTemplate />}>
            <Route element={<Layout />}>
              <Route path={routes.index} element={<DashboardTemplate />} />
              <Route path={routes.budget} element={<CashflowLayout />}>
                <Route element={<CashflowTemplate />} />
                <Route path={routes.expenses} element={<Expanses />} />
                <Route path={routes.incomes} element={<CashflowTemplate />} />
              </Route>
            </Route>
          </Route>
          <Route path={routes.login} element={<LoginTemplate />} />
          <Route path={routes.googleAuth} element={<AuthTemplate />} />
        </Routes>
      </ChakraProvider>
    </Provider>
  </ApolloProvider>
);
