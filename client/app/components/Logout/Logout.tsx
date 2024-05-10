import { Box, Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push('/')
  };

  return (
    <Box>
      <Button onClick={()=> handleLogout()} variant="contained" color="error">Logout</Button>
    </Box>
  );
};

export default Logout;
