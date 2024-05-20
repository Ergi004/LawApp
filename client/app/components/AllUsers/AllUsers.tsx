'use client'
import Api from "@/app/api/authApi";
import { IAllUsers } from "@/app/models/userModel";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  ListItemButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";


const AllUsers = () => {
  const [allUsers, setAllUsers] = useState<IAllUsers[]>([]);
  const getAllUsers = async () => {
    const response = await Api.getAllUsers(allUsers);
    setAllUsers(response);
  };

  const handleDelete = async (id: number) => {
    const deletedUser = await Api.deleteUser(id);
    const newUsers = allUsers.filter((user) => user.id !== id);
    setAllUsers(newUsers);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <TableContainer sx={{ minHeight: 440 }}>
      <Table sx={{ width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "20px" }} align="center">
              ID
            </TableCell>
            <TableCell sx={{ fontSize: "20px" }} align="center">
              First Name
            </TableCell>
            <TableCell sx={{ fontSize: "20px" }} align="center">
              Last Name
            </TableCell>
            <TableCell sx={{ fontSize: "20px" }} align="center">
              Email
            </TableCell>
            <TableCell sx={{ fontSize: "20px" }} align="center">
              Password
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell sx={{ fontSize: "20px" }}>
                <Typography>{user.id}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{user.user_name}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{user.last_name}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{user.email}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{user.password}</Typography>
              </TableCell>
              <TableCell>
                <ListItemButton onClick={() => handleDelete(user.id as number)}>
                  <DeleteIcon color="error" />
                </ListItemButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllUsers;
