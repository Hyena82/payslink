import { Box, Flex } from "@/components/Box";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid rgba(53, 53, 57, 1);
  width: 397px;
  padding: 20px 40px;
  /* border-bottom: none; */
  position: relative;
  z-index: 2;
  background-color: #000;
  .plus-icon {
    transition: transform 0.3s ease-in-out;
  }

  .content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    margin-top: 20px;
  }

  &.content-visible .content {
    max-height: 1000px;
  }

  &.content-visible .plus-icon {
    transform: rotate(45deg);
  }

  .content {
    font-family: Metrophobic;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;
  }

  .step-box {
    height: 397px;
    gap: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .text-gradient {
      font-family: Metrophobic;
      font-size: 20px;
      font-weight: 400;
      line-height: 24.66px;
      text-align: left;
      text-transform: uppercase;
    }

    .avatar {
      position: relative;
      width: 270px;
      height: 270px;
      margin: 20px auto;

      .avatar-border {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        z-index: 0;
      }

      .avatar-source {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }
    }

    .name {
      font-family: Metrophobic;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.73px;
      text-align: left;
    }
  }
`;

interface PersonCardProps {
  data: {
    name: string;
    avatar: string;
    position: string;
    desc: string;
  };
}

const PersonCard: React.FC<PersonCardProps> = ({ data }) => {
  const [contentVisible, setContentVisible] = useState(false);

  const handlePlusClick = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <Wrapper className={contentVisible ? "content-visible" : ""}>
      <Box className="step-box">
        <Box>
          <Box className="text-gradient">{data.name}</Box>
          <Box className="avatar">
            <Image
              className="avatar-border"
              src="/images/icons/gradient-border.svg"
              width={269}
              height={269}
              quality={100}
              alt=""
            />
            <Image
              className="avatar-source"
              src={data.avatar}
              width={220}
              height={220}
              quality={100}
              alt=""
            />
          </Box>
        </Box>

        <Flex justifyContent="space-between" alignItems="center">
          <Box className="name">{data.position}</Box>

          <Box onClick={handlePlusClick}>
            <Image
              className="plus-icon hover"
              src="/images/icons/plus.svg"
              width={32}
              height={32}
              alt=""
            />
          </Box>
        </Flex>
      </Box>

      <Box className="content">{data.desc}</Box>
    </Wrapper>
  );
};

export default PersonCard;
