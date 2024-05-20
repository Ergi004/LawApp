import Axios from "./axios";
import {
  IAllUsers,
  ICreateUser,
  ILoginUser,
  IRegister,
  IUpdateUser,
} from "../models/userModel";

const Api = {
  register: async (createUser: IRegister) => {
    try {
      const response = await Axios.post<ICreateUser>(
        "/users/register",
        createUser
      );
      return response.data;
    } catch (error) {
      throw error
    }
  },
  login: async (loginUser: ILoginUser) => {
    try {
      const response = await Axios.post<ILoginUser>("/users/login", loginUser);
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw error
    }
  },
  updateUser: async (updateUser: IUpdateUser, user_id: number) => {
    try {
      const response = await Axios.patch<IUpdateUser>(
        `/lawApp/users/update/${user_id}`,
        {
          updateUser,
        }
      );
      return response.data;
    } catch (error) {
      throw error
    }
  },
  deleteUser: async (id: number) => {
    try {
      const response = await Axios.delete(`/users/delete/${id}`);
      return response.data;
    } catch (error) {
      throw error
    }
  },
  getAllUsers: async (allUsers: IAllUsers[] | any) => {
    try {
      const response = await Axios.get<IAllUsers[]>("/users/getAll", allUsers);
      return response.data;
    } catch (error) {
      throw error
    }
  },
  getUserById: async (user_id: number) => {
    try {
      const response = await Axios.get(`/users/${user_id}`);
      return response.data;
    } catch (error) {
      throw error
    }
  },
};

export default Api;
