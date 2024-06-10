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
import { SvgTest } from "@/components/Svg";
import FirstPage from "./components/FirstPage";
import Staking from "./components/Staking";
import Trusted from "./components/Trusted";

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
      <Box className="" height={1000} background="black"></Box>
    </HomeLayout>
  );
};

export default HomePage;
