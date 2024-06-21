import styled from "styled-components";
import { ArrowBox, ArrowLeftBox } from "../Solutions";
import { DownArrow } from "@/components/Svg";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import RoadStep from "./RoadStep";
import InviewBox from "@/components/InViewBox";
import { SECTIONS } from "@/configs/constants";
import { isMobile } from "react-device-detect";

const Wrapper = styled.div`
  position: relative;

  .title-section {
    margin: 7rem 40px;
    @media (max-width: 768px) {
      margin: 4rem 16px 0;
    }
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
    @media (max-width: 768px) {
      display: none;
    }
  }

  .slider-top-box {
    margin-top: 8rem;
    border-bottom: 1px solid var(--Stroke, #353539);
    border-top: 1px solid var(--Stroke, #353539);
    @media (max-width: 768px) {
      margin-top: 5rem;
    }
  }

  .slider-box {
    height: 535px;
    margin-left: 200px;
    @media (max-width: 768px) {
      margin-left: 0;
      margin-bottom: 30px;
      height: 585px;
      .slick-slider.slick-initialized {
        height: 100%;
      }
    }

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
      @media (max-width: 768px) {
        display: none;
      }
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
      "Launched the payslink website, introducing its innovative platform.",
      "Conducted successful private and public sales.",
      "Listed on CoinMarketCap, enhancing visibility.",
      "Unveiled the payslink metaverse.",
      "Opened the payslink exchange for secure cryptocurrency trading.",
    ],
  },
  {
    time: "2023",
    status: "Completed",
    step: [
      "Executed airdrop and marketing campaigns to drive user acquisition.",
      "Established press outreach and industry collaborations.",
      "Secured listings on Bitmart and XT.com; improved withdrawals on Lighex.",
      "Developed an app for traditional and cryptocurrency payment processing.",
    ],
  },
  {
    time: "2024",
    status: "In Progress",
    step: [
      "Launched the payslink network with full feature access.",
      "Formed strategic collaborations with major backers.",
      "Expanded outreach with a comprehensive marketing campaign.",
      "Introduced new features: messaging, wallet, mining, leaderboard, notifications, social functions, affiliate program, ad platform, and support for more cryptocurrencies.",
      "Launched a blockchain gaming platform.",
    ],
  },
  {
    time: "2025 - 2026",
    status: "In Progress",
    step: [
      "Implemented a share reward system.",
      "Developed an NFT marketplace.",
      "Enhanced social features with groups, events, and communities.",
      "Introduced a decentralized exchange (DEX) for peer-to-peer trading.",
      "Enhanced security with multi-factor and biometric authentication.",
    ],
  },
];

const Section12 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile2, setIsMobile] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setIsMobile(true);
    }
  }, [isMobile]);

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
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    nextArrow: (
      <ArrowBox
        left={isMobile2 ? 60 : -100}
        disable={!(currentSlide < data.length - 1)}
      >
        <DownArrow
          className={`${currentSlide < data.length - 1 && "active"} svg-button`}
        />
      </ArrowBox>
    ),
    prevArrow: (
      <ArrowLeftBox
        left={-160}
        mbl={isMobile2 ? 10 : 0}
        disable={currentSlide === 0}
      >
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
