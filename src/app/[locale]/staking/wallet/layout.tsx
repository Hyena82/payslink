"use client";

import styled from "styled-components";
import WalletMenu from "../components/Wallet/WalletMenu";

const Wrapper = styled.div`
  padding-left: 85px;
`;
interface WalletLayoutProps {
  children: React.ReactNode;
}

const WalletLayout: React.FC<WalletLayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <WalletMenu />
      {children}
    </Wrapper>
  );
};

export default WalletLayout;
