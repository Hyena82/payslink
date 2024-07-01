import React, { useEffect, useState } from "react";
import { Avatar, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  margin-top: 43px;
  @media (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
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
`;

interface DataType {
  key: string;
  no: number;
  pool: string;
  token: string;
  date: string;
  network: string;
  status: string;
}

const DepositContent = () => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      key: "no",
      dataIndex: "no",
    },
    {
      title: "Pool",
      key: "pool",
      dataIndex: "pool",
    },
    {
      title: "Token",
      key: "token",
      dataIndex: "token",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
    },
    {
      title: "Network",
      key: "network",
      dataIndex: "network",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
  ];

  const data: DataType[] = [];

  const [tableData, setTableData] = useState<DataType[]>([]);

  useEffect(() => {
    // Fetch or update your data here
    const newData = [...data]; // Your data fetching logic
    setTableData(newData);
  }, []);
  return (
    <Wrapper>
      <Table
        className="member-table"
        columns={columns}
        dataSource={[]}
        locale={{
          emptyText: "There is no record",
        }}
      />
    </Wrapper>
  );
};

export default DepositContent;
