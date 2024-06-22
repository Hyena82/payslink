"use client";

import styled from "styled-components";
import SignIn from "./components/SignIn";
import { useState } from "react";
import StakingMenu from "./components/StakingMenu";
import DashboardContent from "./components/Dashboard";
import { Box, Flex } from "@/components/Box";

const Wrapper = styled.div`
  height: 100%;
  min-height: calc(100vh - 58px);

  .container {
    /* padding-top: 30px; */
    padding-right: unset;
  }

  .content-menu {
    border-left: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    margin-left: 20px;
    min-height: calc(100vh - 58px);
  }

  .blur-box-top {
    background: linear-gradient(278.24deg, #08cdda 39.63%, #1af7a8 108.26%);
    position: fixed;
    z-index: 3;
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
    /* border-left: 1px solid var(--Stroke, rgba(53, 53, 57, 1)); */
  }
`;

const StakingPage = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [valueMenu, setValueMenu] = useState("Dashboard");

  return (
    <>
      {isLogIn ? (
        <Wrapper>
          <Flex className="container h-100 w-100">
            <div className="blur-box-top" />
            <Box pt={4}>
              <StakingMenu value={valueMenu} onChange={setValueMenu} />
            </Box>

            <Flex
              pt={4}
              flexDirection="column"
              justifyContent="space-between"
              className="content-menu h-100 w-100"
            >
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                pr="2.2%"
              >
                <DashboardContent />
              </Flex>
              <Box className="footer-page">
                Payslink © 2024. All Rights Reserved.
              </Box>
            </Flex>
          </Flex>
        </Wrapper>
      ) : (
        <SignIn setIsLogIn={setIsLogIn} />
      )}
    </>
  );
};

export default StakingPage;
