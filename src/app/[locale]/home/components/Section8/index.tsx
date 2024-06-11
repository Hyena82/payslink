import { Box, Flex } from "@/components/Box";
import PrimaryButton from "@/components/Button/PrimaryButton";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 800px;
  border-bottom: 1px solid var(--Stroke, #353539);

  .right-content {
    width: 50%;
    height: 100%;
    padding: 8rem;
    border-left: 1px solid var(--Stroke, #353539);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title-section {
    max-width: 100%;
    margin-bottom: 10px;
  }

  .desc {
    font-family: Metrophobic;
    font-size: 20px;
    font-weight: 400;
    line-height: 24.66px;
    text-align: left;
  }
`;

const Section8 = () => {
  return (
    <Wrapper>
      <Flex justifyContent="flex-end" height="100%">
        <Box className="right-content">
          <div className="title-section">
            <Flex>
              <span>Audited</span> <Box ml={2}>and</Box>
            </Flex>

            <div>
              <span>Verified</span>
            </div>
          </div>

          <p className="desc">The most secure DeFi protocol for your profit</p>
          <p>PAYSLINK AUDIT REPORT</p>
          <Box mt={4}>
            <PrimaryButton>Check PAYSLINK AUDIT REPORT</PrimaryButton>
          </Box>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Section8;
