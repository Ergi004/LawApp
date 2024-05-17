"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import { useEffect, useState } from "react";
import { IAllParts, Part } from "../models/partModel";
import Api from "../api/partApi";
import CategoryApi from "../api/categoryApi";
import { IAllCategories, ICreateCategory } from "../models/categoryModel";
import { IGetAllLaws } from "../models/lawModel";
import LawApi from "../api/lawApi";
import { HandlePartClick } from "../models/functions";
import AllLaws from "../components/AllLaws/AllLaws";
import AppBar from "../components/AppBar/AppBar";
import AdminAppBar from "../components/AdminAppBar/AdminAppBar";

const Dashboard: React.FC = () => {
  const [parts, setParts] = useState<IAllParts[]>([]);
  const [categories, setCategories] = useState<IAllCategories[]>([]);
  const [laws, setLaws] = useState<IGetAllLaws[]>([]);
  const [myLaws, setMyLaws] = useState<IGetAllLaws[]>([]);
  const getAllLaws = async () => {
    const resposne = await LawApi.getAllLaws(laws);
    setLaws(resposne.data);
    setMyLaws(resposne.data);
  };

  const getLawByCategoryId = async (category: ICreateCategory) => {
    const response = await LawApi.getLawByCategoryId(category.category_id);
    setLaws(response.data);
  };
  const handlePartClick: HandlePartClick = async (part: Part) => {
    const response = await CategoryApi.getCategoryByPartId(
      part.part_id as number
    );
    setCategories(response.data.data);
  };
  const getAllParts = async () => {
    const response = await Api.getAllParts(parts);
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
          parts={parts}
          handlePartClick={handlePartClick}
          categories={categories}
          getLawByCategoryId={getLawByCategoryId}
          getAllLaws={getAllLaws}
          myLaws={myLaws}
          setMyLaws={setLaws}
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <AllLaws laws={laws} />
          </Container>
        </Box>
      </Box>
    </AuthGuard>
  );
};

export default Dashboard;
