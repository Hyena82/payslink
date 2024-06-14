// Import necessary modules
"use client";

import React, { useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
import { Box } from "../Box";
import { useInView } from "framer-motion";
import NavScroll from "../NavScroll";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Wrapper = styled.div`
  background-color: #000;
`;

// Define your custom layout
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Wrapper>
      <Header />
      <NavScroll />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default HomeLayout;
