import styled from "styled-components";
import { Box, Flex } from "../Box";
import Link from "next/link";
import Image from "next/image";
import { isMobile } from "react-device-detect";

import Button from "../Button/Button";
import LanguageSelector from "../LanguageSelector";
import { useState } from "react";
import { Drawer } from "antd";
import Content from "./MobileMenu";
import MobileMenu from "./MobileMenu";

const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgba(53, 53, 57, 1);
  background: #000;
  color: #fff;
  height: 58px;
  margin-left: 0;
  margin-right: 0;
  padding-left: 2.2%;
  padding-right: 2.2%;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }

  .LanguageSelector {
    display: flex;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .header-logo {
    padding-top: 5px;
    width: 7%;
    @media (max-width: 768px) {
      width: 50%;
    }

    .mobile-logo {
      display: none;
      width: 52px;
      border-right: 1px solid rgba(53, 53, 57, 1);
      height: 52px;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        display: flex;
      }
    }

    .desk-logo {
      display: block;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .button-header {
    @media (max-width: 768px) {
      width: 50%;
    }
  }

  .header-menu {
    display: none;
    margin-right: 20px;
    margin-left: 10px;
    @media (max-width: 768px) {
      display: block;
    }
  }

  .center-menu {
    display: flex;

    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 100%;
    /* border: 1px solid rgba(53, 53, 57, 1); */
    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;
    left: unset;

    @media (max-width: 768px) {
      display: none;
    }

    .menu-item {
      width: calc(100% / 5);
      padding: 16px 0;
      text-align: center;

      &:first-child.acitve ~ .line-slider {
        transform: translateX(0);
      }

      &:nth-child(2).active ~ .line-slider {
        transform: translateX(100%);
      }

      &:nth-child(3).active ~ .line-slider {
        transform: translateX(200%);
      }

      &:nth-child(4).active ~ .line-slider {
        transform: translateX(300%);
      }

      &:nth-child(5).active ~ .line-slider {
        transform: translateX(400%);
      }
    }

    .line-slider {
      position: absolute;
      bottom: 0;
      left: 0;
      width: calc(100% / 5);

      height: 2px;
      background: linear-gradient(90deg, #0093fe 0%, #50ffd5 100%);
      transform-origin: 0 0;
      transition: transform 0.25s;
    }
  }

  .right-side-button {
    width: 65%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 100%;
    }

    & > div {
      text-align: center;
      @media (max-width: 768px) {
        width: fit-content;
      }
      width: 100%;
    }
  }
`;

const Header = () => {
  const [selectedItem, setSelectedItem] = useState("home");
  console.log("~~", isMobile);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <Drawer
        width="70%"
        zIndex={1000}
        title=" Drawer"
        onClose={onClose}
        open={open}
        headerStyle={{ display: "none" }}
        bodyStyle={{ padding: 0 }}
      >
        <MobileMenu onClose={onClose} />
      </Drawer>

      <div className="layout-line layout-line-left" />
      <div className="layout-line layout-line-right" />
      <Box className="header-logo">
        <Link href="/">
          <Box className="mobile-logo">
            <Image
              width={26}
              height={26}
              src="/images/logo/loading-logo.png"
              alt="Logo"
            />
          </Box>

          <Image
            className="desk-logo"
            width={146}
            height={26}
            src="/images/logo/header-logo.png"
            alt="Logo"
          />
        </Link>
      </Box>

      <Flex
        className="center-menu container-middle"
        justifyContent="space-around"
      >
        <Link
          className={`${selectedItem === "Home" && "active"} menu-item`}
          onClick={() => setSelectedItem("/home")}
          href="#home"
        >
          Home
        </Link>
        <Link
          className={`${selectedItem === "Whitepaper" && "active"} menu-item`}
          onClick={() => setSelectedItem("Whitepaper")}
          href="#Whitepaper"
        >
          Whitepaper
        </Link>
        <Link
          className={`${selectedItem === "Trade" && "active"} menu-item`}
          onClick={() => setSelectedItem("Trade")}
          href="#trade"
        >
          Trade
        </Link>
        <Link
          className={`${selectedItem === "Roadmap" && "active"} menu-item`}
          onClick={() => setSelectedItem("Roadmap")}
          href="#roadmap"
        >
          Roadmap
        </Link>
        <Link
          className={`${selectedItem === "Contact us" && "active"} menu-item`}
          onClick={() => setSelectedItem("Contact us")}
          href="#contact-us"
        >
          Contact us
        </Link>

        <Box className="line-slider" />
      </Flex>

      <Flex
        className="button-header"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Box className="right-side-button">
          <Button>Go to dashboard</Button>
        </Box>

        <Box className="header-menu" onClick={showDrawer}>
          <Image src="/images/icons/menu.svg" width={23} height={23} alt="" />
        </Box>

        <Box className="LanguageSelector" ml={3}>
          <LanguageSelector />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Header;
