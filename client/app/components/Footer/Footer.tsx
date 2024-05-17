"use client";
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
    margin: "0 auto",
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.footer}>
      <Typography
        sx={{ padding: "20px" }}
        variant="h6"
        component="h3"
        gutterBottom
      >
        Contact Us
      </Typography>
      <Box sx={{ display: "flex", margin: "0 auto", maxWidth: "800px" }}>
        <Typography sx={{ padding: "20px" }} variant="body1" component="p">
          Email: example@example.com
        </Typography>
        <Typography sx={{ padding: "20px" }} variant="body1" component="p">
          Phone: (123) 456-7890
        </Typography>
        <Typography sx={{ padding: "20px" }} variant="body1" component="p">
          Address: 123 Main St, Anytown, USA
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;