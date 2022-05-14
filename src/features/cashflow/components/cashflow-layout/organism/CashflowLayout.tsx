import { VStack } from "@chakra-ui/react";
import { sideBarHookRef } from "components/layout/Layout";
import useInitCashflowState from "features/cashflow/hooks/UseInitCashflowState";
import { FC } from "react";
import InfoBar from "../../info-bar/InfoBar";
import MainContentContainer from "../../main-content-container/MainContentContainer";
import Nav from "../../nav/Nav";
import AddExpenseWidget from "../../widgets/AddExpenseWidget";
import AddIncomeWidget from "../../widgets/AddIncomeWidget";
import Container from "../atom/Container";

const CashflowLayout: FC = () => {
  useInitCashflowState();

  sideBarHookRef.current?.hook(
    <VStack gap="2rem" w="100%">
      <AddExpenseWidget />
      <AddIncomeWidget />
    </VStack>
  );

  sideBarHookRef.current?.title("Cashflow");

  return (
    <Container>
      <Nav />
      <MainContentContainer />
      <InfoBar />
    </Container>
  );
};

export default CashflowLayout;
