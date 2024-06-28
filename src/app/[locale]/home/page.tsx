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
import { ReactLenis, useLenis } from "lenis/react";

import LoadingPage from "@/app/[locale]/home/components/LoadingPage";
import FirstPage from "./components/FirstPage";
import Staking from "./components/Staking";
import Trusted from "./components/Trusted";
import Section4 from "./components/Solutions";
import Section5 from "./components/Defi";
import Section6 from "./components/Why";
import Section7 from "./components/DownApp";
import Section8 from "./components/Audit";
import Section9 from "./components/Trade";
import Section10 from "./components/Ecosystem";
import Section11 from "./components/Tokenomic";
import Section12 from "./components/RoadMap";
import Section13 from "./components/Team";
import Section14 from "./components/Partners";
import { useEffect } from "react";
import Lenis from "lenis";
import useSectionInView from "@/hooks/useSectionInView";
import { SECTIONS } from "@/configs/constants";

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
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <HomeLayout>
      <FirstPage />

      <Staking />

      <Section4 />

      <Section5 />

      <Section6 />

      <Section7 />

      <Section8 />

      <Section9 />

      <Section10 />

      <Section11 />

      <Section12 />

      <Section13 />

      <Section14 />
    </HomeLayout>
  );
};

export default HomePage;
