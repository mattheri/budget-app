import { Flex } from "@chakra-ui/react";
import FixedBar from "components/fixed-bar/FixedBar";
import { FC } from "react";
import TotalExpensesStat from "../expense-stats/TotalExpensesStat";
import TotalIncomeStats from "../income-stats/TotalIncomeStats";

const InfoBar: FC = () => {
  return (
    <FixedBar position="bottom">
      <Flex
        marginLeft="auto"
        justifyContent="flex-end"
        gap="1rem"
        w="fit-content"
      >
        <TotalExpensesStat />
        <TotalIncomeStats />
      </Flex>
    </FixedBar>
  );
};

export default InfoBar;
