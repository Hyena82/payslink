import { useState } from "react";
import styled from "styled-components";
import MemberMenu from "./MemberMenu";
import TotalCard from "./TotalCard";
import { Col, Row } from "antd";
import { Box } from "@/components/Box";
import MemberTable from "./Table/MemberTable";
import MemberReferalContent from "./MemberReferalContent";
import MemberTreeContent from "./MemberTreeContent";
import TransferContent from "./TransferContent";
import TransferHistoryContent from "./TransferHistoryContent";

const Wrapper = styled.div`
  padding: 20px;
`;

const MemberContent = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Member Referral");

  const data = [
    {
      name: "",
      value: "00",
    },
    {
      name: "F1",
      value: "00",
    },
    {
      name: "F2",
      value: "00",
    },
    {
      name: "F3",
      value: "00",
    },
  ];

  return (
    <Wrapper>
      <MemberMenu active={activeMenuItem} setItem={setActiveMenuItem} />

      {activeMenuItem === "Member Referral" && <MemberReferalContent />}
      {activeMenuItem === "Member Tree" && <MemberTreeContent />}
      {activeMenuItem === "Transfer" && <TransferContent />}
      {activeMenuItem === "Transfer History" && <TransferHistoryContent />}
    </Wrapper>
  );
};

export default MemberContent;
