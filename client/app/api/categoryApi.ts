import Axios from "./axios";
import {
  IAllCategories,
  ICreateCategory,
  IUpdateCategory,
} from "../models/categoryModel";

const Api = {
  createCategory: async (createCategory: ICreateCategory) => {
    try {
      const response = Axios.post("/category/create", createCategory);
      return response;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
  getAllCategories: async (allCategories: IAllCategories | any) => {
    try {
      const response = await Axios.get("/category/getAll", allCategories);
      return response;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
  getCategoryById: async (category_id: number) => {
    try {
      const response = Axios.get(`/category/${category_id}`);
      return response;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
  updateCategory: async (
    category_id: number,
    updateCategory: IUpdateCategory
  ) => {
    try {
      const response = Axios.patch(
        `/category/update/${category_id}`,
        updateCategory
      );
      return response
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
  deleteCategory: async (category_id: number) =>{ 
    try {
      const response = Axios.delete(`/category/delete/${category_id}`)
      return response
    }catch(error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  }
};

export default Api;
