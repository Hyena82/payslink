"use client";
import styled from "styled-components";
import StakingHeader from "./components/StakingHeader";

const Wrapper = styled.div`
  background-color: #000;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;

const StakingLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <Wrapper>
      <StakingHeader />
      {children}
    </Wrapper>
  );
};

export default StakingLayout;
