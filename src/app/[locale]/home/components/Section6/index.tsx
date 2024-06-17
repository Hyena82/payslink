import { Flex } from "@/components/Box";
import InviewBox from "@/components/InViewBox";
import { SECTIONS } from "@/configs/constants";
import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom: 1px solid var(--Stroke, #353539);
  padding: 66px;

  @media (max-width: 768px) {
    padding: 66px 16px;
  }

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

    @media (max-width: 768px) {
      font-size: 18px;
      font-weight: 400;
      line-height: 22.19px;
    }
  }

  .video-box {
    border-radius: 20px;
    border: 1px solid #353539;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    overflow: hidden;

    @media (max-width: 768px) {
      border-radius: 5px;
    }

    iframe {
      width: 860px;
      height: 545px;
      @media (max-width: 768px) {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Section6 = () => {
  return (
    <Wrapper className="relative" id={SECTIONS[4]}>
      <InviewBox section={SECTIONS[4]} />

      <Flex justifyContent="center" flexDirection="column" alignItems="center">
        <p className="title-section">
          Why PAYSLINK <span>Staking?</span>
        </p>
        <p className="desc center">
          PAYSLINK Staking users can easily maximize the amount of rewards by
          re-staking the rewards with single signature
        </p>
      </Flex>
      <Flex mt={4} justifyItems="center">
        <div className="video-box">
          <iframe
            src="https://www.youtube.com/embed/bRiPYd_BkGU?si=iqiXdbvU7_PF8wnl"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </Flex>
    </Wrapper>
  );
};

export default Section6;
