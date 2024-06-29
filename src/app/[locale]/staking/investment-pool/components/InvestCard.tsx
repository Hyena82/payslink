import { Box, Flex } from "@/components/Box";
import SubmitButton from "@/components/Button/SubmitButton";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(10, 9, 16, 1);
  border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
  padding: 17px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  font-family: Manrope;

  .title {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
  }

  .amount {
    font-family: Trap;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    margin-bottom: 10px;
    &.number-1 {
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
    }

    &.number-1 {
      background: linear-gradient(
        222.89deg,
        #925217 -2.34%,
        #a66c30 21.15%,
        #f9ca9a 46.72%,
        #d6a369 68.64%
      );
    }

    &.number-2 {
      background: linear-gradient(
        222.89deg,
        #828282 -2.34%,
        #848484 21.15%,
        #dfdfdf 46.72%,
        #989898 68.64%
      );
    }

    &.number-3 {
      background: linear-gradient(
        222.89deg,
        #c9a85c -2.34%,
        #ceb264 21.15%,
        #ece3b6 46.72%,
        #d3ba6a 68.64%
      );
    }

    &.number-4 {
      background: linear-gradient(
        222.89deg,
        #c0c0c0 -2.34%,
        #d3d3d3 21.15%,
        #f1f1f1 46.72%,
        #c5c5c5 68.64%
      );
    }

    &.number-5 {
      background: linear-gradient(
        222.89deg,
        #70b181 -2.34%,
        #88c593 21.15%,
        #e7ffe9 46.72%,
        #7dbb8a 68.64%
      );
    }

    &.number-6 {
      background: linear-gradient(
        222.89deg,
        #334bb0 -2.34%,
        #5178e2 21.15%,
        #9fe6fa 46.72%,
        #4d71e4 68.64%
      );
    }

    &.number-1,
    &.number-2,
    &.number-3,
    &.number-4,
    &.number-5,
    &.number-6 {
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
    }
  }

  .lable {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
    color: rgba(167, 164, 164, 1);
  }

  .value {
    text-align: right;
  }

  .unlock-token {
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;

    width: fit-content;
    padding: 9px 24px;
  }
`;

interface InvestCardProps {
  number: number;
  amount: string;
  profit: string;
  tokenEarn: number;
  setValue: (value: any) => void;
}

const InvestCard: React.FC<InvestCardProps> = ({
  number,
  amount,
  profit,
  tokenEarn,
  setValue,
}) => {
  return (
    <Wrapper>
      <Image
        src={`/images/staking/invest/pool${number}.svg`}
        alt="coin"
        width={104}
        height={104}
      />

      <Box mt={4} mb={3} className="title">
        Investment Pool {number}
      </Box>

      <p className={`number-${number} amount`}>{amount} USD</p>

      <Flex my={20} justifyContent="space-between" className="w-100">
        <p className="lable">Profit</p>

        <p className="value title">{profit} / Month</p>
      </Flex>

      <Flex mb={4} justifyContent="space-between" className="w-100">
        <p className="lable">Token Earn</p>

        <p className="value title">
          <div>{tokenEarn}</div>
          <div> Token</div>
        </p>
      </Flex>

      <SubmitButton
        className="unlock-token"
        onClick={() => setValue({ number, amount, profit, tokenEarn })}
      >
        Unlock
      </SubmitButton>
    </Wrapper>
  );
};

export default InvestCard;
