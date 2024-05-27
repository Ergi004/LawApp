import { Box, Typography } from "@mui/material";
import styles from "./hero.module.css";

const Hero: React.FC = () => {
  return (
    <Box className={styles.hero} sx={{ boxShadow: 5 }}>
      <img className={styles.img} src="/paper-logo.jpg" alt="Background" />
      <Box className={styles.textContainer}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: "'Krona One', sans-serif",
            fontSize: { xs: "24px", sm: "48px" },
            margin: '20px'
          }}
        >
          Ligji në Dorën Tënde
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            fontFamily: "'Krona One', sans-serif",
            fontSize: { xs: "14px", sm: "24px" },
          }}
          gutterBottom
        >
          Në Ligjëratë të Drejtësisë, Ne Krijojmë Rrjedhën e Diturisë
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
