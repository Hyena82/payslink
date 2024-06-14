import GradientBorder from "@/components/Border";
import { Box } from "@/components/Box";
import PrimaryButton from "@/components/Button/PrimaryButton";
import InviewBox from "@/components/InViewBox";
import { ModelRobot } from "@/components/_3DRobot";
import { SECTIONS } from "@/configs/constants";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { motion } from "framer-motion-3d";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import RoBotModelBox from "./RoBotModelBox";

const Wrapper = styled.div`
  height: calc(100vh - 58px);
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 1);
  color: #fff;

  &:after {
  }

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/images/home/first-page-bg.png");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    filter: blur(1px) brightness(0.6);
  }

  .intro-box {
    position: relative;

    .logo-box {
      border: 0.5px solid rgba(255, 255, 255, 0.7);
      border-bottom: 0;
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .intro-text-box {
    border: 0.5px solid rgba(255, 255, 255, 0.7);
    display: flex;
    height: 100px;

    .intro-text {
      width: 50%;
      padding: 19px 22px;
    }

    .sub-text-box {
      height: 100%;
      width: 50%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      padding-right: 22px;

      .sub-text {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-left: 0;

        font-size: 16px;
        font-weight: 400;
        line-height: 19.73px;

        &:first-child {
          border-bottom: 0.5px solid rgba(53, 53, 57, 1);
        }
      }
    }
  }

  .top-about {
    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;
    margin-bottom: 28px;
  }

  .about-box {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    align-items: flex-end;
    .about-desc {
      width: 452px;
      padding: 34px 25px;
      border-radius: 50px;
      font-family: Trap;
      font-size: 45px;
      font-weight: 700;
      line-height: 49.5px;
      text-align: left;

      span {
        font-family: Trap;
        font-size: 45px;
        font-weight: 700;
        line-height: 49.5px;
        text-align: left;
        background: linear-gradient(90deg, #0093fe 0%, #50ffd5 72.7%) text;
        -webkit-text-fill-color: transparent;
      }
    }

    .access-text {
      max-width: 315px;
      position: absolute;
      left: 60%;

      font-size: 16px;
      font-weight: 400;
      line-height: 19.73px;
      text-align: right;
      color: #00ffe0;
    }

    .scroll-down {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 40px;
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.73px;
        margin-right: 20px;
      }
    }
  }

  .group-button {
    position: absolute;
    top: 50px;
    right: -20px;
    transform: translateX(100%);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const FirstPage = () => {
  return (
    <Wrapper id={SECTIONS[0]}>
      <InviewBox section={SECTIONS[0]} />
      <RoBotModelBox />
      <div className="container relative">
        <div className="intro-box">
          <Box className="" padding={4}></Box>
          <Box className="logo-box">
            <Image
              src="/images/logo/logo-4.svg"
              width={26}
              height={25}
              alt=""
            />
          </Box>
          <div className="intro-text-box">
            <p className="intro-text">
              PAYSLINK Staking represents a new era of cryptoeconomic security
              for the DeFi-standard oracle network
            </p>

            <div className="sub-text-box">
              <div className="sub-text">mass payments</div>

              <div className="sub-text">peer payments</div>
            </div>
          </div>
        </div>

        <div className="group-button">
          <PrimaryButton
            icon="/images/icons/black-staking.svg"
            activeIcon="/images/icons/white-staking.svg"
          >
            Staking
          </PrimaryButton>

          <PrimaryButton
            icon="/images/icons/black-wallet.svg"
            activeIcon="/images/icons/white-wallet.svg"
          >
            Connect wallet
          </PrimaryButton>

          <PrimaryButton
            icon="/images/icons/black-down.svg"
            activeIcon="/images/icons/white-down.svg"
          >
            Download app
          </PrimaryButton>
        </div>
      </div>

      <div className="about-box">
        <div>
          <p className="top-about">About Payslink</p>
          <GradientBorder>
            <div>
              <div className="about-desc">
                The top-notch
                <span> DeFi solution</span> for the skilled trades
              </div>
            </div>
          </GradientBorder>
        </div>
        <div className="access-text">
          Gain access to stake rewards for securing the network through timely
          and valid alerts
        </div>
        <div className="scroll-down">
          <p>Scroll down</p>
          <Image src="/images/icons/scroll.svg" width={35} height={40} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default FirstPage;
