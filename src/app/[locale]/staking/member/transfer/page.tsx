"use client";

import { Box, Flex } from "@/components/Box";
import FuncButton from "@/components/Button/FuncButton";
import PrimaryButton from "@/components/Button/PrimaryButton";
import SubmitButton from "@/components/Button/SubmitButton";
import { GrayInput } from "@/components/Input";
import TokenBox from "@/components/TokenBox";
import Lenis from "lenis";

import { Avatar, Modal, Select } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
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
const ContentBox = styled.div`
  background-color: rgba(10, 9, 16, 1);
  padding: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid red;
  width: 469px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 1);

  .scrollable-content {
    max-height: 10vh; // Adjust this value as needed
    overflow-y: auto;
    width: 100%;
    padding-right: 10px; // Add some padding to account for scrollbar
  }

  .title-modal {
    font-family: Trap;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
  }

  .input-modal {
    background-color: rgba(0, 0, 0, 1);
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    padding: 16px;
    border-radius: 30px;
    color: rgba(255, 255, 255, 1);
    outline: none;
    transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:focus {
      border-color: #40a9ff; /* Ant Design's focus border color */
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2); /* Ant Design's focus shadow */
    }
  }

  .custom-button-modal {
    position: absolute;
    right: 4px;
    height: 80%;
    width: 107px;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 20px;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover img {
      filter: brightness(100);
    }
  }

  .box-data {
    background-color: rgba(0, 0, 0, 1);
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    padding: 16px;
    border-radius: 20px;
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    height: 270px;
    overflow-y: auto;
  }

  .add-button-modal {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
  }
`;

const TransferContent = () => {
  const [open, setOpen] = useState(false);
  const [tokenValue, setTokenValue] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [selectedValue, setSelectedValue] = useState({
    key: "usdt",
    label: <TokenBox name="usdt" />,
  });

  const [modalLenis, setModalLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (open) {
      const modalScrollContainer = document.querySelector(
        ".box-data"
      ) as HTMLElement;
      if (modalScrollContainer) {
        const newModalLenis = new Lenis({
          wrapper: modalScrollContainer,
          content: modalScrollContainer,
          smoothWheel: true,
        });
        setModalLenis(newModalLenis);

        const raf = (time: number) => {
          newModalLenis.raf(time);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      }

      return () => {
        if (modalLenis) {
          modalLenis.destroy();
        }
      };
    }
  }, [open]);

  return (
    <Wrapper className="center">
      <Modal
        open={open}
        centered
        onCancel={handleClose}
        footer={false}
        width={557}
        closeIcon={false}
      >
        <ContentBox>
          <p className="title-modal">Contact</p>
          <Box className="relative w-100" my={3}>
            <input type="text" className="input-modal w-100" />

            <SubmitButton className="custom-button-modal">
              <Box mr={2} className="center">
                <Image
                  src="/images/icons/black-search.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </Box>
              Search
            </SubmitButton>
          </Box>

          <Box className="box-data w-100 hidden-scroll">
            <Flex mb={3}>
              <Avatar
                size={25}
                icon={
                  <Image
                    src="/images/staking/avatar.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                }
              />

              <Box ml={2}>Payslink user</Box>
            </Flex>

            <Flex mb={3}>
              <Avatar
                size={25}
                icon={
                  <Image
                    src="/images/staking/avatar.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                }
              />

              <Box ml={2}>Payslink user</Box>
            </Flex>

            <Flex mb={3}>
              <Avatar
                size={25}
                icon={
                  <Image
                    src="/images/staking/avatar.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                }
              />

              <Box ml={2}>Payslink user</Box>
            </Flex>

            <Flex mb={3}>
              <Avatar
                size={25}
                icon={
                  <Image
                    src="/images/staking/avatar.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                }
              />

              <Box ml={2}>Payslink user</Box>
            </Flex>

            <Flex mb={3}>
              <Avatar
                size={25}
                icon={
                  <Image
                    src="/images/staking/avatar.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                }
              />

              <Box ml={2}>Payslink user</Box>
            </Flex>

            <Flex mb={3}>
              <Avatar
                size={25}
                icon={
                  <Image
                    src="/images/staking/avatar.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                }
              />

              <Box ml={2}>Payslink user</Box>
            </Flex>

            <Flex mb={3}>
              <Avatar
                size={25}
                icon={
                  <Image
                    src="/images/staking/avatar.png"
                    width={25}
                    height={25}
                    alt=""
                  />
                }
              />

              <Box ml={2}>Payslink user</Box>
            </Flex>
          </Box>
          <Flex alignItems="center" className="center w-100" mt={3}>
            <Flex
              className="center w-100"
              height={54}
              onClick={handleClose}
              mr={3}
            >
              <FuncButton
                width="100%"
                className="hover size-s h-100"
                color="#fff"
              >
                <Flex
                  className="center w-100  h-100"
                  height={54}
                  onClick={handleClose}
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
            </Flex>

            <Box className="w-100">
              <SubmitButton className="add-button-modal">
                Add Contact
              </SubmitButton>
            </Box>
          </Flex>
        </ContentBox>
      </Modal>

      <Image
        src="/images/staking/member/transfer.svg"
        width={104}
        height={104}
        alt=""
      />

      <p className="title-box">Transfer USDT</p>

      <p className="desc-box">Trade Instantly & Pool Tokens to Earn Rewards</p>

      <Box className="w-100" mb={4}>
        <p className="lable">Select token</p>

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
        <p className="lable">Receiver</p>

        <Flex justifyContent="space-between" className="input-text w-100">
          <div></div>
          <Image
            className="hover"
            onClick={handleOpen}
            src="/images/staking/member/person.svg"
            alt=""
            width={30}
            height={30}
          />
        </Flex>
      </Box>

      <Box className="w-100" mb={4}>
        <p className="lable">Amount</p>

        <GrayInput
          value={tokenValue}
          setValue={setTokenValue}
          placeholder="0"
        />
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
            Claim now
          </Box>
        </SubmitButton>
      </Box>
    </Wrapper>
  );
};

export default TransferContent;
