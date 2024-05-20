"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { IAllParts, Part } from "../models/partModel";
import { IAllCategories, ICreateCategory } from "../models/categoryModel";
import CategoryApi from "../api/categoryApi";
import { IGetAllLaws } from "../models/lawModel";
import LawApi from "../api/lawApi";
import PartApi from "../api/partApi";
import { HandlePartClick } from "../models/functions";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import EditLawsForm from "../components/EditLawsForm/EditLawsForm";
import AdminAppBar from "../components/AdminAppBar/AdminAppBar";

const EditLaws: React.FC = () => {
  const [parts, setParts] = useState<IAllParts[]>([]);
  const [categories, setCategories] = useState<IAllCategories[]>([]);
  const [laws, setLaws] = useState<IGetAllLaws[]>([]);

  const getAllLaws = async () => {
    const resposne = await LawApi.getAllLaws(laws);
    setLaws(resposne.data);
  };

  const getLawByCategoryId = async (category: ICreateCategory) => {
    const response = await LawApi.getLawByCategoryId(category.category_id);
    setLaws(response.data);
  };
  const handlePartClick: HandlePartClick = async (
    part: Part | ICreateCategory
  ) => {
    const response = await CategoryApi.getCategoryByPartId(
      part.part_id as number
    );
    setCategories(response.data.data);
  };
  const getAllParts = async () => {
    const response = await PartApi.getAllParts(parts);
    setParts(response);
  };

  useEffect(() => {
    getAllParts();
    getAllLaws();
  }, []);

  return (
    <AuthGuard>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AdminAppBar
          handlePartClick={handlePartClick}
          categories={categories}
          getLawByCategoryId={getLawByCategoryId}
          getAllLaws={getAllLaws}
        />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
            <EditLawsForm />
          </Container>
        </Box>
      </Box>
    </AuthGuard>
  );
};

export default EditLaws;
