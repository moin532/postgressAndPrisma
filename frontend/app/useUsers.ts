import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "./redux/userSlice";
import { getUsers, createUser, updateUser, deleteUser } from "./users/api";

export const useUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.user.users);

  const fetchUsers = async () => {
    const response = await getUsers();

    dispatch(setUsers(response.data));
  };

  const addUser = async (userData: any) => {
    await createUser(userData);
    await fetchUsers();
  };

  const editUser = async (id: any, userData: any) => {
    const res = await updateUser(id, userData);
    console.log(res);

    await fetchUsers();
  };

  const removeUser = async (id: string) => {
    await deleteUser(id);

    await fetchUsers();
  };

  return { users, fetchUsers, addUser, editUser, removeUser };
};
