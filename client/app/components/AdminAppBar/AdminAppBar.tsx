"use client";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import LogoutModal from "../LogoutModal/LogoutModal";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import { ILoggedUser } from "@/app/models/userModel";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {  IMyAppBarProps } from "@/app/models/functions";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Divider,
  List,
} from "@mui/material";
import AdminListItems from "../AdminListItems/AdminListItems";
import { IAllParts } from "@/app/models/partModel";
import Api from "@/app/api/partApi";
import styles from './adminAppBar.module.css'
const drawerWidth: number = 250;
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "absolute",
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

const MyAppBar = styled(MuiAppBar, {
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

const AdminAppBar: React.FC<IMyAppBarProps> = ({
  getLawByCategoryId,
  getAllLaws,
  categories,
  handlePartClick
}) => {
  const [open, setOpen] = useState(false);
  const [loggedUser, setLoggedUser] = useState<ILoggedUser>();
  const [parts, setParts] = useState<IAllParts[]>([]);

  const getAllParts = async () => {
    const response = await Api.getAllParts(parts);
    setParts(response);
  };
  
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const getLoggedUser = () => {
    const data: any = localStorage.getItem("user");
    const user = JSON.parse(data);
    setLoggedUser(user);
  };

  useEffect(() => {
    getLoggedUser();
    getAllParts();
  }, []);
  return (
    <Box>
      <MyAppBar position="absolute" open={open}>
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
            className={styles.welcomeTxt}
          >
            Welcome {loggedUser?.user_name}
          </Typography>
          <LogoutModal />
        </Toolbar>
      </MyAppBar>
      <AppDrawer variant="permanent" open={open}>
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
            handlePartClick={handlePartClick}
            categories={categories}
            getLawByCategoryId={getLawByCategoryId}
            getAllLaws={getAllLaws}
            parts={parts}
          />
          <Divider sx={{ my: 1 }} />
        </List>
      </AppDrawer>
    </Box>
  );
};

export default AdminAppBar;
