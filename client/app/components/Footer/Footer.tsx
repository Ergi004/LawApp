"use client";
import { Box, Typography } from "@mui/material";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Typography
        className={styles.contact}
        variant="h6"
        component="h3"
        gutterBottom
      >
        Kontakto
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            margin: "0 20px",
            maxWidth: "300px",
            flexDirection: "column",
          }}
        >
          <Typography className={styles.info} variant="body1" component="p">
            Email: example@example.com
          </Typography>
          <Typography className={styles.info} variant="body1" component="p">
            Phone: (123) 456-7890
          </Typography>
          <Typography className={styles.info} variant="body1" component="p">
            Address: 123 Main St, Anytown, USA
          </Typography>
        </Box>
       
      </Box>
    </Box>
  );
};

export default Footer;
