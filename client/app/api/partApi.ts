import Axios from "./axios";
import { IAllParts, ICreatePart, IUpdatePart } from "../models/partModel";

const Api = {
  createPart: async (createPart: ICreatePart) => {
    try {
      const response = await Axios.post("/parts/create", createPart);
      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
  getAllParts: async (allParts: IAllParts | any) => {
    try {
      const response = await Axios.get("/parts/getAll", allParts);
      return response.data.data;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
  getPartBtId: async (part_id: number) => {
    try {
      const response = await Axios.get(`/parts/${part_id}`);
      return response;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
  updatePart: async (part_id: number, updatePart: IUpdatePart) => {
    try {
      const response = await Axios.patch(
        `/parts/update/${part_id}`,
        updatePart
      );
      return response;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
  deletePart: async (part_id: number) => {
    try {
      const response = await Axios.delete(`/parts/delete/${part_id}`);
      return response;
    } catch (error: any) {
      throw error.response ? error.response.data.message : "Api Error";
    }
  },
};

export default Api;
