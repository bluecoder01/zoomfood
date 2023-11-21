import React from "react";
import Hero from "../../components/heroslider/Hero";
import Nearbyrestaurants from "../../components/nearbyrestaurants/Nearbyrestaurants";
import PopularSection from "../../components/popularsection/PopularSection";
import CategoriesPreview from "../../components/categoriespreview/CategoriesPreview";
import VendorCTA from "../../components/vendorcta/VendorCTA";

function Home() {
  return (
    <div className="home">
      <Hero />
      <PopularSection />
      <CategoriesPreview />
      <Nearbyrestaurants />
      <VendorCTA />
    </div>
  );
}

export default Home;
