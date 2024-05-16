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
import { IAllParts, ICreatePart, Part } from "../models/partModel";
import { IAllCategories, ICreateCategory } from "../models/categoryModel";
import { ICreateUser } from "../models/userModel";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Card, TextField } from "@mui/material";
import CategoryApi from "../api/categoryApi";
import { ICreateLaw, IGetAllLaws } from "../models/lawModel";
import LawApi from "../api/lawApi";
import PartApi from "../api/partApi";
import { HandlePartClick } from "../models/functions";
import AuthGuard from "../components/AuthGuard/AuthGuard";

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



const EditLaws: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [loggedUser, setLoggedUser] = useState<ICreateUser>();
  const [parts, setParts] = useState<IAllParts[]>([]);
  const [categories, setCategories] = useState<IAllCategories[]>([]);
  const [laws, setLaws] = useState<IGetAllLaws[]>([]);
  const [createPart, setCreatePart] = useState<ICreatePart>();
  const [createCategory, setCreateCategory] = useState<ICreateCategory>();
  const [createLaw, setCreateLaw] = useState<ICreateLaw>();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const getLoggedUser = () => {
    const data: any = localStorage.getItem("user");
    const user = JSON.parse(data);
    setLoggedUser(user);
  };

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

  const addPart = async () => {
    const response = await PartApi.createPart(createPart as ICreatePart);
    setCreatePart(response.data);
    getAllParts();
  };

  const addCategory = async () => {
    const response = await CategoryApi.createCategory(
      createCategory as ICreateCategory
    );
    setCreateCategory(response.data);
    handlePartClick(response.data);
  };

  const addLaw = async () => {
    const response = await LawApi.createLaw(createLaw as ICreateLaw);
    setCreateLaw(response.data);
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
              <AdminListItems
                parts={parts}
                handlePartClick={handlePartClick}
                categories={categories}
                getLawByCategoryId={getLawByCategoryId}
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
                      <Box
                        sx={{
                          margin: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Part Number"
                          variant="outlined"
                          value={createPart?.part_number}
                          onChange={(e) =>
                            setCreatePart((prev: any) => ({
                              ...prev,
                              part_number: e.target.value,
                            }))
                          }
                          sx={{ margin: "0 30px", maxWidth: "400px" }}
                        />
                        <TextField
                          id="outlined-basic"
                          label="Part Title"
                          value={createPart?.part_title}
                          onChange={(e) =>
                            setCreatePart((prev: any) => ({
                              ...prev,
                              part_title: e.target.value,
                            }))
                          }
                          variant="outlined"
                          sx={{ margin: "0 30px", maxWidth: "400px" }}
                        />
                        <Button
                          onClick={() => addPart()}
                          variant="contained"
                          sx={{ maxWidth: "130px", height: "35px" }}
                        >
                          Add Part
                        </Button>
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
                      <Box
                        sx={{
                          margin: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Category Number"
                          variant="outlined"
                          sx={{ margin: "0 30px", maxWidth: "400px" }}
                          value={createCategory?.category_number}
                          onChange={(e) =>
                            setCreateCategory((prev: any) => ({
                              ...prev,
                              category_number: e.target.value,
                            }))
                          }
                        />
                        <TextField
                          id="outlined-basic"
                          label="Category Title"
                          variant="outlined"
                          sx={{ margin: "0 30px", maxWidth: "400px" }}
                          value={createCategory?.category_title}
                          onChange={(e) =>
                            setCreateCategory((prev: any) => ({
                              ...prev,
                              category_title: e.target.value,
                            }))
                          }
                        />
                        <TextField
                          id="outlined-basic"
                          label="Part ID"
                          variant="outlined"
                          sx={{ margin: "0 30px", maxWidth: "400px" }}
                          value={createCategory?.part_id}
                          onChange={(e) =>
                            setCreateCategory((prev: any) => ({
                              ...prev,
                              part_id: e.target.value,
                            }))
                          }
                        />
                        <Button
                          variant="contained"
                          sx={{ maxWidth: "130px", height: "35px" }}
                          onClick={() => addCategory()}
                        >
                          Add Part
                        </Button>
                      </Box>
                    </Card>
                    <Card sx={{ margin: "20px" }}>
                      <Box
                        sx={{
                          borderBottom: "0.5px  black solid",
                          margin: "10px",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{ margin: "10px 40px", fontWeight: "bold" }}
                          variant="h5"
                        >
                          Fill the forms to add Laws
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          margin: "20px",
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        <TextField
                          id="outlined-basic"
                          label="Law Name"
                          variant="outlined"
                          sx={{ margin: "0 20px", maxWidth: "400px" }}
                          value={createLaw?.law_name}
                          onChange={(e) =>
                            setCreateLaw((prev: any) => ({
                              ...prev,
                              law_name: e.target.value,
                            }))
                          }
                        />
                        <TextField
                          id="outlined-basic"
                          label="Law Description"
                          multiline
                          maxRows={50}
                          sx={{ margin: "0 20px", width: "500px" }}
                          value={createLaw?.law_description}
                          onChange={(e) =>
                            setCreateLaw((prev: any) => ({
                              ...prev,
                              law_description: e.target.value,
                            }))
                          }
                        />
                        <TextField
                          id="outlined-basic"
                          label="Category ID"
                          variant="outlined"
                          sx={{ margin: "0 20px", maxWidth: "400px" }}
                          value={createLaw?.category_id}
                          onChange={(e) =>
                            setCreateLaw((prev: any) => ({
                              ...prev,
                              category_id: e.target.value,
                            }))
                          }
                        />
                        <TextField
                          id="outlined-basic"
                          label="Written Date"
                          variant="outlined"
                          sx={{ margin: "0 20px", maxWidth: "400px" }}
                          value={createLaw?.written_date}
                          onChange={(e) =>
                            setCreateLaw((prev: any) => ({
                              ...prev,
                              written_date: e.target.value,
                            }))
                          }
                        />
                        <Button
                          variant="contained"
                          sx={{ maxWidth: "130px", height: "35px" }}
                          onClick={() => addLaw()}
                        >
                          Add Part
                        </Button>
                      </Box>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
    </AuthGuard>
  );
};

export default EditLaws;
