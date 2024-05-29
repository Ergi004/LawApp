"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { ICreateCategory } from "../../models/categoryModel";
import LawApi from "../../api/lawApi";
import AppBar from "../AppBar/AppBar";
import { IGetAllLaws } from "@/app/models/lawModel";
import { Paper, Typography } from "@mui/material";
import styles from "./UserConsole.module.css";

const Dashboard: React.FC = () => {
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

  useEffect(() => {
    getAllLaws();
  }, []);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar getLawByCategoryId={getLawByCategoryId} getAllLaws={getAllLaws} />
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
        <Paper sx={{boxShadow: 5}} className={styles.paper}>
          <Box className={styles.headerContainer}>
            <Typography className={styles.header} variant="h4">
              PANELI KRYESORE
            </Typography>
          </Box>
          <Box className={styles.container}>
            <Box sx={{ boxShadow: 3 }} className={styles.box}>
              <Typography variant="h5">Kushtetuta</Typography>
            </Box>
            <Box sx={{ boxShadow: 3 }} className={styles.box}>
              <Typography variant="h5">Kodi Civil</Typography>
            </Box>
            <Box sx={{ boxShadow: 3 }} className={styles.box}>
              <Typography variant="h5">VKM</Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
