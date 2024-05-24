import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Box, List, Tooltip, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { useRouter } from "next/navigation";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import GavelIcon from "@mui/icons-material/Gavel";
import {
  DropdownState,
  HandlePartClick,
  IMainListItems,
} from "@/app/models/functions";
import { Part } from "@/app/models/partModel";

const MainListItems: React.FC<IMainListItems> = ({
  parts,
  handlePartClick,
  categories,
  getLawByCategoryId,
}) => {
  const [toggleDrop, setToggleDrop] = useState<DropdownState>({});
  const [active, setActive] = useState<DropdownState>();
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDropDown = (id: number) => {
    setToggleDrop({})
    setToggleDrop((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  const gotToAdminDashboard = () => {
    router.push("/adminAccount");
  };
  const gotToEditLaws = () => {
    router.push("/editLaws");
  };

  const goToUserEdit = () => {
    router.push("/adminMenu");
  };

  return (
    <Box>
      <ListItemButton
        onClick={() => {
          gotToAdminDashboard();
        }}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => goToUserEdit()}>
        <ListItemIcon>
          <SupervisedUserCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton onClick={() => gotToEditLaws()}>
        <ListItemIcon>
          <BorderColorIcon />
        </ListItemIcon>
        <ListItemText primary="Edit Laws" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <GavelIcon />
        </ListItemIcon>
        <ListItemText primary="Kushtetuta" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout={500} unmountOnExit>
        {parts.map((part: Part) => {
          return (
            <Box>
              <ListItemButton
                key={part.part_id}
                onClick={() => {
                  handlePartClick && handlePartClick(part);
                  handleDropDown(part.part_id);
                }}
              >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <Tooltip title={part.part_title} arrow>
                  <ListItemText
                    primary={part.part_title}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "200px",
                    }}
                  />
                </Tooltip>
                {toggleDrop[part.part_id] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={toggleDrop[part.part_id]}
                timeout={500}
                unmountOnExit
              >
                {categories?.map((category) => (
                  <List
                    key={category.category_id}
                    onClick={() => {
                      getLawByCategoryId && getLawByCategoryId(category);
                    }}
                    component="div"
                    sx={{ pl: 4 }}
                    disablePadding
                  >
                    <ListItemButton>
                      <Tooltip title={category.category_title} arrow>
                        <ListItemText
                          primary={category.category_title}
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "wrap",
                            maxWidth: "300px",
                          }}
                        />
                      </Tooltip>
                    </ListItemButton>
                  </List>
                ))}
              </Collapse>
            </Box>
          );
        })}
      </Collapse>
    </Box>
  );
};

export default MainListItems;
