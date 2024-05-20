import * as React from "react";
import Box from "@mui/material/Box";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import SimpleUserPage from '../components/SimpleUserPage/SimpleUserPage'

const Dashboard: React.FC = () => {
  return (
    <AuthGuard>
      <Box sx={{ display: "flex" }}>
        <SimpleUserPage/>
      </Box>
    </AuthGuard>
  );
};

export default Dashboard;
