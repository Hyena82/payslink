"use client";
import styled from "styled-components";
import { Box } from "@/components/Box";
import HistoryTable from "../components/Table/HistoryTable";

const Wrapper = styled.div``;

const TransferHistoryContent = () => {
  return (
    <Wrapper>
      <Box mt={4} className="">
        <HistoryTable />
      </Box>
    </Wrapper>
  );
};

export default TransferHistoryContent;
