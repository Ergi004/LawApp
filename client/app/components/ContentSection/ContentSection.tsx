import { Box, Typography, Button, Grid } from "@mui/material";
import styles from "./content.module.css";

const ContentSection: React.FC = () => {
  return (
    <Box>
      <Box className={styles.additionalContent}>
        <Box>
          <Typography
            variant="h4"
            component="h2"
            className={styles.contentTitles}
            gutterBottom
          >
            Additional Section 1
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque metus nec velit fringilla, a facilisis libero hendrerit.
          </Typography>
        </Box>
      </Box>

      <Box className={styles.additionalContent}>
        <Box>
          <Typography
            variant="h4"
            component="h2"
            className={styles.contentTitles}
            gutterBottom
          >
            Additional Section 2
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque metus nec velit fringilla, a facilisis libero hendrerit.
          </Typography>
        </Box>
      </Box>

      <Box className={styles.additionalContent}>
        <Box>
          <Typography
            variant="h4"
            component="h2"
            className={styles.contentTitles}
            gutterBottom
          >
            Additional Section 3
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className={styles.contentTitles}
            gutterBottom
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque metus nec velit fringilla, a facilisis libero hendrerit.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentSection;
