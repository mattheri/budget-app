import { User } from "../auth";
import { addUser } from "../authSlice";

import useAppDispatch from "store/hooks/UseAppDispatch";

const useAddUser = () => {
  const dispatch = useAppDispatch();

  return (user: User) => {
    dispatch(addUser(user));
  };
};

export default useAddUser;
