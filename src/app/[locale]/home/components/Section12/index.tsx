import styled from "styled-components";
import { ArrowBox, ArrowLeftBox } from "../Section4";
import { DownArrow } from "@/components/Svg";
import { useState } from "react";
import Slider from "react-slick";
import RoadStep from "./RoadStep";
import InviewBox from "@/components/InViewBox";
import { SECTIONS } from "@/configs/constants";

const Wrapper = styled.div`
  position: relative;

  .title-section {
    margin: 7rem 40px;
  }

  .road-map-text {
    position: absolute;
    right: 0;
    top: 0;
    color: rgba(255, 255, 255, 0.07);
    font-family: Trap;
    font-size: 12rem;
    line-height: 140px;
    font-weight: 600;
    text-align: center;
  }

  .slider-top-box {
    margin-top: 8rem;
    border-bottom: 1px solid var(--Stroke, #353539);
    border-top: 1px solid var(--Stroke, #353539);
  }

  .slider-box {
    height: 535px;
    margin-left: 200px;

    &::before {
      content: "";
      z-index: 3;
      position: absolute;
      width: 400px;
      height: 535px;
      background: red;
      left: -200px;
      bottom: 1px;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(6px);
    }
  }

  .slick-list {
    margin-left: -400px !important;
    padding-left: 400px !important;
  }
`;

const data = [
  {
    time: "2022",
    status: "Completed",
    step: [
      "Marked a major milestone with the official launch of the payslink website, opening doors to its innovative platform.",
      "Conducted successful private and public sales, garnering widespread participation and investment.",
      "Achieved a significant listing on CoinMarketCap, a leading crypto data aggregator, enhancing visibility and credibility.",
      "Unveiled the highly anticipated payslink metaverse, a cutting-edge virtual world for users to explore.",
      "Opened the payslink exchange, providing a secure and user-friendly platform for cryptocurrency trading.",
    ],
  },
  {
    time: "2023",
    status: "Completed",
    step: [
      "Executed a strategic airdrop and marketing campaign, driving user acquisition and awareness.",
      "Established key press outreach initiatives and forged valuable collaborations with industry partners.",
      "Secured coveted listings on Bitmart, XT.com exchange and streamlined withdrawal processes on Lighex.",
      "Developed a robust app featuring seamless integration of traditional and cryptocurrency payment processing.",
    ],
  },
  {
    time: "2024",
    status: "In Progress",
    step: [
      "Officially opened the payslink network, enabling full access to the platform's comprehensive suite of features.",
      "Formed strategic collaborations with major backers, solidifying the platform's position in the ecosystem.",
      "Implemented a comprehensive marketing campaign, expanding outreach and attracting new user segments.",
      "Introduced cutting-edge features, including messaging, integrated wallet, mining, leaderboard, and notification systems.",
      "Integrated robust social functionality, an affiliate program, an ad platform, and support for additional cryptocurrencies.",
      "Launched an immersive gaming platform, allowing users to participate in blockchain-based games and earn rewards",
    ],
  },
  {
    time: "2025 - 2026",
    status: "In Progress",
    step: [
      "Implemented an innovative share reward system, incentivizing users to actively share and promote the platform.",
      "Developed a state-of-the-art NFT marketplace, enabling users to seamlessly buy, sell, and trade non-fungible tokens.",
      "Enhanced social features with advanced functionality, including groups, events, and vibrant communities.",
      "Introduced a decentralized exchange (DEX), facilitating seamless peer-to-peer cryptocurrency trading within the platform.",
      "Implemented advanced security measures, including multi-factor authentication and biometric authentication, prioritizing user safety.",
    ],
  },
];

const Section12 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centerPadding: "0px",
    afterChange: (current: number) => setCurrentSlide(current),
    infinite: false,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],

    nextArrow: (
      <ArrowBox left={-100} disable={!(currentSlide < data.length - 1)}>
        <DownArrow
          className={`${currentSlide < data.length - 1 && "active"} svg-button`}
        />
      </ArrowBox>
    ),
    prevArrow: (
      <ArrowLeftBox left={-160} disable={currentSlide === 0}>
        <DownArrow
          className={`${currentSlide > 0 && "active"} left svg-button`}
        />
      </ArrowLeftBox>
    ),
  };
  return (
    <Wrapper className="relative" id={SECTIONS[10]}>
      <InviewBox section={SECTIONS[10]} />
      <p className="road-map-text">Roadmap</p>

      <div className="title-section">
        <span> PAYSLINK </span>

        <p>Milestones</p>
      </div>

      <div className="slider-top-box">
        <div className="slider-box">
          <Slider {...settings}>
            {data.map((item, index) => (
              <RoadStep key={index} index={index + 1} data={item} />
            ))}
          </Slider>
        </div>
      </div>
    </Wrapper>
  );
};

export default Section12;
