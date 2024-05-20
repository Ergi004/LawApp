"use client";
import { Box, Typography, Button, Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  
  additionalContent: {
    backgroundColor: "#FDFFC2",
    textAlign: "center",
    padding: "20px",
  },
 
});
const ContentSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.additionalContent}>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Additional Section 1
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque metus nec velit fringilla, a facilisis libero hendrerit.
          </Typography>
        </Box>
      </Box>

      <Box className={classes.additionalContent}>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Additional Section 2
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque metus nec velit fringilla, a facilisis libero hendrerit.
          </Typography>
        </Box>
      </Box>

      <Box className={classes.additionalContent}>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Additional Section 3
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque metus nec velit fringilla, a facilisis libero hendrerit.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentSection;
