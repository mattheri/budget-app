import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import TotalExpensesStat from "../components/expense-stats/TotalExpensesStat";
import TotalIncomeStats from "../components/income-stats/TotalIncomeStats";

const LayoutRightTemplate: FC = () => {
  return (
    <Flex gap="1.5rem">
      <TotalExpensesStat />
      <TotalIncomeStats />
    </Flex>
  );
};

export default LayoutRightTemplate;
