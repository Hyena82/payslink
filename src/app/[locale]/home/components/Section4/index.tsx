import Slider from "react-slick";
import Image from "next/image";
import styled from "styled-components";
import Step from "./Step";
import { DownArrow } from "@/components/Svg";
import { useEffect, useRef, useState } from "react";
import useSectionInView from "@/hooks/useSectionInView";
import { SECTIONS } from "@/configs/constants";
import * as THREE from "three";

import InviewBox from "@/components/InViewBox";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "@/components/Box";
import { motion } from "framer-motion";
import { right } from "styled-system";

const Wrapper = styled.div`
  padding: 40px 0 0;
  border-top: 1px solid var(--Stroke, #353539);
  border-bottom: 1px solid var(--Stroke, #353539);
  position: relative;
  .title-section {
    position: relative;
    max-width: 369px;
    border-bottom: 1px solid;
    border-left: 1px solid;
    border-image-source: var(--gradient);
    border-width: 1px;
    border-image-slice: 1;
    margin-top: 36px;
    margin-left: 40px;
    padding: 0 0 14px 17px;

    img {
      position: absolute;
      top: -20px;
      right: -10px;
    }
  }

  .slider-box {
    overflow-x: auto;
    border-top: 1px solid var(--Stroke, #353539);
    margin-top: 56px;
    padding: 0 40px;

    &::-webkit-scrollbar {
      display: none;
    }

    & {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }

  .slick-next:before,
  .slick-next::after,
  .slick-prev:before,
  .slick-prev::after {
    display: none;
  }

  .slick-list {
    /* padding-right: 100px !important; */
    height: 660px;
  }

  .root-tree {
    width: 600px;
    height: 580px;
    z-index: 3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 1470px) {
      left: 64%;
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-30px);
      }
    }

    .img-right-step {
      animation: bounce 4s infinite;
      animation-timing-function: ease-in-out;
    }

    .right-step {
      width: 198px;
      height: 325px;
      position: absolute;
      left: 30px;
      top: 0;
      z-index: 2;
    }

    .left-step {
      width: 157px;
      height: 249px;
      position: absolute;
      right: 60px;
      top: 0;
      z-index: 2;
    }

    .root-tree-image {
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const data = [
  {
    stepDescription: "The Unified Platform for Everything DeFi",
  },
  {
    stepDescription:
      "Real-time analytics, risk assessment, and detailed reporting on single interface for informed decisions.",
  },
  {
    stepDescription: "The most efficient staking protocol..",
  },
  {
    stepDescription: "The 1-click gateway to best Defi yields",
  },
  {
    stepDescription: "The Safest Crypto Wallet to navigate web3",
  },
];

const images = [
  {
    right: "/images/solutions/right-step1.png",
    left: "/images/solutions/left-step1.png",
  },
  {
    right: "/images/solutions/right-step2.png",
    left: "/images/solutions/left-step2.png",
  },
  {
    right: "/images/solutions/right-step3.png",
    left: "/images/solutions/left-step3.png",
  },
  {
    right: "/images/solutions/right-step4.png",
    left: "/images/solutions/left-step4.png",
  },
  {
    right: "/images/solutions/right-step5.png",
    left: "/images/solutions/left-step5.png",
  },
];

const Section4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 1.2,
    slidesToScroll: 1,
    infinite: false,
    afterChange: (current: number) => {
      setCurrentSlide(Math.ceil(current));
    },
    responsive: [
      {
        breakpoint: 1470,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: (
      <ArrowBox>
        <DownArrow className={`${currentSlide < 3.8 && "active"} svg-button`} />
      </ArrowBox>
    ),
    prevArrow: (
      <ArrowLeftBox left={10}>
        <DownArrow
          className={`${currentSlide > 0 && "active"} left svg-button`}
        />
      </ArrowLeftBox>
    ),
  };

  return (
    <Wrapper className="relative" id={SECTIONS[2]}>
      <InviewBox section={SECTIONS[2]} />

      <p className="title-section">
        <Image
          src="/images/home/corner-border.png"
          width={379}
          height={67}
          alt=""
        />
        Our <span>Solutions</span>
      </p>

      <div className="cube">
        <div className="face front"></div>
        <div className="face left"></div>
      </div>

      <div className="slider-box relative">
        <Box className="root-tree">
          <motion.div
            className="right-step"
            key={`right-step-${currentSlide}`}
            animate={{
              scale: [0, 1],
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 1,
            }}
          >
            <Image
              className="img-right-step"
              src={images[currentSlide].right} // Update image based on currentSlide
              fill
              quality={100}
              alt=""
            />
          </motion.div>
          <motion.div
            className="left-step"
            key={`left-step-${currentSlide}`}
            animate={{ scale: [0, 1] }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 1,
            }}
          >
            <Image
              className="img-right-step"
              src={images[currentSlide].left} // Update image based on currentSlide
              fill
              quality={100}
              alt=""
            />
          </motion.div>

          <Image
            src="/images/solutions/root-tree.png"
            className="root-tree-image"
            width={580}
            height={520}
            quality={100}
            alt=""
          />
        </Box>

        <Slider {...settings}>
          {data.map((item, index) => (
            <Step
              key={index}
              stepNumber={index + 1}
              stepDescription={item.stepDescription}
            />
          ))}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default Section4;

export const ArrowBox = styled.div<{
  left?: number;
  disable?: boolean;
  top?: number;
}>`
  position: absolute;
  top: ${({ top }) => (top ? `${top}px` : "unset")};
  bottom: ${({ top }) => (top ? `unset` : "56px")};
  left: ${({ left }) => (left ? `${left}px` : "60px")};
  pointer-events: ${({ disable }) => (disable ? "none" : "auto")};
  z-index: 10;

  .svg-button {
    cursor: pointer;
    path {
      fill: rgba(217, 217, 217, 0.5);
    }

    &.active path {
      fill: #fff;
    }

    &.left {
      transform: rotate(180deg);
      margin-top: 1px;
      margin-right: 27px;
    }

    &.active:hover {
      path {
        fill: url(#paint0_linear_196_1511);
      }
    }
  }
`;

export const ArrowLeftBox = styled.div<{
  left?: number;
  disable?: boolean;
  top?: number;
}>`
  position: absolute;
  top: ${({ top }) => (top ? `${top}px` : "unset")};
  bottom: ${({ top }) => (top ? `unset` : "56px")};
  left: ${({ left }) => (left ? `${left}px` : "20px")};
  pointer-events: ${({ disable }) => (disable ? "none" : "auto")};

  z-index: 10;

  &.left-arrow {
    left: 0;
  }
  .svg-button {
    cursor: pointer;
    path {
      fill: rgba(217, 217, 217, 0.5);
    }

    &.active path {
      fill: #fff;
    }

    &.left {
      transform: rotate(180deg);
      margin-top: 1px;
      margin-right: 27px;
    }

    &.active:hover {
      path {
        fill: url(#paint0_linear_196_1511);
      }
    }
  }
`;
