'use client'
import { Box, Typography, Button, Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  hero: {
    background: "#f5f5f5", // Light gray background
    height: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  },
  features: {
    marginTop: "50px",
    textAlign: "center",
  },
  featureItem: {
    padding: "20px",
  },
  additionalContent: {
    marginTop: "50px",
    textAlign: "center",
    padding: "20px",
  },
  footer: {
    marginTop: "50px",
    padding: "20px",
    background: "#f5f5f5",
    textAlign: "center",
  },
});


const FeatureSection = () => {
  const classes = useStyles()
  
  return (
    <Box className={classes.features}>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} className={classes.featureItem}>
            <Typography variant="h6" component="h3">
              All-in-one finances
            </Typography>
            <Typography variant="body1">
              We bring all of your money to one place, from balances and bills
              to credit score and more.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className={classes.featureItem}>
            <Typography variant="h6" component="h3">
              Budgets made simple
            </Typography>
            <Typography variant="body1">
              Easily create budgets, and see our suggestions based on your
              spending.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className={classes.featureItem}>
            <Typography variant="h6" component="h3">
              Unlimited credit scores
            </Typography>
            <Typography variant="body1">
              Check your free credit score as many times as you like, and get
              tips to help improve it.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FeatureSection;
