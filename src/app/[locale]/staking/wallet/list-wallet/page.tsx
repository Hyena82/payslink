"use client";

import { Box, Flex } from "@/components/Box";
import FuncButton from "@/components/Button/FuncButton";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import WithdrawTransaction from "../components/WithdrawTransaction";

const Wrapper = styled.div`
  font-family: Manrope;
  margin-top: 40px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .box-item {
    background: rgba(10, 9, 16, 1);
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    padding: 17px 20px;
    border-radius: 16px;
    width: 361px;

    @media (max-width: 768px) {
      width: 100%;
      &:last-child {
        margin: 20px 0;
      }
    }

    .title-box {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
    }

    span {
      font-size: 36px;
      font-weight: 400;
      line-height: 44px;
      text-align: left;
      margin-top: 20px;
      margin-bottom: 30px;
      display: block;

      color: rgba(35, 226, 183, 1);
    }

    .custom-button {
      font-family: Manrope;
      font-size: 14px;
      font-weight: 500;
      line-height: 22px;
      text-align: left;
      color: #fff;
    }
  }
`;

const ListWalletContent = () => {
  const [value, setValue] = useState("");

  return (
    <Wrapper>
      {!value ? (
        <>
          <Box className="box-item" onClick={() => setValue("USDT")}>
            <Flex className="title-box" alignItems="center">
              <Image
                src="/images/token/usdt.svg"
                width={40}
                height={40}
                alt=""
              />

              <Box ml={3}>USDT TRC20</Box>
            </Flex>
            <span>1.000000</span>

            <Box className="center">
              <FuncButton className="size-s custom-button hover">
                <Flex className="center">
                  Withdraw
                  <Image
                    src="/images/icons/down-show-arrow.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                </Flex>
              </FuncButton>
            </Box>
          </Box>

          <Box className="box-item" ml={4} onClick={() => setValue("BNB")}>
            <Flex className="title-box" alignItems="center">
              <Image
                src="/images/token/bnb.svg"
                width={40}
                height={40}
                alt=""
              />

              <Box ml={3}>BTC BTC</Box>
            </Flex>
            <span>69252.850000</span>

            <Box className="center">
              <FuncButton className="size-s custom-button hover">
                <Flex className="center">
                  Withdraw
                  <Image
                    src="/images/icons/down-show-arrow.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                </Flex>
              </FuncButton>
            </Box>
          </Box>
        </>
      ) : (
        <WithdrawTransaction setValueTab={setValue} nameWallet={value} />
      )}
    </Wrapper>
  );
};

export default ListWalletContent;
