"use client";
import { Box, Flex } from "@/components/Box";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .content-box {
    padding: 20px 26px;
    background: rgba(10, 9, 16, 1);
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 20px 15px;
    }

    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;

    .show-box {
      background-color: #000;
      border-radius: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 284px;

      @media (max-width: 768px) {
        width: 220px;
      }

      .item-box {
        font-family: Manrope;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        text-align: center;
        padding: 10px 36px;
        color: rgba(122, 122, 122, 1);
        border-radius: 40px;
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 0.3s ease, color 0.3s ease; /* Add this line */

        @media (max-width: 768px) {
          padding: 7px 20px;
        }

        &.active {
          background: rgba(35, 226, 221, 1);
          color: rgba(0, 0, 0, 1);
          font-family: Manrope;
          font-size: 14px;
          font-weight: 500;
          line-height: 22px;
          text-align: center;
        }
      }
    }
  }
`;

const MemberTreeContent = () => {
  const [value, setValue] = useState("Expand all");
  return (
    <Wrapper>
      <Box className="content-box" mt={4}>
        <Flex className="center">
          <Image
            src="/images/icons/down-arrow.svg"
            alt=""
            width={22}
            height={22}
          />
          <Box ml={2} className="">
            Member
          </Box>
        </Flex>

        <Flex>
          <Box className="show-box">
            <Box
              onClick={() => setValue("Expand all")}
              className={`${value === "Expand all" && "active"} item-box`}
            >
              Expand all
            </Box>
            <Box
              onClick={() => setValue("Collapse all")}
              className={`${value === "Collapse all" && "active"} item-box`}
            >
              Collapse all
            </Box>
          </Box>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default MemberTreeContent;
