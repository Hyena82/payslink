import { Box, Flex } from "@/components/Box";
import Button from "@/components/Button/Button";
import PopupContent from "@/components/PopupContent";
import { Link } from "@/navigation";
import { Avatar, Drawer, Popover } from "antd";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid rgba(53, 53, 57, 1);
  font-family: Manrope;
  background-color: #000;
  position: relative;
  z-index: 5;

  .container {
    @media (max-width: 768px) {
      justify-content: space-between;
      align-items: center;
    }
    position: relative;
  }

  .desk-logo {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .header-logo {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 198px;
    width: 100%;
    border-right: 1px solid rgba(53, 53, 57, 1);
    @media (max-width: 768px) {
      display: none;
    }
  }

  .box-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 33px;
    border-left: 1px solid var(--Neutral-700, rgba(36, 35, 50, 1));
    @media (max-width: 768px) {
      display: none;
    }
    &:last-child {
      border-right: 1px solid var(--Neutral-700, rgba(36, 35, 50, 1));
      display: flex;
      @media (max-width: 768px) {
        padding: 0;
        border: none;
      }
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

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 22px;
      padding: 5px;
    }
    p {
      margin: 0 8px;
      @media (max-width: 768px) {
        display: none;
      }
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

  .menu-icon {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const DrawerModile = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 35px 24px;

  .close-image {
    margin-left: auto;
  }

  .item-link {
    display: flex;
    align-items: center;
    padding: 16px;
    border-radius: 26px;
    cursor: pointer;
    margin-left: 10px;
    color: rgba(122, 122, 122, 1);

    &.active {
      color: rgba(35, 226, 221, 1);
      background-color: rgba(0, 0, 0, 1);
      border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    }
  }
`;

const StakingHeader = () => {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const hide = () => {
    setOpen(false);
  };

  const show = () => {
    setOpen((pre) => !pre);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const dataMenu = [
    {
      title: "Dashboard",
      url: "/staking/dashboard",
      nameIcon: "dashboard",
    },
    {
      title: "Wallet",
      url: "/staking/wallet",
      nameIcon: "wallet",
    },
    {
      title: "Investment Pool",
      url: "/staking/investment-pool",
      nameIcon: "investment",
    },
    {
      title: "Member Team",
      url: "/staking/member",
      nameIcon: "team",
    },
    {
      title: "History",
      url: "/staking/history",
      nameIcon: "history",
    },
    {
      title: "Profile",
      url: "/staking/profile",
      nameIcon: "profile",
    },
  ];
  const pathname = usePathname();

  return (
    <Wrapper>
      <Drawer
        width="300px"
        zIndex={1000}
        title=" Drawer"
        onClose={onCloseDrawer}
        open={openDrawer}
        placement="left"
        headerStyle={{ display: "none" }}
        bodyStyle={{ padding: 0 }}
      >
        <DrawerModile>
          <Flex flexDirection="column" className="draw-mobile">
            <Box className="close-image" onClick={onCloseDrawer} mb={3}>
              <Image
                src="/images/icons/timeX.svg"
                width={20}
                height={20}
                alt=""
              />
            </Box>
            {dataMenu.map((item, index) => (
              <Link
                onClick={onCloseDrawer}
                className={`${
                  pathname.startsWith(item.url) && "active"
                } item-link`}
                key={index}
                href={item.url}
              >
                <Image
                  src={`/images/staking/menu/${
                    pathname.startsWith(item.url) ? "active-" : ""
                  }${item.nameIcon}.svg`}
                  width={30}
                  height={30}
                  alt=""
                />
                <Box ml={2} className="">
                  {item.title}
                </Box>
              </Link>
            ))}
          </Flex>
        </DrawerModile>
      </Drawer>

      <Flex className="container h-100" justifyContent="space-between">
        <Box
          className={`${isMobile && "active"} menu-icon`}
          onClick={showDrawer}
        >
          <Image src="/images/icons/menu.svg" alt="" width={25} height={25} />
        </Box>

        <Box className="header-logo">
          <Link href="/" className="center">
            <Image
              width={146}
              height={26}
              src="/images/logo/header-logo.png"
              alt="Logo"
            />
          </Link>
        </Box>

        <Link href="/" className="center desk-logo">
          <Image
            width={146}
            height={26}
            src="/images/logo/header-logo.png"
            alt="Logo"
          />
        </Link>

        <Flex>
          <Box className="amount box-content">
            <Flex className="amount-box">
              <p>217.46M</p>
              <div className="line"></div>
              <Flex>
                <Image
                  src="/images/token/pays.png"
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
            <Link href="/staking/wallet/deposit">
              <Button className="header-button">Deposit</Button>
            </Link>
            <Box ml={3}>
              <Link href="/staking/wallet/claim-profit">
                <Button className="header-button last-child">
                  Claim profit
                </Button>
              </Link>
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
