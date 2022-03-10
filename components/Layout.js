import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Offer from "./Offer";

const Layout = ({ children }) => {
  return (
    <>
    <Offer/>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
