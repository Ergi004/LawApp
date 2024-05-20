import * as React from "react";
import Box from "@mui/material/Box";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import AdminAccountPage from "../components/AdminAccountPage/AdminAccountPage";

const Dashboard: React.FC = () => {
  return (
    <AuthGuard>
      <Box sx={{ display: "flex" }}>
        <AdminAccountPage />
      </Box>
    </AuthGuard>
  );
};

export default Dashboard;
