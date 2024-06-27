import styled from "styled-components";
import InvestCard from "./InvestCard";
import { Col, Row } from "antd";
import { useState } from "react";
import { Box, Flex } from "@/components/Box";
import Image from "next/image";
import TokenBox from "@/components/TokenBox";
import FuncButton from "@/components/Button/FuncButton";
import SubmitButton from "@/components/Button/SubmitButton";

const Wrapper = styled.div`
  padding: 0 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  .invest-form {
    margin: 0 auto;

    max-width: 511px;
    width: 100%;
    background: rgba(10, 9, 16, 1);
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    padding: 20px 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 16px;
    font-family: Manrope;

    .title-form {
      font-family: Trap;
      font-size: 32px;
      font-weight: 500;
      line-height: 40px;
      text-align: center;

      p {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 30px;
      }
    }

    .lable-form {
      font-family: Manrope;
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      text-align: left;

      color: rgba(35, 226, 183, 1);

      margin-bottom: 10px;
    }

    .input-text {
      border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
      background-color: rgba(37, 37, 37, 1);
      padding: 15px 22px;
      outline: none;
      height: 63px;
      font-family: Manrope;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      color: #fff;
      width: 100%;
      transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

      &.radius {
        border-radius: 10px;
      }

      &.border-top {
        border-radius: 10px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }

      &::placeholder {
        color: rgba(92, 92, 92, 1);
      }

      &:focus {
        border-color: #40a9ff; /* Ant Design's focus border color */
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2); /* Ant Design's focus shadow */
      }
    }

    .custom-button {
      font-family: Manrope;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;
    }
  }
`;

const data = [
  {
    amount: "100",
    profit: "-",
    tokenEarn: 142.85714285714286,
  },
  {
    amount: "500",
    profit: "-",
    tokenEarn: 142.85714285714286,
  },
  {
    amount: "1,000",
    profit: "-",
    tokenEarn: 142.85714285714286,
  },
  {
    amount: "5,000",
    profit: "-",
    tokenEarn: 142.85714285714286,
  },
  {
    amount: "10,000",
    profit: "-",
    tokenEarn: 142.85714285714286,
  },
  {
    amount: "25,000",
    profit: "-",
    tokenEarn: 142.85714285714286,
  },
];

const Investment = () => {
  const [value, setValue] = useState<any>(null);
  return (
    <Wrapper>
      {value ? (
        <Box className="invest-form">
          <Image
            src={`/images/staking/invest/pool${value?.number}.svg`}
            alt="coin"
            width={104}
            height={104}
          />

          <Box mt={4} mb={3} className="title-form">
            Investment Pool {value?.number}
            <p>Trade Instantly & Pool Tokens to Earn Rewards</p>
          </Box>

          <Box className="w-100">
            <p className="lable-form">Your balance</p>

            <Flex
              justifyContent="space-between"
              alignItems="center"
              className="input-text radius"
            >
              <Box>0.00</Box>

              <TokenBox name="usdt" />
            </Flex>
          </Box>

          <Box className="w-100" mt={3} mb={4}>
            <p className="lable-form">Detail</p>

            <Flex
              justifyContent="space-between"
              alignItems="center"
              className="input-text border-top"
            >
              <Box>Price</Box>

              <Box>${value?.amount}</Box>
            </Flex>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              className="input-text"
            >
              <Box>Profit</Box>

              <Box>{value?.profit}/ Month</Box>
            </Flex>

            <Flex
              justifyContent="space-between"
              alignItems="center"
              className="input-text"
            >
              <Box>Token Earn</Box>

              <Box>{value?.tokenEarn} Token</Box>
            </Flex>

            <Flex
              justifyContent="space-between"
              alignItems="center"
              className="input-text"
            >
              <Box>Total</Box>

              <Box>${value?.amount}</Box>
            </Flex>
          </Box>

          <FuncButton width="100%" className="hover" color="#fff">
            <Flex
              className="center w-100"
              height={30}
              onClick={() => setValue(null)}
            >
              <Image
                src="/images/icons/left-arrow-button.svg"
                width={24}
                height={24}
                alt=""
              />
              <Box ml={2}>Go back</Box>
            </Flex>
          </FuncButton>

          <Box className="w-100" mt={3}>
            <SubmitButton>
              <Box className="custom-button" height={30}>
                Unlock now
              </Box>
            </SubmitButton>
          </Box>
        </Box>
      ) : (
        <Row gutter={[20, 20]}>
          {data.map((item, index) => (
            <Col span={8} key={index}>
              <InvestCard
                number={index + 1}
                amount={item.amount}
                profit={item.profit}
                tokenEarn={item.tokenEarn}
                setValue={setValue}
              />
            </Col>
          ))}
        </Row>
      )}
    </Wrapper>
  );
};

export default Investment;
