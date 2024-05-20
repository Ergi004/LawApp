'use client'
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AdminAppBar from "../AdminAppBar/AdminAppBar";
import AllUsers from "../AllUsers/AllUsers";

const AdminMenu: React.FC = () => {

  
  return (
      <Box sx={{ display: "flex", width: '100%' }}>
        <CssBaseline />
        <AdminAppBar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 240,
                    boxShadow: 10,
                    backgroundColor: "white",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      margin: "10px 30px",
                      borderBottom: "1px black solid",
                      paddingLeft: "15px",
                    }}
                  >
                    All Users
                  </Typography>
                  <AllUsers />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
  );
};

export default AdminMenu;
