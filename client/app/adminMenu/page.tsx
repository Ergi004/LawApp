import * as React from "react";
import Box from "@mui/material/Box";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import AdminMenuPage from '../components/AdminMenuPage/AdminMenuPage'

const AdminMenu: React.FC = () => {
  return (
    <AuthGuard>
      <Box sx={{ display: "flex" }}>
        <AdminMenuPage />
      </Box>
    </AuthGuard>
  );
};

export default AdminMenu;
