"use client";
import { Box, Typography, Container } from "@mui/material";
import React from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import styles from "./featureSection.module.css";

const FeatureSection = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Box>
      {/* <ThemeProvider theme={theme}> */}
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          padding: 3,
          backgroundColor: "#222831",
          color: "#F6F5F2",
        }}
      >
        <Container>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box className={styles.headerContainer}>
              <Typography component="h2" className={styles.header}>
                WHAT WE OFFER
              </Typography>
            </Box>
            <Box className={styles.contentContainer}>
              <Box sx={{ maxWidth: "400px", display: "flex" }} className={styles.featureContainer}>
                <Box sx={{ margin: "40px 0 0 0" }}>
                  <img className={styles.img} src="/sun-logo.png" />
                </Box>
                <Box sx={{ margin: "10px 20px 0" }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={styles.featuresTitles}
                  >
                    Lorem Ipsum
                  </Typography>
                  <Typography className={styles.featuresText}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  maxWidth: "400px",
                  display: "flex",
                  
                }}
                className={styles.featureContainer}
              >
                <Box sx={{ margin: "45px 0 0 0" }}>
                  <img className={styles.img} src="/sun-logo.png" />
                </Box>
                <Box sx={{ margin: "20px 20px 0 " }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={styles.featuresTitles}
                  >
                    Lorem Ipsum
                  </Typography>
                  <Typography className={styles.featuresText}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ maxWidth: "400px", display: "flex",  }} className={styles.featureContainer}>
                <Box sx={{ margin: "45px 0 0 0" }}>
                  <img className={styles.img} src="/sun-logo.png" />
                </Box>
                <Box sx={{ margin: "20px 20px 0" }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={styles.featuresTitles}
                  >
                    Lorem Ipsum
                  </Typography>
                  <Typography className={styles.featuresText}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* </ThemeProvider> */}
    </Box>
  );
};

export default FeatureSection;
