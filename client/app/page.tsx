import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./homepage/page";
import "./globals.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Homepage />
      </main>
      <Footer />
    </>
  );
};

export default Home;
