import { Box, Flex } from "@/components/Box";
import PrimaryButton from "@/components/Button/PrimaryButton";
import InviewBox from "@/components/InViewBox";
import { SECTIONS } from "@/configs/constants";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 769px;
  border-bottom: 1px solid var(--Stroke, #353539);

  background-image: url(/images/home/section9-bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  .title-section {
    margin-bottom: 10px;
    text-align: center;
  }

  .desc {
    font-family: Metrophobic;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.66px;
    text-align: left;
  }

  .section-text {
    font-family: Metrophobic;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;
    color: rgba(35, 226, 183, 1);
    margin: 40px 0 20px;
  }
`;

const Section9 = () => {
  const row1 = [
    {
      text: "TRADE $PAYS ON MEXC",
      icon: "/images/icons/white-mexc.svg",
    },
    {
      text: "TRADE $PAYS ON XT",
      icon: "/images/icons/xt.svg",
    },

    {
      text: "TRADE $PAYS ON BITMART",
      icon: "/images/icons/bitmart.svg",
    },
  ];

  const row2 = [
    {
      text: "TRACK $PAYS ON CMC",
      icon: "/images/icons/cmc.svg",
    },
    {
      text: "TRACK $PAYS ON COINGECKO",
      icon: "/images/icons/coingecko.svg",
    },
  ];

  return (
    <Wrapper className="relative" id={SECTIONS[7]}>
      <InviewBox section={SECTIONS[7]} />
      <Flex className="center" flexDirection="column">
        <div className="title-section">
          Why choose
          <span> Payslink?</span>
        </div>

        <p className="desc">
          Your funds, your choice: put your $PAYS to work while staying in full
          control, with no exceptions
        </p>

        <p className="section-text">TRADE $PAYS</p>

        <Flex>
          {row1.map((item, index) => (
            <Box key={index} mr={3}>
              <PrimaryButton fromIcon icon={item.icon}>
                {item.text}
              </PrimaryButton>
            </Box>
          ))}
        </Flex>

        <p className="section-text">TRACK $PAYS</p>

        <Flex>
          {row2.map((item, index) => (
            <Box key={index} mr={3}>
              <PrimaryButton key={index} fromIcon icon={item.icon}>
                {item.text}
              </PrimaryButton>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default Section9;
