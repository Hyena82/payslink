import { useState } from "react";
import styled from "styled-components";
import HistoryMenu from "./HistoryMenu";
import InvestPoolContent from "./InvestPoolContent";
import DepositContent from "./DepositContent";
import SwapContent from "./SwapContent";
import WithdrawContent from "./WithdrawContent";
import ProfitContent from "./ProfitContent";

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
