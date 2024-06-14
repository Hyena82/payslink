import { Flex } from "@/components/Box";
import Image from "next/image";
import styled from "styled-components";
import Card3D from "./Card3D";
import useSectionInView from "@/hooks/useSectionInView";
import { SECTIONS } from "@/configs/constants";
import InviewBox from "@/components/InViewBox";

const Wrapper = styled.div`
  border-bottom: 1px solid var(--Stroke, #353539);
  padding: 66px;

  background-image: url(/images/home/section5-bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .title-section {
    text-align: center;
    margin: 0 auto;
  }

  .desc {
    max-width: 834px;
    width: 100%;
    text-align: center;
    margin: 20px auto 20px;

    font-family: Metrophobic;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.66px;
    text-align: center;
  }

  .card-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    margin-top: 40px;
    & > div {
      flex: 0 0 calc(33.33% - 20px);
      max-width: calc(33.33% - 20px);
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Section5 = () => {
  const data = [
    {
      title: "Rewards Mechanism",
      desc: "Enjoy Regular Rewards and Compound Interest",
    },
    {
      title: "Network Participation",
      desc: "Stakers often gain voting power on key decisions regarding the blockchain's future development. Staking helps secure the network and contributes to its stability and security.",
    },
    {
      title: "Accessibility",
      desc: "Easy to use, flexible staking lock-up period.",
    },
    {
      title: "Energy Efficiency",
      desc: "Proof-of-Stake (PoS) systems, which require staking, are generally more energy-efficient than Proof-of-Work (PoW) systems.",
    },
    {
      title: "Liquidity",
      desc: "Certain staking products offer liquid staking options, allowing users to stake their tokens while still being able to trade or use derivative tokens representing their staked assets.",
    },
    {
      title: "Incentives for Active Participation",
      desc: "Participate in community activities and network improvements, fostering a more engaged community",
    },
  ];

  return (
    <Wrapper className="relative" id={SECTIONS[3]}>
      <InviewBox section={SECTIONS[3]} />

      <Flex justifyContent="center" flexDirection="column" alignItems="center">
        <p className="title-section">
          <span>PAYSLINK</span>- Anatomy Of Defi
        </p>
        <p className="desc center">
          We combine these advantages to provide a reliable, secure, and
          profitable staking experience tailored to the user&apos;s needs and
          risk tolerance.
        </p>
      </Flex>
      <div className="card-box center">
        {data.map((item, index) => (
          <Card3D key={index} title={item.title} desc={item.desc} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Section5;
