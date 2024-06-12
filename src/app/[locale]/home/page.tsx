"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import HomeLayout from "@/components/Layout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "@/state/counterSlice";
import { RootState } from "@/store/store";
import { Box, Flex } from "@/components/Box";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useTranslations } from "next-intl";
import LoadingPage from "@/app/[locale]/home/components/LoadingPage";
import FirstPage from "./components/FirstPage";
import Staking from "./components/Staking";
import Trusted from "./components/Trusted";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  .box {
    width: 200px;
    height: 200px;
    background: #fafafa;
  }
  p {
    font-family: "Familjen-Grotesk";
    font-weight: bold;
  }
`;

const HomePage = () => {
  return (
    <HomeLayout>
      {/* <LoadingPage /> */}
      <Box id="Home">
        <FirstPage />
      </Box>

      <Staking />

      <Trusted />

      <Section4 />

      <Section5 />

      <Section6 />

      <Section7 />

      <Section8 />

      <Section9 />

      <Section10 />

      <Box className="" height={1000} background="black"></Box>
    </HomeLayout>
  );
};

export default HomePage;
