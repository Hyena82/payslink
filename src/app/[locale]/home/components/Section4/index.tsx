import Image from "next/image";
import styled from "styled-components";
import Step from "./Step";
import { Flex } from "@/components/Box";
import { DownArrow } from "@/components/Svg";

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
    display: flex;
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

  .button-box {
    position: absolute;
    bottom: 40px;
    left: 40px;
    .svg-button {
      cursor: pointer;
      path {
        fill: #d9d9d9;
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
  }
`;

const Section4 = () => {
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

      <Flex className="button-box" mt={6}>
        <DownArrow className="svg-button left" />
        <DownArrow className="svg-button active" />
      </Flex>

      <div className="slider-box">
        {data.map((item, index) => (
          <Step
            key={index}
            stepNumber={index + 1}
            stepDescription={item.stepDescription}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Section4;
