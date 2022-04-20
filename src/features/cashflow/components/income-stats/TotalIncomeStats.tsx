import Stat from "components/stat/Stat";
import useTotalExpenses from "features/cashflow/hooks/UseTotalExpenses";
import useTotalIncomes from "features/cashflow/hooks/UseTotalIncomes";
import { FC, useEffect, useState } from "react";

const TIMEOUT_TRESHOLD = 2000;

const TotalIncomeStats: FC = () => {
  const [animate, setAnimate] = useState(false);
  const [difference, setDifference] = useState(0);
  const totalIncome = useTotalIncomes();
  const totalExpenses = useTotalExpenses();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, TIMEOUT_TRESHOLD);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    setDifference(totalIncome - totalExpenses);
  }, [totalIncome, totalExpenses]);

  return (
    <Stat
      title="Incomes"
      amount={totalIncome}
      helperText={{
        text: `$${Math.abs(difference)}`,
        type: Math.sign(difference) > 0 ? "increase" : "decrease",
      }}
      animateAmount={animate}
    />
  );
};

export default TotalIncomeStats;
