"use client";

import styled from "styled-components";
import MemberMenu from "../components/MemberMenu";
import TotalCard from "../components/TotalCard";
import { Col, Row } from "antd";
import { Box } from "@/components/Box";
import MemberTable from "../components/Table/MemberTable";

const Wrapper = styled.div``;

const MemberReferalContent = () => {
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
      <Box mt={4} mb={2}>
        <Row gutter={[20, 20]}>
          {data.map((item, index) => (
            <Col span={6} key={index}>
              <TotalCard name={item.name} value={item.value} />
            </Col>
          ))}
        </Row>
      </Box>

      <Box mt={20} className="table-container">
        <MemberTable />
      </Box>
    </Wrapper>
  );
};

export default MemberReferalContent;
