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
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import Section11 from "./components/Section11";
import Section12 from "./components/Section12";
import Section13 from "./components/Section13";
import Section14 from "./components/Section14";
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
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <HomeLayout>
      {/* <LoadingPage /> */}

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
