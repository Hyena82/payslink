import styled from "styled-components";
import { Box, Flex } from "../Box";
import Image from "next/image";
import LanguageSelector from "../LanguageSelector";
import Link from "next/link";
import { useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { socialList } from "../Footer";

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 35px 24px;

  .center-menu {
    display: flex;

    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    height: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;
    left: unset;

    .menu-item {
      padding: 15px 20px;
      border-bottom: 2px solid transparent;

      &.active {
        border-bottom: 2px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(90deg, #0093fe 0%, #50ffd5 100%);
      }
    }

    a {
      font-family: Metrophobic;
      font-size: 16px;
      font-weight: 400;
      line-height: 19.73px;
      text-align: left;
      color: #fff;
    }
  }

  .socials {
    font-family: Metrophobic;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: center;
  }
`;

const MobileMenu = ({ onClose }: any) => {
  const [selectedItem, setSelectedItem] = useState("Home");

  return (
    <Wrapper>
      <Flex flexDirection="column" justifyContent="center" alignItems="cneter">
        <Box className="close-image" onClick={onClose}>
          <Image src="/images/icons/timeX.svg" width={20} height={20} alt="" />
        </Box>
        <Flex justifyContent="center" mt={3}>
          <Image
            src="/images/logo/header-logo.png"
            width={145}
            height={24}
            alt=""
            quality={100}
          />
        </Flex>
        <Flex mt={3} justifyContent="center" className="LanguageSelector">
          <LanguageSelector />
        </Flex>

        <Box className="" mt={4}>
          <Flex className="center-menu">
            <Link
              className={`${selectedItem === "Home" && "active"} menu-item`}
              onClick={() => setSelectedItem("Home")}
              href="#home"
            >
              Home
            </Link>
            <Link
              className={`${
                selectedItem === "Whitepaper" && "active"
              } menu-item `}
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
              className={`${
                selectedItem === "Contact us" && "active"
              } menu-item`}
              onClick={() => setSelectedItem("Contact us")}
              href="#contact-us"
            >
              Contact us
            </Link>

            <Box className="line-slider" />
          </Flex>
        </Box>

        <Flex flexDirection="column" mt={4} alignItems="center">
          <PrimaryButton
            icon="/images/icons/black-staking.svg"
            activeIcon="/images/icons/white-staking.svg"
          >
            Staking
          </PrimaryButton>

          <Box my={3}>
            <PrimaryButton
              icon="/images/icons/black-wallet.svg"
              activeIcon="/images/icons/white-wallet.svg"
            >
              Connect wallet
            </PrimaryButton>
          </Box>

          <PrimaryButton
            icon="/images/icons/black-down.svg"
            activeIcon="/images/icons/white-down.svg"
          >
            Download app
          </PrimaryButton>
        </Flex>

        <Box className="socials" mt={4} mb={3}>
          Official social media
        </Box>
        <Flex justifyContent="space-between" className="">
          {socialList.map((item, index) => (
            <a href={item.link} key={index} className="social-item">
              {item.icon}
            </a>
          ))}
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default MobileMenu;
