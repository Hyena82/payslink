import { Flex } from "@/components/Box";
import InviewBox from "@/components/InViewBox";
import { SECTIONS } from "@/configs/constants";
import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom: 1px solid var(--Stroke, #353539);
  padding: 66px;

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

  .video-box {
    border-radius: 20px;
    border: 1px solid #353539;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    overflow: hidden;
    /* &:before {
      content: "";
      position: absolute;
      top: -46px;
      right: -48px;
      width: 90px;
      height: 90px;
      z-index: 2;
      transform: rotate(45deg);
      background: #000;
      display: inline-block;
    }

    &:after {
      content: "";
      position: absolute;
      top: 27px;
      right: -13px;
      width: 94.1px;
      height: 0.87px;
      background: #353539;
      transform: rotate(45deg);
    } */
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
            width="860"
            height="545"
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
