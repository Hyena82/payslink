import Slider from "react-slick";
import Image from "next/image";
import styled from "styled-components";
import Step from "./Step";
import { DownArrow } from "@/components/Svg";
import { useState } from "react";

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
    padding-right: 100px !important;
  }
`;

export const ArrowBox = styled.div<{ left?: number; disable?: boolean }>`
  position: absolute;
  bottom: 56px;
  left: ${({ left }) => (left ? `${left}px` : "60px")};
  pointer-events: ${({ disable }) => (disable ? "none" : "auto")};
  z-index: 10;
  top: unset;

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

export const ArrowLeftBox = styled.div<{ left?: number; disable?: boolean }>`
  position: absolute;
  bottom: 55px;
  top: unset;
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

const Section4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    slidesToShow: 1.2,
    slidesToScroll: 1,
    infinite: false,
    afterChange: (current: number) => setCurrentSlide(current),

    nextArrow: (
      <ArrowBox>
        <DownArrow className={`${currentSlide < 3.8 && "active"} svg-button`} />
      </ArrowBox>
    ),
    prevArrow: (
      <ArrowLeftBox>
        <DownArrow
          className={`${currentSlide > 0 && "active"} left svg-button`}
        />
      </ArrowLeftBox>
    ),
  };

  return (
    <Wrapper>
      <p className="title-section">
        <Image
          src="/images/home/corner-border.png"
          width={379}
          height={67}
          alt=""
        />
        Our <span>Solutions</span>
      </p>

      <div className="slider-box">
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
