import { Box, Typography, Button, Grid } from "@mui/material";
import styles from "./content.module.css";

const ContentSection: React.FC = () => {
  return (
    <Box>
      <Box className={styles.additionalContent}>
        <Box className={styles.subContainer}>
          <Box className={styles.imgContainer}>
            <img src="/lawPaper.jpg" alt="" className={styles.firstImg} />
          </Box>
          <Box className={styles.textContainer}>
            <Typography
              variant="h4"
              component="h2"
              className={styles.contentTitles}
              gutterBottom
            >
              Kushtetuta
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              className={styles.text}
            >
              Website jonë ofron të gjithë Kushtetutën e Shqipërisë në një
              format të qartë dhe të lehtë për t'u naviguar. Kjo platformë është
              burimi ideal për studentët, profesionistët dhe çdo qytetar që
              dëshiron të informohet mbi ligjet themelore të vendit.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.additionalContent}>
        <Box className={styles.subContainer}>
          <Box className={styles.textContainer}>
            <Typography
              variant="h4"
              component="h2"
              className={styles.contentTitles}
              gutterBottom
            >
              Mundesi Kerkimi
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              className={styles.text}
            >
              Searchbari ynë i ri ju lejon të gjeni shpejt dhe lehtë çdo nen dhe
              ligj që kërkoni në faqen tonë. Me rezultate të shpejta, është
              mjeti ideal për një përvojë të përmirësuar të përdoruesit.
            </Typography>
          </Box>
          <Box className={styles.imgContainerSecond} sx={{border: '0px'}}>
            <img src="/searchImg.png" alt="" className={styles.img} />
          </Box>
        </Box>
      </Box>

      <Box className={styles.additionalContent}>
        <Box className={styles.subContainer}>
          <Box className={styles.imgContainer}>
            <img src="/searchImg.png" alt="" className={styles.img} />
          </Box>
          <Box className={styles.textContainer}>
            <Typography
              variant="h4"
              component="h2"
              className={styles.contentTitles}
              gutterBottom
            >
              Mundesi Kerkimi
            </Typography>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              className={styles.text}
            >
              Searchbari ynë i ri ju lejon të gjeni shpejt dhe lehtë çdo nen dhe
              ligj që kërkoni në faqen tonë. Me rezultate të shpejta, është
              mjeti ideal për një përvojë të përmirësuar të përdoruesit.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentSection;
