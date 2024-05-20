import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./homepage/page";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Box sx={{ margin: 0 }}>
        <Navbar />
        <main>
          <Homepage />
          <Footer />
        </main>
      </Box>
    </div>
  );
};

export default Home;
