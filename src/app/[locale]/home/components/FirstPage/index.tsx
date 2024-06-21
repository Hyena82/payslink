import GradientBorder from "@/components/Border";
import { Box } from "@/components/Box";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { Button } from "antd";
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
import StakingNow from "@/components/StakingNow.tsx";
import { Link } from "@/navigation";

const Wrapper = styled.div`
  height: calc(100vh - 58px);
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 1);
  color: #fff;
  .white-grad {
    --b: 1px; /* border width*/

    color: #313149;
    display: block;
    margin: 10px;
    width: 450px;
    aspect-ratio: 1;
    position: relative;
    z-index: 0;
  }

  .white-grad:before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    background: var(--c, linear-gradient(90deg, #0093fe 0%, #50ffd5 100%));
    padding: var(--b);
    border-radius: 30%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

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
    @media (max-width: 768px) {
      filter: blur(1px) brightness(0.2);
    }
  }

  .intro-box {
    position: relative;
    padding-top: 40px;
    @media (max-width: 768px) {
      padding-top: 20px;
    }
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
    display: flex;
    height: 100px;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
    }

    .intro-text {
      border: 0.5px solid rgba(255, 255, 255, 0.7);
      border-right: none;
      width: 50%;
      padding: 19px 22px;
      font-family: Metrophobic;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 400;
      line-height: 19.73px;
      text-align: left;

      @media (max-width: 768px) {
        width: 100%;
        border: 0.5px solid rgba(255, 255, 255, 0.7);
      }
    }

    .sub-text-box {
      height: 100%;
      width: 50%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;

      border: 1px solid rgba(53, 53, 57, 1);
      border-left: none;

      @media (max-width: 768px) {
        width: 100%;
        border: 1px solid rgba(53, 53, 57, 1);
      }

      .sub-text {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        border-left: 0;
        padding-right: 22px;

        font-family: Metrophobic;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.73px;
        text-align: left;
        color: rgba(109, 109, 109, 1);

        @media (max-width: 768px) {
          padding: 10px 20px;
        }

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
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    align-items: flex-end;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .about-desc {
      width: 452px;
      padding: 34px 25px;
      border-radius: 50px;
      font-family: Trap;
      font-size: 45px;
      font-weight: 700;
      line-height: 49.5px;
      text-align: left;

      @media (max-width: 768px) {
        width: 100%;
        font-family: Trap;
        font-size: 30px;
        font-weight: 700;
        line-height: 33px;
        text-align: left;
      }

      span {
        font-family: Trap;
        font-size: 45px;
        font-weight: 700;
        line-height: 49.5px;
        text-align: left;
        background: linear-gradient(90deg, #0093fe 0%, #50ffd5 72.7%) text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 768px) {
          font-family: Trap;
          font-size: 30px;
          font-weight: 700;
          line-height: 33px;
          text-align: left;
        }
      }
    }

    .access-text {
      max-width: 315px;
      position: absolute;
      left: 50%;

      font-size: 16px;
      font-weight: 400;
      line-height: 19.73px;
      text-align: right;
      color: #00ffe0;

      @media (max-width: 768px) {
        display: none;
      }
    }

    .scroll-down {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      right: 40px;

      @media (max-width: 768px) {
        position: relative;
        right: unset;
        margin: 40px auto 0;
      }

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

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const FirstPage = () => {
  return (
    <Wrapper id={SECTIONS[0]}>
      <div className="layout-line layout-line-left" />
      <div className="layout-line layout-line-right" />
      <InviewBox section={SECTIONS[0]} />
      <RoBotModelBox />
      <div className="container-middle relative">
        <div className="intro-box">
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
          <Link href="/staking">
            <PrimaryButton
              icon="/images/icons/black-staking.svg"
              activeIcon="/images/icons/white-staking.svg"
            >
              Staking
            </PrimaryButton>
          </Link>
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
