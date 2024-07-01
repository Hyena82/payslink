"use client";
import styled from "styled-components";
import StakingHeader from "./components/StakingHeader";
import { useState } from "react";
import { Box, Flex } from "@/components/Box";
import StakingMenu from "./components/StakingMenu";
import SignIn from "./components/SignIn";
import { isMobile } from "react-device-detect";

const Wrapper = styled.div`
  background-color: #000;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

const WrapperContainer = styled.div`
  height: 100%;
  min-height: calc(100vh - 58px);

  .container {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    /* padding-top: 30px; */
    padding-right: unset;

    @media (max-width: 768px) {
      padding: 0;
    }
  }

  .content-menu {
    border-left: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    margin-left: 20px;
    min-height: calc(100vh - 58px);
    position: relative;
    z-index: 2;
    flex: 1;
    background: url(/images/staking/footer-bg.png) no-repeat fixed;
    background-position-x: 65%;
    background-position-y: bottom;

    & > div:first-child {
      padding-right: 2.2%;
      @media (max-width: 768px) {
        padding: 0 2.2%;
      }
    }

    @media (max-width: 768px) {
      margin-left: 0;
      border: none;
    }
  }

  .blur-box-top {
    background: linear-gradient(278.24deg, #08cdda 39.63%, #1af7a8 108.26%);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 350px;
    border-radius: 50%;
    filter: blur(230px);
  }

  .footer-page {
    margin-top: 1rem;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: rgba(122, 122, 122, 1);
    padding: 13px 0;
    border-top: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
  }
`;

const StakingLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <Wrapper>
      <StakingHeader />
      <>
        {isLogIn ? (
          <WrapperContainer>
            <Flex className="container h-100 w-100">
              <div className="blur-box-top" />
              {!isMobile && (
                <Box pt={4}>
                  <StakingMenu />
                </Box>
              )}

              <Flex
                pt={4}
                flexDirection="column"
                justifyContent="space-between"
                className="content-menu w-100"
              >
                <Flex flexDirection="column" justifyContent="space-between">
                  {children}
                </Flex>
                <Box className="footer-page">
                  Payslink © 2024. All Rights Reserved.
                </Box>
              </Flex>
            </Flex>
          </WrapperContainer>
        ) : (
          <SignIn setIsLogIn={setIsLogIn} />
        )}
      </>
    </Wrapper>
  );
};

export default StakingLayout;
