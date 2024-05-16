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
import Paper from "@mui/material/Paper";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MainListItems from "../components/ListItems/MainListItems";
import { useEffect, useState } from "react";
import Logout from "../components/Logout/Logout";
import { IAllParts, Part } from "../models/partModel";
import Api from "../api/partApi";
import CategoryApi from "../api/categoryApi";
import { IAllCategories, ICreateCategory } from "../models/categoryModel";
import { IGetAllLaws } from "../models/lawModel";
import LawApi from "../api/lawApi";
import { ICreateUser } from "../models/userModel";
import { HandlePartClick } from "../models/functions";
import AllLaws from "../components/AllLaws/AllLaws";

const drawerWidth: number = 320;
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
  const [parts, setParts] = useState<IAllParts[]>([]);
  const [categories, setCategories] = useState<IAllCategories[]>([]);
  const [laws, setLaws] = useState<IGetAllLaws[]>([]);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const getLoggedUser = () => {
    const data: any = localStorage.getItem("user");
    const user = JSON.parse(data);
    setLoggedUser(user);
    console.log(user);
  };

  const getAllLaws = async () => {
    const resposne = await LawApi.getAllLaws(laws);
    setLaws(resposne.data);
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
    getLoggedUser();
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
              <MainListItems
                parts={parts}
                handlePartClick={handlePartClick}
                categories={categories}
                getLawByCategoryId={getLawByCategoryId}
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
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <AllLaws laws={laws}/>
            </Container>
          </Box>
        </Box>
    </AuthGuard>
  );
};

export default Dashboard;
