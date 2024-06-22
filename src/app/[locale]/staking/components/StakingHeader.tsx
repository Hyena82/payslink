import { Box, Flex } from "@/components/Box";
import Button from "@/components/Button/Button";
import PopupContent from "@/components/PopupContent";
import { Link } from "@/navigation";
import { Avatar, Popover } from "antd";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid rgba(53, 53, 57, 1);
  font-family: Manrope;
  background-color: #000;
  position: relative;
  z-index: 5;

  .header-logo {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 198px;
    width: 100%;
    border-right: 1px solid rgba(53, 53, 57, 1);
  }

  .box-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 33px;
    border-left: 1px solid var(--Neutral-700, rgba(36, 35, 50, 1));

    &:last-child {
      border-right: 1px solid var(--Neutral-700, rgba(36, 35, 50, 1));
    }
  }

  .header-button {
    text-transform: uppercase;
    padding: 8px 30px;
    font-family: Trap;
    font-size: 14px;
    font-weight: 700;
    line-height: 15.4px;
    text-align: center;
    &.last-child {
      background: rgba(255, 255, 255, 1);
    }
  }

  .user-info-button {
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    padding: 10px;
    border-radius: 50px;
    background-color: rgba(23, 20, 35, 1);
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    p {
      margin: 0 8px;
    }
  }

  .amount {
    .amount-box {
      border: 1px solid var(--Neutral-700, rgba(36, 35, 50, 1));
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      text-align: left;
      background-color: rgba(23, 20, 35, 1);
      padding: 12px;
      border-radius: 12px;
      justify-content: space-between;
      align-items: center;

      .line {
        border-right: 1px solid rgba(53, 53, 57, 1);
        height: 16px;
        margin: 0 8px;
      }
    }
  }
`;

const StakingHeader = () => {
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const show = () => {
    setOpen((pre) => !pre);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Wrapper>
      <Flex className="container h-100" justifyContent="space-between">
        <Box className="header-logo">
          <Link href="/" className="center">
            <Image
              className="desk-logo"
              width={146}
              height={26}
              src="/images/logo/header-logo.png"
              alt="Logo"
            />
          </Link>
        </Box>

        <Flex>
          <Box className="amount box-content">
            <Flex className="amount-box">
              <p>217.46M</p>
              <div className="line"></div>
              <Flex>
                <Image
                  src="/images/token/pays.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <Box ml={2}>PAYS</Box>
              </Flex>
            </Flex>
            <Flex className="amount-box" ml={3}>
              <p>217.46M</p>
              <div className="line"></div>
              <Flex>
                <Image
                  src="/images/token/usdt.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <Box ml={2}>USDT</Box>
              </Flex>
            </Flex>
          </Box>

          <Box className="box-content">
            <Button className="header-button">Deposit</Button>
            <Box ml={3}>
              <Button className="header-button last-child">Claim profit</Button>
            </Box>
          </Box>

          <Box className="box-content">
            <Popover
              content={<PopupContent onClose={hide} />}
              open={open}
              trigger="click"
              onOpenChange={handleOpenChange}
            >
              <Box className="user-info-button hover">
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

                <p>Payslink user</p>
                <Image
                  src="/images/icons/right-arrow.svg"
                  width={10}
                  height={11}
                  alt=""
                />
              </Box>
            </Popover>
          </Box>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default StakingHeader;
