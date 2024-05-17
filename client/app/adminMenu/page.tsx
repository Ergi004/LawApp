"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { IAllParts, Part } from "../models/partModel";
import { IAllCategories } from "../models/categoryModel";
import DeleteIcon from "@mui/icons-material/Delete";
import { IAllUsers } from "../models/userModel";
import {
  ListItemButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Api from "../api/authApi";
import CategoryApi from "../api/categoryApi";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import { HandlePartClick } from "../models/functions";
import LawApi from "../api/lawApi";
import { IGetAllLaws } from "../models/lawModel";
import AppBar from "../components/AppBar/AppBar";
import AdminAppBar from "../components/AdminAppBar/AdminAppBar";

const Dashboard: React.FC = () => {
  const [allUsers, setAllUsers] = useState<IAllUsers[]>([]);
  const [parts, setParts] = useState<IAllParts[]>([]);
  const [categories, setCategories] = useState<IAllCategories[]>([]);
  const [laws, setLaws] = useState<IGetAllLaws[]>([]);
  const [myLaws, setMyLaws] = useState<IGetAllLaws[]>([]);


  const getAllLaws = async () => {
    const resposne = await LawApi.getAllLaws(laws);
    setLaws(resposne.data);
    setMyLaws(resposne.data)
  };

  const handlePartClick: HandlePartClick = async (part: Part) => {
    const response = await CategoryApi.getCategoryByPartId(
      part.part_id as number
    );
    setCategories(response.data.data);
  };
  const getAllUsers = async () => {
    const response = await Api.getAllUsers(allUsers);
    setAllUsers(response);
  };

  const handleDelete = async (id: number) => {
    const deletedUser = await Api.deleteUser(id);
    const newUsers = allUsers.filter((user) => user.id !== id);
    setAllUsers(newUsers);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <AuthGuard>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AdminAppBar
          parts={parts}
          handlePartClick={handlePartClick}
          categories={categories}
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
          <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12} lg={13} xl={11}>
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 240,
                    boxShadow: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      margin: "10px 30px",
                      borderBottom: "1px black solid",
                      paddingLeft: "15px",
                    }}
                  >
                    All Users
                  </Typography>
                  <TableContainer sx={{ minHeight: 440 }}>
                    <Table sx={{ width: "100%" }}>
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontSize: "20px" }} align="center">
                            ID
                          </TableCell>
                          <TableCell sx={{ fontSize: "20px" }} align="center">
                            First Name
                          </TableCell>
                          <TableCell sx={{ fontSize: "20px" }} align="center">
                            Last Name
                          </TableCell>
                          <TableCell sx={{ fontSize: "20px" }} align="center">
                            Email
                          </TableCell>
                          <TableCell sx={{ fontSize: "20px" }} align="center">
                            Password
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {allUsers.map?.((user) => (
                          <TableRow key={user.id}>
                            <TableCell sx={{ fontSize: "20px" }}>
                              <Typography>{user.id}</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>{user.user_name}</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>{user.last_name}</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>{user.email}</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>{user.password}</Typography>
                            </TableCell>
                            <TableCell>
                              <ListItemButton
                                onClick={() => handleDelete(user.id as number)}
                              >
                                <DeleteIcon color="error" />
                              </ListItemButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </AuthGuard>
  );
};

export default Dashboard;
