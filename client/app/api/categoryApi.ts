import Axios from "./axios";
import {
  IAllCategories,
  ICreateCategory,
  IUpdateCategory,
} from "../models/categoryModel";

const Api = {
  createCategory: async (createCategory: ICreateCategory) => {
    try {
      const response = await Axios.post("/category/create", createCategory);
      return response.data;
    } catch (error) {
      throw error
    }
  },
  getAllCategories: async (allCategories: IAllCategories[] | any) => {
    try {
      const response = await Axios.get("/category/getAll", allCategories);
      return response.data.data;
    } catch (error) {
      throw error
    }
  },
  getCategoryById: async (category_id: number) => {
    try {
      const response = Axios.get(`/category/${category_id}`);
      return response;
    } catch (error) {
      throw error
    }
  },
  getCategoryByPartId: async (part_id: number) => {
    try {
      const response = await Axios.get(`/category/findBy/${part_id}`)
      return response
    }catch (error){
      throw error
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
    } catch (error) {
      throw error
    }
  },
  deleteCategory: async (category_id: number) =>{ 
    try {
      const response = Axios.delete(`/category/delete/${category_id}`)
      return response
    }catch(error) {
      throw error
    }
  }
};

export default Api;
