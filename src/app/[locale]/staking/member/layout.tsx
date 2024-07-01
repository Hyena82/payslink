"use client";

import styled from "styled-components";
import MemberMenu from "./components/MemberMenu";

const Wrapper = styled.div`
  padding-left: 85px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
interface MemberLayoutProps {
  children: React.ReactNode;
}

const MemberLayout: React.FC<MemberLayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <MemberMenu />
      {children}
    </Wrapper>
  );
};

export default MemberLayout;
