"use client";
import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
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
import { Part } from "../components/ListItems/MainListItems";
import AdminListItems from "../components/AdminListItems/AdminListItems";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logout from "../components/Logout/Logout";
import { IAllParts } from "../models/partModel";
import { IAllCategories, ICreateCategory } from "../models/categoryModel";
import { ICreateUser } from "../models/userModel";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Card,
  ListItemButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Api from "../api/authApi";
import CategoryApi from "../api/categoryApi";
import { IGetAllLaws } from "../models/lawModel";

const drawerWidth: number = 240;

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

const defaultTheme = createTheme();

const AuthGuard = ({ children }: any) => {
  const router = useRouter();
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      router.push("/");
    }
  }, [router]);
  return <>{children}</>;
};

export interface HandlePartClick {
  (part: Part): void;
}


const EditLaws: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [loggedUser, setLoggedUser] = useState<ICreateUser>();
  const [parts, setParts] = useState<IAllParts[]>([]);
  const [categories, setCategories] = useState<IAllCategories[]>([]);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handlePartClick: HandlePartClick = async (part: Part) => {
    const response = await CategoryApi.getCategoryByPartId(
      part.part_id as number
    );
    setCategories(response.data.data);
  };


  const getLoggedUser = () => {
    const data: any = localStorage.getItem("user");
    const user = JSON.parse(data);
    setLoggedUser(user);
  };


  useEffect(() => {
    getLoggedUser();
  }, []);

  return (
    <AuthGuard>
      <ThemeProvider theme={defaultTheme}>
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
                <Grid item xs={12} md={12} lg={13} xl={12}>
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
                    <Card sx={{ margin: "20px" }}>
                      <Box
                        sx={{
                          borderBottom: "0.5px #222222 solid",
                          margin: "10px",
                        }}
                      >
                        <Typography
                          sx={{ margin: "10px 40px", fontWeight: "bold" }}
                          variant="h5"
                        >
                          Fill the forms to add Parts
                        </Typography>
                      </Box>
                      <Box sx={{ margin: "20px", display: "flex" }}>
                        <TextField
                          id="outlined-basic"
                          label="Part Number"
                          variant="outlined"
                          sx={{ margin: "0 30px", maxWidth: "400px" }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Part Title"
                          variant="outlined"
                          sx={{ margin: "0 30px", maxWidth: "400px" }}
                        />
                      </Box>
                    </Card>
                    <Card sx={{ margin: "20px" }}>
                      <Box
                        sx={{
                          borderBottom: "0.5px black solid",
                          margin: "10px",
                        }}
                      >
                        <Typography
                          sx={{ margin: "10px 40px", fontWeight: "bold" }}
                          variant="h5"
                        >
                          Fill the forms to add Categories
                        </Typography>
                      </Box>
                      <Box sx={{ margin: "20px", display: "flex" }}>
                        <TextField
                          id="outlined-basic"
                          label="Category Number"
                          variant="outlined"
                          sx={{ margin: "0 30px", maxWidth: "400px" }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Category Title"
                          variant="outlined"
                          sx={{ margin: "0 30px", maxWidth: "400px" }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Part ID"
                          variant="outlined"
                          sx={{ margin: "0 30px", maxWidth: "400px" }}
                        />
                      </Box>
                    </Card>
                    <Card sx={{ margin: "20px" }}>
                      <Box
                        sx={{
                          borderBottom: "0.5px  black solid",
                          margin: "10px",
                        }}
                      >
                        <Typography
                          sx={{ margin: "10px 40px", fontWeight: "bold" }}
                          variant="h5"
                        >
                          Fill the forms to add Laws
                        </Typography>
                      </Box>
                      <Box sx={{ margin: "20px", display: "flex" }}>
                        <TextField
                          id="outlined-basic"
                          label="Law Name"
                          variant="outlined"
                          sx={{ margin: "0 20px", maxWidth: "400px" }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Law Description"
                          multiline
                          maxRows={50}
                          sx={{ margin: "0 20px", width: "500px" }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Category ID"
                          variant="outlined"
                          sx={{ margin: "0 20px", maxWidth: "400px" }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Written Date"
                          variant="outlined"
                          sx={{ margin: "0 20px", maxWidth: "400px" }}
                        />
                      </Box>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </AuthGuard>
  );
};

export default EditLaws;
