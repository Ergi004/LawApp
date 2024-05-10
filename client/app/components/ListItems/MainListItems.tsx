import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { IAllParts } from "@/app/models/partModel";
import { Box, List } from "@mui/material";
import { HandlePartClick } from "@/app/account/page";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useState } from "react";

export interface Part {
  part_id: number;
  part_number: string;
  part_title: string;
}

interface IMainListItems {
  parts: IAllParts[];
  handlePartClick: HandlePartClick;
}
interface DropdownState {
  [key: number]: boolean;
}

const MainListItems: React.FC<IMainListItems> = ({
  parts,
  handlePartClick,
}) => {
  const [open, setOpen] = useState(true);
  const [toggleDrop, setToggleDrop] = useState<DropdownState>({});
  const handleDropDown = (id: number) => {
    setToggleDrop((prevState) => ({ ...prevState, [id]: !prevState[id] }));
    setOpen(!open);

  };
  const handleClick = (id: number) => {
  };

  return (
    <Box>
      {parts.map((part: Part) => {
        return (
          <Box>
            <ListItemButton
              key={part.part_id}
              onClick={() => {
                handlePartClick && handlePartClick(part);
                // handleClick(part.part_id);
                handleDropDown(part.part_id);
              }}
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary={part.part_number} />
              {toggleDrop[part.part_id] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
};

export default MainListItems;