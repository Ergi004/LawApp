import Axios from "./axios";
import { ICreateLaw, IGetAllLaws, IUpdateLaw } from "../models/lawModel";

const Api = {
  createLaw: async (createLaw: ICreateLaw) => {
    try {
      const response = await Axios.post("/laws/create", createLaw);
      return response.data;
    } catch (error) {
      throw error
    }
  },
  getAllLaws: async (allLaws: IGetAllLaws | any) => {
    try {
      const response = await Axios.get("/laws/getAll", allLaws);
      return response;
    } catch (error) {
      throw error
    }
  },
  getLawById: async (law_id: number) => {
    try {
      const response = await Axios.get(`/laws/${law_id}`);
      return response;
    } catch (error) {
      throw error
    }
  },
  getLawByCategoryId: async (category_id: number) => {
    try {
      const response = await Axios.get(`/laws/findBy/${category_id}`);
      return response.data;
    } catch (error) {
      throw error
    }
  },
  updateLaw: async (law_id: number, updateLaw: IUpdateLaw) => {
    try {
      const response = await Axios.patch(`/laws/update/${law_id}`, updateLaw);
      return response;
    } catch (error) {
      throw error
    }
  },
  deleteLaw: async (law_id: number) => {
    try {
      const response = await Axios.delete(`/laws/delete/${law_id}`);
      return response;
    } catch (error) {
      throw error
    }
  },
};

export default Api;
