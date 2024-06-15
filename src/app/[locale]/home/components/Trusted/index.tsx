import { Flex } from "@/components/Box";
import Image from "next/image";
import styled from "styled-components";

import _3DCard from "./_3DCard";
import useSectionInView from "@/hooks/useSectionInView";
import { SECTIONS } from "@/configs/constants";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { setCurrentSection } from "@/state/systemSlice";

const Wrapper = styled.div`
  padding: 90px 40px 90px;
  z-index: 3;
  position: relative;
  .title-section {
    font-family: Trap;
    font-size: 50px;
    font-weight: 600;
    line-height: 55px;
    text-align: left;
    max-width: 791px;
    width: 100%;
    position: relative;

    img {
      position: absolute;
      top: -20px;
      right: -10px;
    }

    span {
      font-family: Trap;
      font-size: 50px;
      font-weight: 600;
      line-height: 55px;
      text-align: left;
      background: linear-gradient(90deg, #0093fe 0%, #50ffd5 72.7%) text;
      -webkit-text-fill-color: transparent;
    }
  }

  .dot {
    z-index: 2;

    & > * {
      width: 7px;
      height: 7px;
      transform: rotate(-135deg);
      position: absolute;
      background-color: #fff;
    }

    & > :nth-child(1) {
      top: 15px;
      left: 15px;
    }

    & > :nth-child(2) {
      top: 15px;
      right: 15px;
    }

    & > :nth-child(3) {
      bottom: 15px;
      left: 15px;
    }

    & > :nth-child(4) {
      bottom: 15px;
      right: 15px;
    }
  }

  .description {
    font-family: Metrophobic;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.66px;
    text-align: left;
    margin-top: 30px;
    max-width: 791px;
    width: 100%;
  }
`;

const Trusted = () => {
  return (
    <Wrapper>
      <p className="title-section">
        <Image
          src="/images/home/corner-border.png"
          width={436}
          height={67}
          alt=""
        />
        Trusted by key players in both <span>Web2 and Web3</span>
      </p>

      <p className="description">
        PAYSLINK Staking represents a new era of cryptoeconomic security for the
        industry-standard oracle network
      </p>
      <Flex justifyContent="center" className="container-middle" mt={5}>
        <_3DCard
          title="Focus on Growth"
          number="2.3x"
          desc="More user conversions"
        />

        <_3DCard
          title="Wallets in Seconds"
          number="0.8s"
          desc="MPC/AA logins globally scaled"
          arrow
          last
        />
      </Flex>
    </Wrapper>
  );
};

export default Trusted;
