import { Box, Flex } from "@/components/Box";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 397px;
  position: relative;
  z-index: 2;
  background-color: #000;
  margin-top: 1px;

  @media (max-width: 768px) {
    width: 328px;
  }

  &.fisrt-child-card .step-box {
    border-left: 1px solid rgba(53, 53, 57, 1);
  }

  &.fisrt-child-card .content {
    margin-left: unset;
  }

  .plus-icon {
    transition: transform 0.3s ease-in-out;
  }

  .content {
    max-height: 0;
    overflow: hidden;
    padding: 0 40px;
    @media (max-width: 768px) {
      padding: 0 19px;
    }

    transition: max-height 0.3s ease-in-out;
    transition: margin-top 0.3s ease-in-out;
  }

  &.content-visible .content {
    max-height: 1000px;
    padding: 20px 40px;
    @media (max-width: 768px) {
      padding: 12px 19px;
    }
  }

  &.content-visible .plus-icon {
    transform: rotate(45deg);
  }

  .content {
    transition: all 0.5s ease-in-out;
    font-family: Metrophobic;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;
    border: 1px solid rgba(53, 53, 57, 1);
    border-top: none;
    margin-left: -1px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .step-box {
    height: 458px;
    gap: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px 40px;
    border: 1px solid rgba(53, 53, 57, 1);
    border-bottom: none;
    border-left: none;

    @media (max-width: 768px) {
      padding: 12px 19px;
      height: 312px;
    }

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

      @media (max-width: 768px) {
        width: 178px;
        height: 178px;
        margin: 20px auto 0;
      }

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

        @media (max-width: 768px) {
          width: 146px;
          height: 146px;
        }
      }
    }

    .name {
      font-family: Metrophobic;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.73px;
      text-align: left;

      @media (max-width: 768px) {
        font-size: 14.32px;
        font-weight: 400;
        line-height: 17.65px;
        text-align: left;
      }
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

  index: number;
}

const PersonCard: React.FC<PersonCardProps> = ({ data, index }) => {
  const [contentVisible, setContentVisible] = useState(false);

  const handlePlusClick = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <Wrapper
      className={`${contentVisible && "content-visible"}  ${
        index === 0 && "fisrt-child-card"
      }`}
    >
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
