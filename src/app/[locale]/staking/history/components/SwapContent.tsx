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
`;

interface DataType {
  key: string;
  no: number;
  from: { name: string; avatar: string };
  to: { name: string; avatar: string };
  date: string;
  amount: string;
  status: string;
}

const SwapContent = () => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      key: "no",
      dataIndex: "no",
    },
    {
      title: "From",
      key: "from",
      dataIndex: "from",
      render: (fromUser) => (
        <Space>
          <Avatar
            size={25}
            icon={<Image src={fromUser.avatar} width={25} height={25} alt="" />}
          />
          <span>{fromUser.name}</span>
        </Space>
      ),
    },
    {
      title: "To",
      key: "to",
      dataIndex: "to",
      render: (toUser) => (
        <Space>
          <Avatar
            size={25}
            icon={<Image src={toUser.avatar} width={25} height={25} alt="" />}
          />
          <span>{toUser.name}</span>
        </Space>
      ),
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
    },
    {
      title: "Amount",
      key: "amount",
      dataIndex: "amount",
      render: (amount) => <span className="amount-text">{amount}</span>,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => (
        <div className="status-box">
          <p className="status">{status}</p>
        </div>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      no: 1,
      from: { name: "John Brown", avatar: "/images/staking/avatar.png" },
      to: { name: "Jim Green", avatar: "/images/staking/avatar.png" },
      date: "2021-09-01",
      amount: "1000",
      status: "Success",
    },
    {
      key: "2",
      no: 2,
      from: { name: "Jim Green", avatar: "/images/staking/avatar.png" },
      to: { name: "John Brown", avatar: "/images/staking/avatar.png" },
      date: "2021-09-01",
      amount: "1000",
      status: "Success",
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
        dataSource={tableData}
        locale={{
          emptyText: "There is no record",
        }}
      />
    </Wrapper>
  );
};

export default SwapContent;
