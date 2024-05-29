import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { IAllParts, Part } from "@/app/models/partModel";
import { Box, List, Tooltip, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { DropdownState, IMainListItems } from "@/app/models/functions";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";
import styles from "./listitems.module.css";

const MainListItems: React.FC<IMainListItems> = ({
  parts,
  handlePartClick,
  categories,
  getLawByCategoryId,
  getAllLaws,
}) => {
  const [toggleDrop, setToggleDrop] = useState<DropdownState>({});
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const goToConsole = () => {
    router.push("console");
  };

  const goToAccount = () => {
    router.push("account");
  };

  const handleClick = () => {
    setOpen(!open);
  };
  const handleDropDown = (id: number) => {
    setToggleDrop([]);
    setToggleDrop((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <Box>
      <ListItemButton onClick={() => goToConsole()}>
        <ListItemIcon sx={{minWidth:'40px'}} className={styles.logosContainer}>
          <HomeIcon className={styles.titleLogos}/>
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography className={styles.titles}>
              Paneli Kryesore
            </Typography>
          }
        />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          getAllLaws();
          goToAccount();
        }}
      >
        <ListItemIcon sx={{minWidth:'40px'}}>
          <AccountBalanceIcon className={styles.titleLogos}/>
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography className={styles.titles}>Te Gjitha</Typography>
          }
        />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{minWidth:'40px'}}>
          <GavelIcon className={styles.titleLogos}/>
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography className={styles.titles}>Kushtetuta</Typography>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout={500} unmountOnExit>
        {parts.map((part: Part) => {
          return (
            <Box key={part.part_id}>
              <ListItemButton
                onClick={() => {
                  handlePartClick && handlePartClick(part);
                  handleDropDown(part.part_id);
                }}
              >
                <ListItemIcon sx={{minWidth: '34px'}}>
                  <AssignmentIcon className={styles.logos}/>
                </ListItemIcon>
                <Tooltip title={part.part_title} arrow>
                  <ListItemText
                    primary={
                      <Typography className={styles.listItemText}>
                        {part.part_title}
                      </Typography>
                    }
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
                    disablePadding
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <Tooltip title={category.category_title} arrow>
                        <ListItemText
                          primary={<Typography className={styles.categories}>{category.category_title}</Typography>}
                          
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
