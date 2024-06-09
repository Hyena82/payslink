import { Box } from "@/components/Box";
import PrimaryButton from "@/components/Button/PrimaryButton";
import { Staking } from "@/components/Svg";
import { ModelRobot } from "@/components/_3DRobot";
import { SECTIONS } from "@/configs/constants";
import { setCurrentSection } from "@/state/systemSlice";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

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

  .model-box {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 800px;
    z-index: 5;
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
    margin-left: 40px;
  }

  .about-box {
    position: absolute;
    bottom: 40px;
    width: 100%;
    padding: 0 40px;
    display: flex;
    align-items: flex-end;
    .about-desc {
      margin-left: 40px;

      width: 400px;
      padding: 34px 21px;
      border: 0.5px solid rgba(255, 255, 255, 0.7);
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
  const ref = useRef(null);
  const isInView = useInView(ref);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInView) {
      dispatch(setCurrentSection(SECTIONS[0]));
    }
  }, [isInView]);

  return (
    <Wrapper ref={ref}>
      <div className="model-box">
        <Canvas resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}>
          <PerspectiveCamera fov={105} />
          <Environment preset="studio" />
          <OrbitControls />
          <ModelRobot />
        </Canvas>
      </div>

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
            icon={<Staking />}
            activeIcon={
              <Image
                src="/images/icons/white-staking.svg"
                width={18}
                height={18}
                alt=""
              />
            }
          >
            Staking
          </PrimaryButton>

          <PrimaryButton
            icon={
              <Image
                src="/images/icons/black-wallet.svg"
                width={18}
                height={18}
                alt=""
              />
            }
            activeIcon={
              <Image
                src="/images/icons/white-wallet.svg"
                width={18}
                height={18}
                alt=""
              />
            }
          >
            Connect wallet
          </PrimaryButton>

          <PrimaryButton
            icon={
              <Image
                src="/images/icons/black-down.svg"
                width={18}
                height={18}
                alt=""
              />
            }
            activeIcon={
              <Image
                src="/images/icons/white-down.svg"
                width={18}
                height={18}
                alt=""
              />
            }
          >
            Connect wallet
          </PrimaryButton>
        </div>
      </div>

      <div className="about-box">
        <div>
          <p className="top-about">About Payslink</p>
          <div className="about-desc">
            The top-notch
            <span> DeFi solution</span> for the skilled trades
          </div>
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
