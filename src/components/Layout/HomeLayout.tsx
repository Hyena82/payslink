// Import necessary modules
"use client";

import React from "react";
import Header from "../Header";
import Footer from "../Footer";

// Define your custom layout
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
