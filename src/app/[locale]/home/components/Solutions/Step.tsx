import { Box, Flex } from "@/components/Box";
import { DownArrow, GradientCircle, LeftArrow } from "@/components/Svg";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  border-right: 1px solid var(--Stroke, #353539);
  padding: 40px 20px 56px;
  max-width: 1200px;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 0;
    height: 740px;
    border-bottom: 1px solid var(--Stroke, #353539);
  }

  .number-box {
    width: 338px;
    padding: 40px 20px 6rem 0;

    @media (max-width: 768px) {
      padding-top: 20px;
      padding-left: 16px;
      width: 100%;
    }
  }

  .number-step {
    width: 39px;
    height: 39px;
    gap: 0px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .description {
    font-family: Trap;
    font-size: 30px;
    font-weight: 600;
    line-height: 33px;
    text-align: left;

    width: 100%;

    margin-top: 34px;

    @media (max-width: 768px) {
      font-family: Trap;
      font-size: 24px;
      font-weight: 500;
      line-height: 26.4px;
      text-align: left;
    }
  }
`;

interface StepProps {
  stepDescription: string;
  stepNumber: number;
}

const Step: React.FC<StepProps> = ({ stepDescription, stepNumber }) => {
  return (
    <Wrapper>
      <Box mr={5} className="number-box">
        <div className="number-step">
          <span>0{stepNumber}</span>
          <GradientCircle />
        </div>
        <p className="description">{stepDescription}</p>
      </Box>
    </Wrapper>
  );
};

export default Step;
