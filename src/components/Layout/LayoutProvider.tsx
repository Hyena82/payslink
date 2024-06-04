"use client";
import styled from "styled-components";
import LoadingPage from "../../app/[locale]/home/components/LoadingPage";

const Wrapper = styled.div``;

const LayoutProvider = () => {
  return (
    <Wrapper>
      <LoadingPage />
    </Wrapper>
  );
};

export default LayoutProvider;
