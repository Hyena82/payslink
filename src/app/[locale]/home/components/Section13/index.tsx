import Image from "next/image";
import styled from "styled-components";
import { ArrowBox, ArrowLeftBox } from "../Section4";
import { DownArrow } from "@/components/Svg";
import Slider from "react-slick";
import PersonCard from "./PersonCard";
import { useState } from "react";
import TotalMembers from "@/components/TotalMembers";
import { Box } from "@/components/Box";
import { position } from "styled-system";
import InviewBox from "@/components/InViewBox";
import { SECTIONS } from "@/configs/constants";

const Wrapper = styled.div`
  .main-body {
    padding: 4rem 40px 0;
    margin-bottom: 4rem;
    border-bottom: 1px solid var(--Stroke, #353539);
  }
  .title-section {
    position: relative;
    max-width: 420px;
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
    height: 460px;
    margin-left: 10rem;
    margin-bottom: -1px;
  }

  .slick-slider {
    height: 100%;
  }
`;

const data = [
  {
    name: "Vincent",
    avatar: "/images/members/vincent.png",
    position: "CEO",
    desc: "CEO Vincent has been involved in a number of business sectors over the years in the U.K. and Ireland. He has been involved in a large Irish accountancy practice on a self employed basis working with numerous companies that need assistance and restructuring from staffing, sales and budgeting. Until recently he has spent 6 years in the recruitment industry were he build an agency in Ireland and then sold his share. He is currently involved in a number of crypto projects. Vincent first got involved in the Crypto Asset space back in 2019, Join into the market during turbulent times and coming out on top with returns beating the S&P 500 and many Hedge Funds across the UK and Europe. Today, Vincent focuses on blockchain technology, Tokenization and the metaverse. He also works with a U.K. Crypto company to assist sales whilst applying blockchain technology to real life applications to solve real problems",
  },

  {
    name: "Aurel Scarlat",
    avatar: "/images/members/scarlat.png",
    position: "CIO",
    desc: "With almost 10 years of experience in IT roles and over 2 years as CIO of Shunter AMAZON Ltn4. He has been involved in several startups in the UK from conceptualizaton to finalizaton. He manages a highly skilled sofware development team of 20 professionals.With almost decade of financial IT experience in Consumer Finance Banking: Debit Cards, Prepaid Cards, E-commerce, Mobile Payments and other Consumer Loans, He is now focusing on helping bring technology and convenience across the globe.",
  },

  {
    name: "Asma Riaz",
    avatar: "/images/members/riaz.png",
    position: "CCO",
    desc: "Asma Riaz is an entrepreneur, an IT startup enthusiast, and a software architect with experience in software engineering. Over 2 years of experience as administration & accounts with versatile organization skills and excellent knowledge of office policies and procedures. Her business experience allows her to bring in a technical and management skills in any technically capable organization. She is now working with the Payslink's team to grow the platform and deliver the right solutions.",
  },

  {
    name: "SHAMAS JAVED",
    avatar: "/images/members/javed.png",
    position: "CTO",
    desc: "Skilled sofware developer with 7 years of experience in applications development, he is a technical lead with expertise in architecture development and database design. He is currently managing a team of over 20 professionals. He has strong knowledge in business logic implementatons. He is a blockchain and technology enthusiast with over 3.5 years of hands-on experience in Business and Strategy domains in Payments industry and Consumer markets.",
  },

  {
    name: "SHAMAS JAVED",
    avatar: "/images/members/scarlat2.png",
    position: "CFO",
    desc: "Skilled sofware developer with 7 years of experience in applications development, he is a technical lead with expertise in architecture development and database design. He is currently managing a team of over 20 professionals. He has strong knowledge in business logic implementatons. He is a blockchain and technology enthusiast with over 3.5 years of hands-on experience in Business and Strategy domains in Payments industry and Consumer markets.",
  },
];

const Section13 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    centerPadding: "0px",
    afterChange: (current: number) => setCurrentSlide(current),

    nextArrow: (
      <ArrowBox
        left={-100}
        top={380}
        disable={!(currentSlide < data.length - 1)}
      >
        <DownArrow
          className={`${currentSlide < data.length - 1 && "active"} svg-button`}
        />
      </ArrowBox>
    ),
    prevArrow: (
      <ArrowLeftBox left={-160} top={380} disable={currentSlide === 0}>
        <DownArrow
          className={`${currentSlide > 0 && "active"} left svg-button`}
        />
      </ArrowLeftBox>
    ),
  };
  return (
    <Wrapper className="relative" id={SECTIONS[11]}>
      <InviewBox section={SECTIONS[11]} />
      <Box className="main-body">
        <p className="title-section">
          <Image
            src="/images/home/corner-border.png"
            width={399}
            height={67}
            alt=""
          />
          Behind <span>Payslink</span>
        </p>
        <Box my={4} className="center">
          <TotalMembers text="The team (258)" />
        </Box>
        <div className="slider-top-box">
          <div className="slider-box">
            <Slider {...settings}>
              {data.map((item, index) => (
                <PersonCard key={index} data={item} />
              ))}
            </Slider>
          </div>
        </div>
      </Box>
      <Box className="" height={400} width={1000}></Box>
      <Box my={4} className="center">
        <TotalMembers text="BACKERS and partner (52)" />
      </Box>
    </Wrapper>
  );
};

export default Section13;
