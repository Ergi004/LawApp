import React from "react";
import Box from "@mui/material/Box";
import Card from "../components/Card/Card";

const bgImg =
  "url(https://img.freepik.com/free-photo/top-view-career-guidance-items-judges_23-2149443469.jpg?t=st=1714637355~exp=1714640955~hmac=0b410f1bbc36efc4828995bf27cbcd94058f4fd0b5c63f0462b72c87c3a83cf3&w=1380)";
export function Homepage() {
  return (
    <Box
      sx={{
        backgroundImage: bgImg,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "900px",
        maxWidth: "100%",
        marginTop: '50px',
        alignContent: "center",
      }}
    >
      <Box>
        <Card />
      </Box>
    </Box>
  );
}
