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
                QELLIMI JONE
              </Typography>
            </Box>
            <Box className={styles.contentContainer}>
              <Box
                sx={{ maxWidth: "400px", display: "flex" }}
                className={styles.featureContainer}
              >
                <Box sx={{ margin: "40px 0 0 0" }}>
                  <img className={styles.img} src="/sun-logo.png" />
                </Box>
                <Box sx={{ margin: "10px 20px 0" }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={styles.featuresTitles}
                  >
                    Studentët
                  </Typography>
                  <Typography className={styles.featuresText}>
                    Ky projekt do të ndihmojë studentët e drejtësisë të kenë
                    qasje të shpejtë dhe të lehtë në materiale ligjore të
                    përditësuara, duke u mundësuar atyre të përgatiten më mirë
                    për provime dhe detyra të ndryshme akademike.
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
                    Avokatët
                  </Typography>
                  <Typography className={styles.featuresText}>
                    Gjithashtu, kjo faqe do të jetë një burim i vlefshëm për
                    avokatët që kërkojnë referenca të shpejta gjatë përgatitjes
                    së rasteve të tyre, duke reduktuar kohën që ata shpenzojnë
                    për kërkime.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ maxWidth: "400px", display: "flex" }}
                className={styles.featureContainer}
              >
                <Box sx={{ margin: "45px 0 0 0" }}>
                  <img className={styles.img} src="/sun-logo.png" />
                </Box>
                <Box sx={{ margin: "20px 20px 0" }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className={styles.featuresTitles}
                  >
                    Qytetarët
                  </Typography>
                  <Typography className={styles.featuresText}>
                    Përveç këtyre, faqja do të ofrojë transparencë dhe qasje të
                    lirë për qytetarët që duan të jenë të informuar për ligjet e
                    vendit të tyre, duke promovuar kështu një shoqëri më të
                    drejtë dhe të informuar.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FeatureSection;
