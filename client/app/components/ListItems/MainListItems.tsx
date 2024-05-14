import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { IAllParts } from "@/app/models/partModel";
import { Box, List } from "@mui/material";
import { GetLawByCategoryId, HandlePartClick } from "@/app/account/page";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { IAllCategories } from "@/app/models/categoryModel";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { useRouter } from "next/navigation";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import GavelIcon from "@mui/icons-material/Gavel";

export interface Part {
  part_id: number;
  part_number: string;
  part_title: string;
}

interface IMainListItems {
  parts: IAllParts[];
  handlePartClick: HandlePartClick;
  categories: IAllCategories[];
  getLawByCategoryId: GetLawByCategoryId;
}
interface DropdownState {
  [key: number]: boolean;
}

const MainListItems: React.FC<IMainListItems> = ({
  parts,
  handlePartClick,
  categories,
  getLawByCategoryId,
}) => {
  const [toggleDrop, setToggleDrop] = useState<DropdownState>({});
  const router = useRouter();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleDropDown = (id: number) => {
    setToggleDrop({});
    setToggleDrop((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <Box>
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
                <ListItemText primary={part.part_title} />
                {toggleDrop[part.part_id] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={toggleDrop[part.part_id]}
                timeout={500}
                unmountOnExit
              >
                {categories.map?.((category) => (
                  <List
                    key={category.category_id}
                    onClick={() => {
                      getLawByCategoryId && getLawByCategoryId(category);
                    }}
                    component="div"
                    disablePadding
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary={category.category_title} />
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
