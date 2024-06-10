import { SECTIONS } from "@/configs/constants";
import useCustomSWR from "@/hooks/useCustomSWR";
import { setCurrentSection } from "@/state/systemSlice";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useSWR from "swr";

const Wrapper = styled.div`
  height: 400px;
  background: url("/images/home/staking-bg.png");
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  border-top: 1px solid #353539;
  border-bottom: 1px solid #353539;

  &:before {
    content: "";
    background: var(--gradient);
    z-index: 2;
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
    border: 0.87px solid #353539;
    position: relative;
    width: fit-content;
    border-radius: 10px;
    background-color: #000;

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:before {
      content: "";
      position: absolute;
      top: -27px;
      right: -23px;
      width: 40px;
      height: 40px;
      transform: rotate(45deg);
      background: #000;
      display: inline-block;
    }

    &:after {
      content: "";
      position: absolute;
      top: 9px;
      right: -4px;
      width: 27.1px;
      height: 0.87px;
      background: #353539;
      transform: rotate(45deg);
    }

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
      color: #ffffff;
      margin-right: 14px;
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
  const ref = useRef(null);
  const isInView = useInView(ref);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInView) {
      dispatch(setCurrentSection(SECTIONS[1]));
    }
  }, [isInView]);

  const data = [
    {
      title: "Total TVL on Payslink",
      amount: "$0",
      percent: "0.00% (7d)",
    },
    {
      title: "Total Addresses Count",
      amount: "931,525",
      percent: "0.53% (7d)",
    },
    {
      title: "Accumulated Stake Amount",
      amount: "931,525",
      percent: "0.00% (7d)",
    },
    {
      title: "APR",
      amount: "931,525",
      percent: "0.00% (7d)",
    },
  ];

  return (
    <Wrapper id="Staking" ref={ref}>
      {data.map((item, index) => (
        <div className="staking-item" key={index}>
          <div className="title">{item.title}</div>
          <span className="amount">{item.amount}</span>
          <Image
            src="/images/icons/top-percent.svg"
            width={20}
            height={14}
            alt=""
          />{" "}
          <span className="percent">{item.percent}</span>
        </div>
      ))}
    </Wrapper>
  );
};

export default Staking;
