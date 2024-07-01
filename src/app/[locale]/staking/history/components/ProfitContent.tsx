import React, { useEffect, useState } from "react";
import { Avatar, Col, Row, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import styled from "styled-components";
import Image from "next/image";
import { Box } from "@/components/Box";

const Wrapper = styled.div`
  margin-top: 43px;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  .box-table {
    @media (max-width: 768px) {
      width: 100%;
      overflow-x: auto;
    }
  }

  .member-table {
    border: 1px solid rgba(36, 35, 50, 1);
    border-radius: 16px;
    overflow: hidden;

    @media (max-width: 768px) {
      width: 600px;
      overflow: unset;
      border-radius: unset;
      max-width: unset;
    }
  }

  .amount-text {
    color: rgba(35, 226, 221, 1);
  }

  .status-box {
    background-color: rgba(45, 44, 59, 1);
    padding: 6px 10px;
    width: fit-content;
    border-radius: 6px;
    .status {
      background: linear-gradient(90deg, #0093fe 0%, #50ffd5 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      -webkit-text-fill-color: transparent;
      font-family: Manrope;
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      text-align: left;
    }
  }

  .type-box {
    font-family: Manrope;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    border-radius: 16px;
    text-align: left;
    padding: 22px 20px;
    color: rgba(255, 255, 255, 1);
    border: 1px solid var(--Stroke, rgba(53, 53, 57, 1));
    background-color: rgba(10, 9, 16, 1);
    cursor: pointer;
    &.active {
      color: rgba(35, 226, 221, 1);
      border: 1px solid var(--Color-2, rgba(35, 226, 183, 1));
    }
  }
`;

interface DataType {
  key: string;
  no: number;
  amount: string;
  interest: string;
  created: string;
  updated: string;
}

const ProfitContent = () => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      key: "no",
      dataIndex: "no",
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "amount",
    },
    {
      title: "Interest At",
      key: "interest",
      dataIndex: "interest",
    },
    {
      title: "Created At",
      key: "created",
      dataIndex: "created",
    },
    {
      title: "Updated At",
      key: "updated",
      dataIndex: "updated",
    },
  ];

  const data: DataType[] = [];

  const [tableData, setTableData] = useState<DataType[]>([]);
  const [value, setValue] = useState(1);

  const items = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    // Fetch or update your data here
    const newData = [...data]; // Your data fetching logic
    setTableData(newData);
  }, []);

  return (
    <Wrapper>
      <Box className="" mb={4}>
        <Row
          gutter={[
            { sm: 20, xs: 10 },
            { sm: 20, xs: 10 },
          ]}
        >
          {items.map((item, index) => (
            <Col sm={6} key={index} xs={12}>
              <Box
                className={`${value === item && "active"} type-box hover`}
                onClick={() => setValue(item)}
              >
                Investment Pool {item}
              </Box>
            </Col>
          ))}
        </Row>
      </Box>

      <Box className="box-table">
        <Table
          className="member-table"
          columns={columns}
          dataSource={tableData}
          locale={{
            emptyText: "There is no record",
          }}
        />
      </Box>
    </Wrapper>
  );
};

export default ProfitContent;
