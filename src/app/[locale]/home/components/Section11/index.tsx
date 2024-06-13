import { Box, Flex } from "@/components/Box";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  padding: 0 40px;
  border-bottom: 1px solid rgba(53, 53, 57, 1);
  position: relative;

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

    .tree-image {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
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
      width: 160px;
      height: 160px;
      position: absolute;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      transition: all 1s ease-in-out 0s;
      animation-duration: 1.6s;
      animation-iteration-count: infinite;
      animation-name: moveBall;
      animation-timing-function: ease-in;
      animation-direction: alternate-reverse;

      &.box1 {
        top: -151px;
        left: 116px;
        animation-delay: 0.3s;

        p.percent {
          color: rgba(75, 177, 249, 1);
        }
      }

      &.box2 {
        animation-delay: 0.6s;

        top: 75px;
        left: -45px;
        p.percent {
          color: rgba(35, 226, 183, 1);
        }
      }

      &.box3 {
        animation-delay: 0.9s;

        top: 328px;
        left: 55px;
        p.percent {
          color: rgba(217, 155, 255, 1);
        }
      }

      &.box4 {
        animation-delay: 0.4s;

        top: -114px;
        right: 100px;

        p.percent {
          color: rgba(203, 203, 203, 1);
        }
      }

      &.box5 {
        animation-delay: 0.8s;

        top: 145px;
        right: -15px;
        p.percent {
          color: rgba(35, 193, 226, 1);
        }
      }

      &.box6 {
        animation-delay: 0.5s;

        top: 349px;
        right: 41px;
        p.percent {
          color: rgba(0, 109, 254, 1);
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
  const [selectedItem, setSelectedItem] = useState<string>("Payment");

  return (
    <Wrapper>
      {/* <Image
        className="section12-bg"
        src="/images/home/section12-bg.png"
        width={1100}
        height={730}
        quality={100}
        alt=""
      /> */}
      <Flex padding="8rem 0">
        <Box width="50%">
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
        </Box>

        <Box className="right-content" width={1000}>
          <Image
            className="tree-image"
            src="/images/home/tokenomic/value-tree.png"
            width={436}
            height={436}
            quality={100}
            alt=""
          />
          <div className="token-image">
            <Image
              src="/images/home/tokenomic/token.png"
              width={214}
              height={233}
              quality={100}
              alt=""
            />
          </div>

          <Box className="ball-box box1">
            <p className="percent">20%</p>
            <p>Community Development & Reward</p>

            <Image
              src="/images/home/tokenomic/ball1.png"
              width={135}
              height={135}
              alt=""
            />
          </Box>

          <Box className="ball-box box2">
            <p className="percent">35%</p>
            <p>Pays staking pool reward</p>

            <Image
              src="/images/home/tokenomic/ball2.png"
              width={135}
              height={135}
              alt=""
            />
          </Box>

          <Box className="ball-box box3">
            <p className="percent">5%</p>
            <p>Bounty & Airdrop, MKT Campaigns</p>

            <Image
              src="/images/home/tokenomic/ball3.png"
              width={135}
              height={135}
              alt=""
            />
          </Box>

          <Box className="ball-box box4">
            <p className="percent">20%</p>
            <p>Ecosystem Fund</p>

            <Image
              src="/images/home/tokenomic/ball4.png"
              width={135}
              height={135}
              alt=""
            />
          </Box>

          <Box className="ball-box box5">
            <p className="percent">10%</p>
            <p>DEV Team</p>

            <Image
              src="/images/home/tokenomic/ball5.png"
              width={135}
              height={135}
              alt=""
            />
          </Box>

          <Box className="ball-box box6">
            <p className="percent">10%</p>
            <p>Protocol Growths & Partnership Development</p>

            <Image
              src="/images/home/tokenomic/ball6.png"
              width={135}
              height={135}
              alt=""
            />
          </Box>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Section11;
