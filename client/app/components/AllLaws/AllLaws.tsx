import { Grid, Paper, Box, Typography, typographyClasses } from "@mui/material";
import React from "react";
import { AllLawsProps, Law } from "@/app/models/lawModel";
import SearchBar from "../SearchBar/SearchBar";

const AllLaws: React.FC<AllLawsProps> = ({ laws, myLaws, setLaws }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={13}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            minHeight: 240,
            alignItems: 'center',
            boxShadow: 10
          }}
        >
          <SearchBar myLaws={myLaws} setLaws={setLaws} />
          <Box
            sx={{
              margin: "30px auto",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", fontSize: "25px", padding: "10px" }}
            >
              KUSHTETUTA E REPUBLIKËS SË SHQIPËRISË
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: "15px", margin: "0px auto" }}
            >
              (Ndryshuar me ligjet: nr. 9675, datë 13.1.2007; nr. 9904, datë
              21.4.2008; nr. 88/2012, datë 18.9.2012; nr. 137/2015, datë
              17.12.2015; nr. 76/2016, datë 22.7.2016; nr. 115/2020,datë
              30.7.2020; nr. 16/2022, datë 10.2.2022)
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: "17px",
              margin: "10px 50px",
              maxWidth: "800px",
              alignSelf: "center",
            }}
          >
            Ne, Populli i Shqipërisë, krenarë dhe të vetëdijshëm për historinë
            tonë, me përgjegjësi për të ardhmen,
            <br /> me besim te Zoti dhe/ose te vlera të tjera universale, me
            vendosmërinë për të ndërtuar një shtet të së drejtës, demokratik e
            social,
            <br /> për të garantuar të drejtat dhe liritë themelore të njeriut,
            me frymën e tolerancës dhe të bashkëjetesës fetare, me zotimin për
            mbrojtjen e dinjitetit dhe të personalitetit njerëzor,
            <br /> si dhe për prosperitetin e të gjithë kombit, për paqen,
            mirëqenien, kulturën dhe solidaritetin shoqëror,
            <br />
            me aspiratën shekullore të popullit shqiptar për identitetin dhe
            bashkimin kombëtar, me bindjen e thellë se drejtësia,
            <br /> paqja, harmonia dhe bashkëpunimi ndërmjet kombeve janë ndër
            vlerat më të larta të njerëzimit
          </Typography>
          <Typography sx={{ margin: "0 auto", fontSize: "18px" }}>
            VENDOSIM KETE KUSHTETUTE:
          </Typography>
          {laws.map((law: Law) => (
            <Box
              key={law.law_id}
              sx={{
                margin: "10px auto",
                padding: "40px",
                maxWidth: "750px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
                variant="h5"
              >
                {law.law_name}
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "15px" }}>
                {law.law_description}
              </Typography>
            </Box>
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AllLaws;
