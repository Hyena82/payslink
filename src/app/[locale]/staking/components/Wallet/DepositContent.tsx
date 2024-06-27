import { Box, Flex } from "@/components/Box";
import FuncButton from "@/components/Button/FuncButton";
import PrimaryButton from "@/components/Button/PrimaryButton";
import SubmitButton from "@/components/Button/SubmitButton";
import { GrayInput } from "@/components/Input";
import TokenBox from "@/components/TokenBox";
import { Select } from "antd";
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
  margin: 40px auto 20px;

  .title-box {
    font-family: Trap;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    margin: 30px 0 20px;
  }

  .desc-box {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin-bottom: 30px;
    color: rgba(240, 240, 240, 1);
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

  .ant-select-single {
    width: 100%;
    height: 63px;
  }

  .form-select {
    width: 100%;
    .ant-select-selector {
      width: 100%;
      height: 100%;
      border: 1px solid var(--Stroke, rgba(53, 53, 57, 1)) !important;
      background-color: rgba(37, 37, 37, 1) !important;
      padding: 15px 22px !important;
      outline: none;
      border-radius: 10px !important;
      height: 63px;
      font-family: Manrope;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      color: #fff;
      transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      .ant-select-focused .ant-select-selector {
        border-color: #d9d9d9 !important;
        box-shadow: none !important;
      }
    }

    .ant-select-arrow {
      margin-right: 10px;
    }

    .ant-select-selection-item {
      display: flex;
      align-items: center;
    }
  }

  .custom-dropdown {
    background-color: rgba(37, 37, 37, 1) !important;
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

const DepositContent = () => {
  const [value, setValue] = useState("");
  const [tokenValue, setTokenValue] = useState("");

  const handleClose = () => {
    // setValueTab("");
  };
  const [selectedValue, setSelectedValue] = useState({
    key: "usdt",
    label: <TokenBox name="usdt" />,
  });
  return (
    <Wrapper className="center">
      <Image
        src="/images/staking/down-arrow-transaction.svg"
        width={104}
        height={104}
        alt=""
      />

      <p className="title-box">Deposit</p>

      <p className="desc-box">Trade Instantly & Pool Tokens to Earn Rewards</p>

      <Box className="w-100" mb={4}>
        <p className="lable">Network</p>

        <Select
          suffixIcon={
            <Image
              width={24}
              height={24}
              alt=""
              src="/images/icons/gray-down-arrow.svg"
            />
          }
          allowClear={false}
          optionFilterProp="children"
          showArrow
          className="form-select"
          value={selectedValue}
          labelInValue
          dropdownStyle={{
            backgroundColor: "rgba(37, 37, 37, 1)",
            border: "1px solid rgba(53, 53, 57, 1)",
          }}
          onChange={(value) => setSelectedValue(value)}
        >
          <Select.Option value="usdt" dropdownClassName="custom-dropdown">
            <TokenBox name="usdt" />
          </Select.Option>
          <Select.Option value="bnb" dropdownClassName="custom-dropdown">
            <TokenBox name="bnb" />
          </Select.Option>
        </Select>
      </Box>

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
        <p className="lable">Token</p>

        <GrayInput
          value={tokenValue}
          setValue={setTokenValue}
          placeholder="Enter Your Token"
        />
      </Box>

      <Box className="w-100" mb={4}>
        <p className="lable">Scan QR Code</p>

        <Flex className="center" py={3}>
          <Image
            src="/images/staking/qr-code.png"
            width={128}
            height={128}
            alt=""
          />
        </Flex>
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
    </Wrapper>
  );
};

export default DepositContent;
