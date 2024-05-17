"use client";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/navigation";

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

const Hero: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();

  const goToSignup = () => {
    router.push("/signup");
  };

  return (
    <Box className={classes.hero}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          It's all coming together
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          When you’re on top of your money, life is good. We help you
          effortlessly manage your finances in one place.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => goToSignup()}
        >
          Sign up Free
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
