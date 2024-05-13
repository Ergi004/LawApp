import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Box, List } from "@mui/material";
import { useState } from "react";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { useRouter } from "next/navigation";



const MainListItems: React.FC = () => {
  const router = useRouter()

  const gotToAdminDashboard= ()=> {
    router.push('/adminAccount')
  }

  
  return (
    <React.Fragment>
      <ListItemButton>
        <ListItemIcon>
          <SupervisedUserCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton onClick={()=> gotToAdminDashboard()}>
        <ListItemIcon >
        <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Edit Laws"/>
      </ListItemButton>
      {/* <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton> */}
    </React.Fragment>
  );
};

export default MainListItems;
