import { Box, Flex } from "@/components/Box";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import InviewBox from "@/components/InViewBox";
import { SECTIONS } from "@/configs/constants";
import useParallaxMouse from "@/hooks/useParallaxMouse";
import { isMobile } from "react-device-detect";

const Wrapper = styled.div`
  padding: 0 40px;
  border-bottom: 1px solid rgba(53, 53, 57, 1);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  .layout-mobile {
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      padding-top: 2rem;

      & > div {
        width: 60%;
        position: relative;
        height: 500px;
      }
    }
  }

  .section12-bg {
    position: absolute;
    z-index: 1;
    right: 0;
    width: 80%;
    height: 100%;
    top: 0;
  }

  .left-content {
    max-width: 415px;
    width: 100%;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      margin-top: 50px;
    }

    .sub-title {
      font-family: Metrophobic;
      font-size: 20px;
      font-weight: 400;
      line-height: 24.66px;
      text-align: left;
      color: rgba(35, 226, 183, 1);
      margin: 5px 0 20px;
    }

    .description {
      font-family: Metrophobic;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.73px;
      text-align: left;
    }
  }

  .right-content {
    margin-top: 100px;
    width: 811px;
    height: 500px;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
    background-color: #000;

    @media (max-width: 768px) {
      width: 511px;
      height: 500px;
    }

    @media (max-width: 768px) {
      scale: 0.6;
      position: absolute;
      top: 50%;
      left: 41%;
      transform: translate(-50%, -50%);
      margin-top: 0;
    }

    .line {
      position: absolute;
      stroke: rgba(0, 193, 235, 1);
      stroke-width: 2;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
    }

    .tree-image {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);

      .main-bg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        mix-blend-mode: screen;
      }

      .tree-image-bg {
        position: absolute;
        top: -50%;
        z-index: 2;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .token-image {
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translate(-50%, -50%);

      img {
        transition: all 1s ease-in-out 0s;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-name: moveBall;
        animation-timing-function: ease-in;
        animation-direction: alternate-reverse;
      }
    }

    .ball-box {
      width: 180px;
      height: 180px;
      position: absolute;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      /* transition: all 1s ease-in-out 0s;
      animation-duration: 1.6s;
      animation-iteration-count: infinite;
      animation-name: moveBall;
      animation-timing-function: ease-in;
      animation-direction: alternate-reverse; */

      @media (max-width: 768px) {
        width: 160px;
        height: 160px;
      }

      p {
        text-transform: capitalize;
      }
      &.box1 {
        top: -151px;
        left: 116px;

        @media (max-width: 768px) {
          left: -19px;
          top: -191px;
        }

        p.percent {
          color: rgba(75, 177, 249, 1);
        }
      }

      &.box2 {
        top: 75px;
        left: -45px;

        @media (max-width: 768px) {
          left: -82px;
        }

        p.percent {
          color: rgba(35, 226, 183, 1);
        }
      }

      &.box3 {
        top: 328px;
        left: 55px;

        @media (max-width: 768px) {
          left: -20px;
        }
        p.percent {
          color: rgba(217, 155, 255, 1);
        }
      }

      &.box4 {
        top: -114px;
        right: 100px;

        @media (max-width: 768px) {
          top: -195px;
          right: -11px;
        }

        p.percent {
          color: rgba(203, 203, 203, 1);
        }
      }

      &.box5 {
        top: 145px;
        right: -15px;

        @media (max-width: 768px) {
          top: 105px;
          right: -52px;
        }

        p.percent {
          color: rgba(35, 193, 226, 1);
        }
      }

      &.box6 {
        top: 349px;
        right: 41px;

        @media (max-width: 768px) {
          right: -29px;
          top: 329px;
        }
        p.percent {
          color: rgba(0, 109, 254, 1);
        }

        &:hover ~ .line {
          stroke-dashoffset: 0;
        }
      }

      p {
        position: relative;
        z-index: 2;
        width: 123px;

        text-align: center;
        font-family: Metrophobic;
        font-size: 14px;
        font-weight: 400;
        line-height: 19.73px;
        text-align: center;
        color: rgba(255, 255, 255, 1);

        &.percent {
          font-family: Trap;
          font-size: 30px;
          font-weight: 600;
          line-height: 30px;
        }
      }
      img {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  @keyframes moveBall {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(20px);
    }
  }
`;

const Section11 = () => {
  const [isMobileState, setIsMobile] = useState(false);
  const { xMove, yMove } = useParallaxMouse(isMobileState ? 0 : 20);

  useEffect(() => {
    if (isMobile) {
      setIsMobile(true);
    }
  }, [isMobile]);

  const yTransform = useSpring(yMove);
  const xTransform = useSpring(xMove);

  return (
    <Wrapper className="relative" id={SECTIONS[9]}>
      <InviewBox section={SECTIONS[9]} />
      <Flex padding="8rem 0" className="layout-mobile">
        <Flex flexDirection="column" justifyContent="center" width="40%">
          <Box className="left-content">
            <div className="title-section">
              <span> Tokenomic </span>
            </div>
            <p className="sub-title">PAYS Token Total Supply Distribution</p>
            <p className="description">
              Funds raised distribution towards project development The raised
              funds from the token sale will be distributed accordingly as below
              to maximise the launch of the product on the market.
            </p>
            <p> Payslink raised funding distribution for product launch</p>
          </Box>
        </Flex>

        <Box width="60%">
          <Box className="right-content">
            <Box className="tree-image">
              <Box zIndex={1} className="relative">
                <Image
                  src="/images/home/tokenomic/value-tree.png"
                  width={436}
                  height={436}
                  quality={100}
                  alt=""
                />
              </Box>

              <Image
                className="tree-image-bg"
                src="/images/home/tokenomic/shadow-tree.png"
                width={212}
                height={520}
                quality={100}
                alt=""
              />

              <Image
                className="main-bg"
                src="/images/home/tokenomic/bg.png"
                width={1090}
                height={768}
                quality={100}
                alt=""
              />
            </Box>
            <div className="token-image">
              <Image
                src="/images/home/tokenomic/token.png"
                width={214}
                height={233}
                quality={100}
                alt=""
              />
            </div>

            <motion.div
              className="ball-box box1"
              style={{ x: xTransform, y: yTransform }}
            >
              <p className="percent">20%</p>
              <p>Community Development & Reward</p>
              <Image
                src="/images/home/tokenomic/ball1.png"
                width={135}
                height={135}
                alt=""
              />
            </motion.div>

            <motion.div
              className="ball-box box2"
              style={{ x: xTransform, y: yTransform }}
            >
              <p className="percent">35%</p>
              <p>For sale</p>

              <Image
                src="/images/home/tokenomic/ball2.png"
                width={135}
                height={135}
                alt=""
              />
            </motion.div>

            <motion.div
              className="ball-box box3"
              style={{ x: xTransform, y: yTransform }}
            >
              <p className="percent">5%</p>
              <p>Bounty & Airdrop, MKT Campaigns</p>

              <Image
                src="/images/home/tokenomic/ball3.png"
                width={135}
                height={135}
                alt=""
              />
            </motion.div>

            <motion.div
              className="ball-box box4"
              style={{ x: xTransform, y: yTransform }}
            >
              <p className="percent">20%</p>
              <p>Ecosystem Fund</p>

              <Image
                src="/images/home/tokenomic/ball4.png"
                width={135}
                height={135}
                alt=""
              />
            </motion.div>

            <motion.div
              className="ball-box box5"
              style={{ x: xTransform, y: yTransform }}
            >
              <p className="percent">10%</p>
              <p>DEV Team</p>

              <Image
                src="/images/home/tokenomic/ball5.png"
                width={135}
                height={135}
                alt=""
              />
            </motion.div>

            <motion.div
              className="ball-box box6"
              style={{ x: xTransform, y: yTransform }}
            >
              <p className="percent">10%</p>
              <p>Protocol Growths & Partnership Development</p>

              <Image
                src="/images/home/tokenomic/ball6.png"
                width={135}
                height={135}
                alt=""
              />
            </motion.div>
          </Box>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Section11;
