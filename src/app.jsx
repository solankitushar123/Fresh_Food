import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DeliveryInformation from "./components/DeliveryInformation";
import SuggestedProducts from "./components/SuggestedProducts";
import BrowseProducts from "./components/BrowseProducts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SuggestedProducts />
      <BrowseProducts />
      <DeliveryInformation />
      <Footer />
    </>
  );
}
