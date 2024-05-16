"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AdminListItems from "../components/AdminListItems/AdminListItems";
import { useEffect, useState } from "react";
import Logout from "../components/Logout/Logout";
import { IAllParts, Part } from "../models/partModel";
import { IAllCategories } from "../models/categoryModel";
import DeleteIcon from "@mui/icons-material/Delete";
import { IAllUsers, ICreateUser } from "../models/userModel";
import MenuIcon from "@mui/icons-material/Menu";
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
import LawApi from '../api/lawApi'
import { IGetAllLaws } from "../models/lawModel";
const drawerWidth: number = 350;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Dashboard: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [loggedUser, setLoggedUser] = useState<ICreateUser>();
  const [allUsers, setAllUsers] = useState<IAllUsers[]>([]);
  const [parts, setParts] = useState<IAllParts[]>([]);
  const [categories, setCategories] = useState<IAllCategories[]>([]);
  const [laws, setLaws] = useState<IGetAllLaws[]>([]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const getAllLaws = async () => {
    const resposne = await LawApi.getAllLaws(laws);
    setLaws(resposne.data);
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

  const getLoggedUser = () => {
    const data: any = localStorage.getItem("user");
    const user = JSON.parse(data);
    setLoggedUser(user);
  };

  const handleDelete = async (id: number) => {
    const deletedUser = await Api.deleteUser(id);
    const newUsers = allUsers.filter((user) => user.id !== id);
    setAllUsers(newUsers);
  };

  useEffect(() => {
    getLoggedUser();
    getAllUsers();
  }, []);

  return (
    <AuthGuard>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Welcome {loggedUser?.user_name}
            </Typography>
            <Logout />
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <AdminListItems
              parts={parts}
              handlePartClick={handlePartClick}
              categories={categories}
              getAllLaws={getAllLaws}
            />
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
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
