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
    height: 413px;
    margin-left: 200px;

    &::before {
      content: "";
      z-index: 3;
      position: absolute;
      width: 400px;
      height: 413px;
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
    time: "Q1 2021",
    status: "Completed",
    step: [
      "Developing the idea for projects",
      "Establishing a team, business ideas, technology proposals for PAYSLINK platform software. Key founding team, partners and advisors established",
    ],
  },

  {
    time: "Q2 2021",
    status: "Completed",
    step: ["Market research for new projects"],
  },
  {
    time: "Q1 2022",
    status: "Completed",
    step: [
      "Development of Payslink platform structure (IT and blockchain solutions)",
      "Development of Payment app and digital wallet.",
      "Preparation and advisory meetings for business and tech development, Payslink crypto payment platform's integration with its first corporate client",
    ],
  },
  {
    time: "5/2022",
    status: "Completed",
    step: [
      "Detailed product and roadmap information is published, business model and concept of PAYSLINK. A regulatory framework is established for token sales and business operations.",
      "Business expansion negotiations with partners",
      "Building exchange",
      "Beta multi-currency mobile wallet",
    ],
  },

  {
    time: "6/2022",
    status: "In Progress",
    step: [
      "Website and App launch, Event Marketing activities, partner agreements, advisory board announcements.",
    ],
  },

  {
    time: "8/2022",
    status: "In Progress",
    step: ["Activities on token exchange, seed round opening, Private Sale."],
  },

  {
    time: "7/2022",
    status: "In Progress",
    step: ["Public Sale, listed on coin marketcap, IDO"],
  },

  {
    time: "Q4/2022",
    status: "In Progress",
    step: [
      "Token Listing exchange after completing crowdfunding round",
      "Opening to public Payslink Payment Platform, Payslink Exchange, Payslink Metaverse",
    ],
  },

  {
    time: "2023",
    status: "In Progress",
    step: [
      "Continuing development of the Payslink platform, integration with Payslink platform for crypto payments, open for a limited number of blockchain companies for testing and feedback.",
      "Payment partner collaboration",
      "Launch of payment cards worldwide",
      "Open release of the platform for non-fiat payments, testing of fiat payments for non-blockchain companies, expanding business partnerships",
      "Development platform for banking and government services",
    ],
  },

  {
    time: "Q1/2024",
    status: "In Progress",
    step: [
      "Payslink fully working platform, proceeding with the market expansion in Asia, full scale marketing activities.",
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
