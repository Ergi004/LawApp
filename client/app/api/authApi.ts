import Axios from "./axios";
import {
  IAllUsers,
  ICreateUser,
  ILoginUser,
  IUpdateUser,
} from "../models/userModel";

const Api = {
  register: async (createUser: ICreateUser) => {
    try {
      const response = await Axios.post<ICreateUser>(
        "/users/register",
        createUser
      );
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
  login: async (loginUser: ILoginUser) => {
    try {
      const response = await Axios.post<ILoginUser>("/users/login", loginUser);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
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
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
  deleteUser: async (user_id: number) => {
    try {
      const response = await Axios.delete(`/user/delete/${user_id}`);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
  getAllUsers: async (allUsers: IAllUsers[] | any) => {
    try {
      const response = await Axios.get<IAllUsers[]>("/users/", allUsers);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
  getUserById: async (user_id: number) => {
    try {
      const response = await Axios.get(`/users/${user_id}`);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
};

export default Api;
