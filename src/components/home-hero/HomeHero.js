import React from "react";

function HomeHero() {
  return (
    <div>
      <div className="featured-image">
        <img className="img-res" src="/assets/images/hero.jpg" alt="hero-img" />
        <div className="hero-overlay">
          <p className="hero-overlay-text align-center">
            EXPLORE THE BEST SHOES IN THE MARKET TODAY
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
