import { Box, Flex } from "@/components/Box";
import { DownArrow, GradientCircle, LeftArrow } from "@/components/Svg";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  border-right: 1px solid var(--Stroke, #353539);
  padding: 40px 20px 56px;

  .number-box {
    min-width: 334px;
    width: 100%;
    padding: 40px 20px;
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
  }
`;

interface StepProps {
  stepDescription: string;
  stepNumber: number;
}

const Step: React.FC<StepProps> = ({ stepDescription, stepNumber }) => {
  return (
    <Wrapper>
      <Flex alignItems="flex-end">
        <Box mr={5} className="number-box">
          <div className="number-step">
            <span>0{stepNumber}</span>
            <GradientCircle />
          </div>
          <p className="description">{stepDescription}</p>
        </Box>

        <Image
          src={`/images/home/step/step${stepNumber}.png`}
          width={585}
          height={574}
          quality={100}
          alt=""
        />
      </Flex>
    </Wrapper>
  );
};

export default Step;
