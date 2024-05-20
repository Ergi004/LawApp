import * as React from "react";
import Box from "@mui/material/Box";
import AuthGuard from "../components/AuthGuard/AuthGuard";
import AdminMenuPage from '../components/AdminMenuPage/AdminMenuPage'

const AdminMenu: React.FC = () => {
  return (
    <AuthGuard>
      <Box sx={{ display: "flex" }}>
        {/* <CssBaseline />
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
              <Grid item xs={12} md={12} lg={13} xl={11}>
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
        </Box> */}
        <AdminMenuPage />
      </Box>
    </AuthGuard>
  );
};

export default AdminMenu;
