import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Features from "./components/Features";
import MainReview from "./components/MainReview";

const Applayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Features />
      <MainReview />
    </div>
  );
};
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<Applayout />);
