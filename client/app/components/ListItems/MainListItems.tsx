import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { IAllParts, Part } from "@/app/models/partModel";
import { Box, List, Tooltip } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { IAllCategories } from "@/app/models/categoryModel";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import {
  DropdownState,
  GetLawByCategoryId,
  HandlePartClick,
  IGetAllLawsProp,
} from "@/app/models/functions";

interface IMainListItems {
  parts: IAllParts[];
  handlePartClick?: HandlePartClick;
  categories: IAllCategories[];
  getLawByCategoryId?: GetLawByCategoryId;
  getAllLaws: IGetAllLawsProp;
}

const MainListItems: React.FC<IMainListItems> = ({
  parts,
  handlePartClick,
  categories,
  getLawByCategoryId,
  getAllLaws,
}) => {
  const [toggleDrop, setToggleDrop] = useState<DropdownState>({});
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleDropDown = (id: number) => {
    setToggleDrop([]);
    setToggleDrop((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <Box>
      <ListItemButton onClick={() => getAllLaws()}>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Te gjitha" />
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
                      whiteSpace: "wrap",
                      maxWidth: "300px",
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
                {categories.map((category) => (
                  <List
                    key={category.category_id}
                    onClick={() => {
                      getLawByCategoryId && getLawByCategoryId(category);
                    }}
                    component="div"
                    disablePadding
                  >
                    <ListItemButton sx={{ pl: 4 }}>
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
