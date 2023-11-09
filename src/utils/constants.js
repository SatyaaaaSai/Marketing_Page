import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Features from "./components/Features";
import ContactUs from "./components/ContactUs";
import PricePlans from "./components/PricePlans";

const AppLayout = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [showPricePlans, setShowPricePlans] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Define your scroll thresholds here
      const featuresThreshold = 500/* Threshold value for Features section */;
      const contactUsThreshold = 500/* Threshold value for Contact Us section */;
      const pricePlansThreshold =500 /* Threshold value for Price Plans section */;

      if (window.scrollY > featuresThreshold) {
        setShowFeatures(true);
      }
      if (window.scrollY > contactUsThreshold) {
        setShowContactUs(true);
      }
      if (window.scrollY > pricePlansThreshold) {
        setShowPricePlans(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <Body />
      {showFeatures && <Features />}
      {showContactUs && <ContactUs />}
      {showPricePlans && <PricePlans />}
    </div>
  );
};

export default AppLayout;
