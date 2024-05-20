"use client";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/navigation";

const useStyles = makeStyles({
  hero: {
    background: "url('https://img.freepik.com/free-photo/still-life-with-scales-justice_23-2149776040.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716076800&semt=ais_user') no-repeat center center",
    backgroundSize: "cover",
    height: "800px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
    color: "#fff", // Ensures the text is readable against the background
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
