import { useState } from "react";
import styled from "styled-components";
import WalletMenu from "./WalletMenu";
import ListWalletContent from "./ListWalletContent";
import DepositContent from "./DepositContent";
import SwapContent from "./SwapContent";
import ClaimContent from "./ClaimContent";

const Wrapper = styled.div`
  padding-left: 85px;
`;

const WalletContent = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("List Wallet");

  return (
    <Wrapper>
      <WalletMenu active={activeMenuItem} setItem={setActiveMenuItem} />

      {activeMenuItem === "List Wallet" && <ListWalletContent />}

      {activeMenuItem === "Deposit" && <DepositContent />}

      {activeMenuItem === "Swap" && <SwapContent />}

      {activeMenuItem === "Claim Profit" && <ClaimContent />}
    </Wrapper>
  );
};

export default WalletContent;
