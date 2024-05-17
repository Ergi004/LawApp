import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Hero from '../components/Hero/Hero'
import FeatureSection from "../components/FearureSection/FeatureSection";
import ContentSection from "../components/ContentSection/ContentSection";


const Homepage: React.FC = () => {
  return (
    <Box>
      <Hero />
      <FeatureSection/>
      <ContentSection/>
    </Box>
  );
};

export default Homepage;
