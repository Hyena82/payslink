"use client";

import styled from "styled-components";
import MemberMenu from "./components/MemberMenu";

const Wrapper = styled.div`
  padding-left: 85px;
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
