"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { IAllParts, Part } from "../../models/partModel";
import { IAllCategories, ICreateCategory } from "../../models/categoryModel";
import { IGetAllLaws } from "../../models/lawModel";
import LawApi from "../../api/lawApi";
import CategoryApi from "../../api/categoryApi";
import PartApi from "../../api/partApi";
import AllLaws from "../AllLaws/AllLaws";
import AdminAppBar from "../AdminAppBar/AdminAppBar";
import { HandlePartClick } from "@/app/models/functions";

const Dashboard: React.FC = () => {
  const [laws, setLaws] = useState<IGetAllLaws[]>([]);
  const [myLaws, setMyLaws] = useState<IGetAllLaws[]>([]);
  const [parts, setParts] = useState<IAllParts[]>([]);
  const [categories, setCategories] = useState<IAllCategories[]>([]);
  const [allCategories, setAllCategories] = useState<IAllCategories[]>([]);
  const handlePartClick: HandlePartClick = async (part: Part) => {
    const response = await CategoryApi.getCategoryByPartId(
      part.part_id as number
    );
    setCategories(response.data.data);
  };

  const getAllParts = async () => {
    const response = await PartApi.getAllParts(parts);
    setParts(response);
  };

  const getAllCategories = async () => {
    const response = await CategoryApi.getAllCategories(allCategories);
    setCategories(response);
  };

  const getAllLaws = async () => {
    const resposne = await LawApi.getAllLaws(laws);
    setLaws(resposne.data);
    setMyLaws(resposne.data);
  };

  const getLawByCategoryId = async (category: ICreateCategory) => {
    const response = await LawApi.getLawByCategoryId(category.category_id);
    setLaws(response.data);
  };

  useEffect(() => {
    getAllLaws();
    getAllCategories();
    getAllParts();
  }, []);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AdminAppBar
        getLawByCategoryId={getLawByCategoryId}
        getAllLaws={getAllLaws}
        handlePartClick={handlePartClick}
        categories={categories}
      />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[300]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <AllLaws
            laws={laws}
            parts={parts}
            allCategories={allCategories}
            myLaws={myLaws}
            setLaws={setLaws}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
