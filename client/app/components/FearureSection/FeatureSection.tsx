"use client";
import { Box, Typography, Button, Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
 
  features: {
    background: "#FDFFC2",
    textAlign: "center",
  },
  featureItem: {
    padding: "20px",
  },
  
});

const FeatureSection = () => {
  const classes = useStyles();

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
