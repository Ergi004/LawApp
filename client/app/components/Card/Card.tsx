import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

const Card = () => {
  return (
    <Box
      sx={{
        maxWidth: "700px",
        maxHeight: "600px",
        boxShadow: 20,
        opacity: "0.88",
        backgroundColor: "white",
        margin: "70px",
        borderRadius: "5px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", padding: "20px" }}>
        <Typography
          variant="h4"
          sx={{ borderBottom: "1px solid black", padding: "20px" }}
        >
          What is Lorem Ipsum?
        </Typography>
        <Typography variant="h6" sx={{ padding: "20px" }}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </Typography>
        
      </Box>
    </Box>
  );
};

export default Card;
