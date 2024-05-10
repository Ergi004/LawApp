import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { Homepage } from "./homepage/page";
import { Box } from "@mui/material";

const Home = () => {
  return (
      <Box sx={{ margin: 0 }}>
        <Navbar />
        <main>
          <Homepage />
          <About />
          <Contact />
        </main>
      </Box>
  );
};

export default Home;
