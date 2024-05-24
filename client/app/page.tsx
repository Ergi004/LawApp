import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./homepage/page";
import "./globals.css"
const Home = () => {
  return (
    <div>
     
      <Navbar />
      <main>
        <Homepage />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
