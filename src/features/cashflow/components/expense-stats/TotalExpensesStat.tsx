import Stat from "components/stat/Stat";
import useTotalExpenses from "features/cashflow/hooks/UseTotalExpenses";
import { FC, useEffect, useState } from "react";

const TIMEOUT_TRESHOLD = 2000;

const TotalExpensesStat: FC = () => {
  const [animate, setAnimate] = useState(false);
  const totalExpenses = useTotalExpenses();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, TIMEOUT_TRESHOLD);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Stat
      title="Expenses"
      amount={totalExpenses}
      helperText={{ text: "Bi-Weekly" }}
      animateAmount={animate}
    />
  );
};

export default TotalExpensesStat;
