import React from "react";
import Navbar from "../../components/navigation/Navbar";
import HomeHero from "../../components/home-hero/HomeHero";
import HomeButton from "../../components/home-button/HomeButton";
import HomeCategoriesCard from "../../components/home-categories-card/HomeCategoriesCard";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="header">
        <Navbar />
      </div>
      <div className="body">
        <div className="body-container">
          <HomeHero />
          <HomeButton />
          <HomeCategoriesCard />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
