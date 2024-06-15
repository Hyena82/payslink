import { Box, Flex } from "@/components/Box";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 413px;

  .step-box {
    width: 397px;
    height: 413px;
    padding: 0px 0px 20px 0px;
    gap: 20px;
    border: 1px solid rgba(53, 53, 57, 1);
    border-bottom: none;
    border-left: none;
    border-top: none;

    &.fisrt-children {
      border-left: 1px solid rgba(53, 53, 57, 1);
    }

    .header {
      font-family: Metrophobic;
      font-size: 20px;
      font-weight: 400;
      line-height: 24.66px;
      text-align: left;
      text-transform: uppercase;

      .road-text {
        width: 127px;
        height: 53px;
        border: 1px solid rgba(53, 53, 57, 1);
        border-top: none;
        border-left: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .status-text {
        width: fit-content;
        padding: 0 20px;
        height: 53px;
        border: 1px solid rgba(53, 53, 57, 1);
        border-top: none;
        border-left: none;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .body-step {
      padding: 20px;

      font-family: Metrophobic;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.73px;
      text-align: left;

      .text-time {
        margin-bottom: 10px;
      }

      ul {
        padding: 0;
        margin: 0;
        li {
          margin: 0 0 0 1em;
          margin-bottom: 10px;
        }
      }
    }
  }
`;

interface RoadStepProps {
  data: {
    time: string;
    status: string;
    step: string[];
  };
  index: number;
}

const RoadStep: React.FC<RoadStepProps> = ({ data, index }) => {
  return (
    <Wrapper>
      <Box className={`${index === 1 && "fisrt-children"} step-box`}>
        <Flex className="header">
          <Box className="road-text">Round {index}</Box>
          <Box
            className={`${
              data.status === "In Progress" && "text-gradient"
            } status-text`}
          >
            {data.status}
          </Box>
        </Flex>

        <Box className="body-step">
          <Box className="text-time">{data.time}</Box>

          <ul>
            {data.step.map((step: string, index: number) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default RoadStep;
