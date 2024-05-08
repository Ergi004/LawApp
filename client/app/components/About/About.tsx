import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "0px auto",
        backgroundColor: "#F9F5E7",
        padding: "30px 0",
        borderBottom: "1px solid black",
      }}
    >
      <Box sx={{ maxWidth: "95%", margin: "0 auto" }}>
        <Typography
          variant="h3"
          style={{
            borderBottom: "1px black solid",
            padding: "0px 0px 20px 40px",
          }}
        >
          About Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            maxWidth: "1600px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ maxWidth: "500px", margin: "0 auto" }}>
            <Typography variant="h5" style={{ margin: "50px 0" }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, "
            </Typography>
          </Box>
          <Box sx={{ margin: "30px" }}>
            <img
              style={{ maxWidth: "500px", borderRadius: "10px" }}
              src="/bgImage.jpg"
              alt="Image"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            maxWidth: "1600px",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ margin: "30px auto" }}>
            <img
              style={{ maxWidth: "500px", borderRadius: "10px" }}
              src="/bgImage.jpg"
              alt="Image"
            />
          </Box>
          <Box sx={{ maxWidth: "500px", margin: "30px auto" }}>
            <Typography variant="h5">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, "
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
