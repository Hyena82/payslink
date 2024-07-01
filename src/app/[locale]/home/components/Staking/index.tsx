import { SECTIONS } from "@/configs/constants";
import CountUp, { useCountUp } from "react-countup";

import Image from "next/image";
import styled from "styled-components";
import Trusted from "../Trusted";
import InviewBox from "@/components/InViewBox";
import { Box, Flex } from "@/components/Box";
import { formatNumber } from "@/utils";

const Wrapper = styled.div`
  height: 600px;
  background: url("/images/home/staking-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  border-top: 1px solid #353539;
  border-bottom: 1px solid #353539;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
  }

  &:before {
    content: "";
    background: var(--gradient);
    z-index: 1;
    width: 1400px;
    position: absolute;
    height: 1400px;
    border-radius: 50%;
    left: -70%;
    top: 50%;
    transform: translate(50%, -50%);
    opacity: 0.14;
    mix-blend-mode: hard-light;
    filter: blur(200px);
  }

  .staking-item {
    position: relative;
    width: fit-content;
    border-radius: 10px;
    z-index: 3;
    background-color: #353539;

    @media (max-width: 768px) {
      width: 100%;
    }

    .border-span {
      position: absolute;
      border-radius: 10px;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #000;

      width: 99%;
      height: 98%;
      clip-path: polygon(0 0, 93% 0, 100% 20%, 100% 100%, 0 100%);
    }

    &:not(:last-child) {
      margin-right: 20px;
      @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }

    clip-path: polygon(0 0, 93% 0, 100% 20%, 100% 100%, 0 100%);

    /* &:after {
      content: "";
      position: absolute;
      top: 9px;
      right: -4px;
      width: 27.1px;
      height: 0.87px;
      background: #353539;
      transform: rotate(45deg);
    } */

    padding: 20px 23px;
    .title {
      font-family: Metrophobic;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.73px;
      text-align: left;
      margin-bottom: 16px;
    }

    .amount {
      font-family: Trap;
      font-size: 26.01px;
      font-weight: 700;
      line-height: 28.61px;
      text-align: left;
      position: relative;
      color: #ffffff;
      margin-right: 14px;

      .number-count {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }

      .base-count {
        visibility: hidden;
        width: fit-content;
      }
    }

    .percent {
      font-family: Trap;
      font-size: 26.01px;
      font-weight: 700;
      line-height: 28.61px;
      text-align: left;
      color: #23e2b7;
    }
  }
`;

const Staking = () => {
  const data = [
    {
      title: "Total TVL on Payslink",
      amount: 0,
      percent: "0.00% (7d)",
    },
    {
      title: "Total Addresses Count",
      amount: 931525,
      percent: "0.53% (7d)",
    },
    {
      title: "Accumulated Stake Amount",
      amount: 931525,
      percent: "0.00% (7d)",
    },
    {
      title: "APR",
      amount: 931525,
      percent: "0.00% (7d)",
    },
  ];

  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className="relative" id={SECTIONS[1]}>
      <InviewBox section={SECTIONS[1]} />
      <div className="layout-line layout-line-left" />
      <div className="layout-line layout-line-right" />
      <Wrapper>
        {data.map((item, index) => (
          <div className="staking-item" key={index}>
            <span className="border-span"></span>
            <div className="title">{item.title}</div>
            <Flex alignItems="center">
              <span className="amount">
                <p className="base-count">{formatNumber(item.amount)}</p>
                <p className="number-count">
                  <CountUp
                    end={item.amount}
                    // scrollSpyOnce
                    enableScrollSpy
                    formattingFn={formatNumber}
                  />
                </p>
              </span>
              <Box mb={1}>
                <Image
                  src="/images/icons/top-percent.svg"
                  width={20}
                  height={14}
                  alt=""
                />
              </Box>
              <span className="percent">{item.percent}</span>
            </Flex>
          </div>
        ))}
      </Wrapper>

      <Trusted />
    </div>
  );
};

export default Staking;
