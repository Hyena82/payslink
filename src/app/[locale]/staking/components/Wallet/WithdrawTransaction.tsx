import { Box, Flex } from "@/components/Box";
import FuncButton from "@/components/Button/FuncButton";
import PrimaryButton from "@/components/Button/PrimaryButton";
import SubmitButton from "@/components/Button/SubmitButton";
import { GrayInput } from "@/components/Input";
import TokenBox from "@/components/TokenBox";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(10, 9, 16, 1);
  border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
  padding: 17px 20px;
  border-radius: 16px;
  max-width: 551px;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;

  .title-box {
    font-family: Trap;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    margin: 30px 0;
  }

  .lable {
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
    border-radius: 10px;
    height: 63px;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    color: #fff;
    width: 100%;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &::placeholder {
      color: rgba(92, 92, 92, 1);
    }

    &:focus {
      border-color: #40a9ff; /* Ant Design's focus border color */
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2); /* Ant Design's focus shadow */
    }
  }

  .custom-button {
    //styleName: Body/Medium/02;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    color: rgba(27, 26, 40, 1);

    &:hover {
      color: #fff;
    }
  }
`;

interface WithdrawTransactionProps {
  setValueTab: (value: string) => void;
  nameWallet: string;
}

const WithdrawTransaction: React.FC<WithdrawTransactionProps> = ({
  setValueTab,
  nameWallet,
}) => {
  const [value, setValue] = useState("");
  console.log("~~", nameWallet);
  const handleClose = () => {
    setValueTab("");
  };

  return (
    <Wrapper className="center">
      <Image
        src="/images/staking/down-arrow-transaction.svg"
        width={104}
        height={104}
        alt=""
      />

      <p className="title-box">Withdraw Transaction</p>

      <Box className="w-100" mb={4}>
        <p className="lable">Your wallet</p>
        <GrayInput
          value={value}
          setValue={setValue}
          placeholder="Enter Your wallet"
          isCopyInput
        />
      </Box>

      <Box className="w-100" mb={4}>
        <p className="lable">Network</p>

        <GrayInput
          value={""}
          setValue={setValue}
          placeholder={nameWallet}
          disabled
        />
      </Box>

      <Box className="w-100" mb={4}>
        <p className="lable">Token</p>

        <Box className="input-text">
          <TokenBox name={nameWallet} />
        </Box>
      </Box>

      <Box className="w-100" mb={4}>
        <p className="lable">Amount</p>

        <GrayInput value={value} setValue={setValue} placeholder="0" />
      </Box>

      <Box className="w-100" mb={4}>
        <p className="lable">Withdraw fee</p>

        <GrayInput value={value} setValue={setValue} placeholder="0" disabled />
      </Box>

      <Box className="w-100" mb={4}>
        <p className="lable">Receive amount</p>

        <GrayInput value={value} setValue={setValue} placeholder="0" disabled />
      </Box>

      <FuncButton width="100%" className="hover" color="#fff">
        <Flex className="center w-100" height={30} onClick={handleClose}>
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
            Withdraw now
          </Box>
        </SubmitButton>
      </Box>
    </Wrapper>
  );
};

export default WithdrawTransaction;
