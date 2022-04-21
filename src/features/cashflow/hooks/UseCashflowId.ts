import useAppSelector from "store/hooks/UseAppSelector";

const useCashflowId = () => {
  return useAppSelector(({ cashflow }) => {
    return cashflow._id;
  });
};

export default useCashflowId;
