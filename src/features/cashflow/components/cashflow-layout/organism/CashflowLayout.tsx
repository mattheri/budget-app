import useInitCashflowState from "features/cashflow/hooks/UseInitCashflowState";
import { FC } from "react";
import InfoBar from "../../info-bar/InfoBar";
import MainContentContainer from "../../main-content-container/MainContentContainer";
import Nav from "../../nav/Nav";
import Container from "../atom/Container";

const CashflowLayout: FC = () => {
  useInitCashflowState();

  return (
    <Container>
      <Nav />
      <MainContentContainer />
      <InfoBar />
    </Container>
  );
};

export default CashflowLayout;
