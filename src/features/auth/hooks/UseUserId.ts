import useAppSelector from "store/hooks/UseAppSelector";

const useUserId = () => {
  return useAppSelector(({ auth: { user } }) => {
    if (!user) return null;

    return user._id;
  });
};

export default useUserId;
