"use client";
import { useState } from "react";
import styled from "styled-components";
import WalletMenu from "./components/WalletMenu";
import ListWalletContent from "./list-wallet/page";
import DepositContent from "./components/DepositContent";
import SwapContent from "./swap/page";
import ClaimContent from "./claim-profit/page";
import { redirect } from "next/navigation";

const Wrapper = styled.div`
  padding-left: 85px;
`;

const WalletPage = () => {
  redirect("/staking/wallet/list-wallet");
};

export default WalletPage;
