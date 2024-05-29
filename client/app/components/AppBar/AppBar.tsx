import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import LogoutModal from "../LogoutModal/LogoutModal";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import { ILoggedUser } from "@/app/models/userModel";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { HandlePartClick, IMyAppBarProps } from "@/app/models/functions";
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
import MainListItems from "../ListItems/MainListItems";
import SearchBar from "../SearchBar/SearchBar";
import { IAllCategories } from "@/app/models/categoryModel";
import { IAllParts, Part } from "@/app/models/partModel";
import PartApi from "../../api/partApi";
import LawApi from "../../api/lawApi";
import CategoryApi from "../../api/categoryApi";
import { IGetAllLaws } from "@/app/models/lawModel";

const drawerWidth: number = 220;
const responsiveDrawer: number = 300;
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
    [theme.breakpoints.up("sm")]: {
      width: responsiveDrawer,
    },
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(6.8),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(7),
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
    marginLeft: responsiveDrawer,
    width: `calc(100% - ${responsiveDrawer}px)`,
    [theme.breakpoints.down("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBar: React.FC<IMyAppBarProps> = ({
  getLawByCategoryId,
  getAllLaws,
}) => {
  const [open, setOpen] = useState(true);
  const [parts, setParts] = useState<IAllParts[]>([]);
  const [loggedUser, setLoggedUser] = useState<ILoggedUser>();
  const [categories, setCategories] = useState<IAllCategories[]>([]);

  const getAllParts = async () => {
    const response = await PartApi.getAllParts(parts);
    setParts(response);
  };
  const handlePartClick: HandlePartClick = async (part: Part) => {
    const response = await CategoryApi.getCategoryByPartId(
      part.part_id as number
    );
    setCategories(response.data.data);
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
          <MainListItems
            parts={parts}
            handlePartClick={handlePartClick}
            categories={categories}
            getLawByCategoryId={getLawByCategoryId}
            getAllLaws={getAllLaws}
          />
          <Divider sx={{ my: 1 }} />
        </List>
      </AppDrawer>
    </Box>
  );
};

export default AppBar;
