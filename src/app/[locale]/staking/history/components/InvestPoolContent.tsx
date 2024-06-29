import React, { useEffect, useState } from "react";
import { Avatar, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  margin-top: 43px;
  .member-table {
    border: 1px solid rgba(36, 35, 50, 1);
    border-radius: 16px;
    overflow: hidden;
  }
`;

interface DataType {
  key: string;
  no: number;
  pool: string;
  price: string;
  date: string;
  active: string;
}

const InvestPoolContent = () => {
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
      title: "Price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
    },
    {
      title: "Active",
      key: "active",
      dataIndex: "active",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      no: 1,
      pool: "John Brown",
      price: "1",
      date: "2021-09-01",
      active: "Active",
    },
    {
      key: "2",
      no: 2,
      pool: "Jim Green",
      price: "1",
      date: "2021-09-01",
      active: "Active",
    },
  ];

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

export default InvestPoolContent;
