"use client";
import { useState } from "react";
import styled from "styled-components";
import HistoryMenu from "./components/HistoryMenu";
import DepositContent from "./components/DepositContent";
import SwapContent from "./components/SwapContent";
import WithdrawContent from "./components/WithdrawContent";
import ProfitContent from "./components/ProfitContent";
import InvestPoolContent from "./components/InvestPoolContent";

const Wrapper = styled.div`
  padding-left: 85px;
`;

const History = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Investment pool");

  return (
    <Wrapper>
      <HistoryMenu active={activeMenuItem} setItem={setActiveMenuItem} />
      {activeMenuItem === "Investment pool" && <InvestPoolContent />}
      {activeMenuItem === "Deposit" && <DepositContent />}
      {activeMenuItem === "Withdraw" && <WithdrawContent />}
      {activeMenuItem === "Swap" && <SwapContent />}
      {activeMenuItem === "Profit" && <ProfitContent />}
    </Wrapper>
  );
};

export default History;
