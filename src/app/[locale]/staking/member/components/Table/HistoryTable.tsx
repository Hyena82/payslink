import React, { useEffect, useState } from "react";
import { Avatar, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  .member-table {
    border: 1px solid rgba(36, 35, 50, 1);
    border-radius: 16px;
    overflow: hidden;
  }

  .amount-text {
    color: rgba(35, 226, 221, 1);
  }

  .ant-table-row > .ant-table-cell-row-hover {
    background: unset !important;
    cursor: pointer;
  }

  .ant-table-thead .ant-table-cell {
    background-color: rgba(10, 9, 16, 1);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-align: left;
    color: rgba(101, 99, 111, 1);

    &::before {
      display: none;
    }
  }

  .ant-table-tbody {
    background-color: rgba(10, 9, 16, 1);
    color: rgba(240, 240, 240, 1);
    font-family: Manrope;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-align: left;
  }

  .ant-table-cell {
    padding: 20px 16px !important;
    border-bottom: 1px solid rgba(36, 35, 50, 1) !important;
  }

  .ant-table-wrapper .ant-table-pagination.ant-pagination {
    margin: 0;
    padding: 16px 0;
  }

  .ant-table-pagination.ant-pagination,
  .ant-table-placeholder {
    background: rgba(10, 9, 16, 1) !important;
  }

  .ant-table-placeholder .ant-table-cell {
    height: 176px;
    text-align: center;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    color: rgba(122, 122, 122, 1);
    background: rgba(10, 9, 16, 1) !important;
  }

  .ant-pagination .ant-pagination-item-active {
    background-color: rgba(45, 44, 59, 1);
    border: none;
    width: 32px;
    height: 32px;
    a {
      color: rgba(222, 222, 222, 1);
    }
  }

  .ant-pagination-item-link {
    svg {
      fill: #fff;
    }
  }
`;

interface DataType {
  key: string;
  no: number;
  fromUser: { name: string; avatar: string };
  to: { name: string; avatar: string };
  date: string;
  amount: string;
}

const HistoryTable = () => {
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "From User",
      dataIndex: "fromUser",
      key: "fromUser",
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
      align: "right" as "right",
      render: (amount) => <span className="amount-text">{amount}</span>,
    },
  ];

  const data: DataType[] = [
    {
      key: "1224",
      no: 1,
      fromUser: {
        name: "John Brown",
        avatar: "/images/staking/avatar.png",
      },
      to: {
        name: "Jim Green",
        avatar: "/images/staking/avatar.png",
      },
      date: "2021-09-01",
      amount: "00000000000",
    },

    {
      key: "235235",
      no: 2,
      fromUser: {
        name: "John Brown",
        avatar: "/images/staking/avatar.png",
      },
      to: {
        name: "Jim Green",
        avatar: "/images/staking/avatar.png",
      },
      date: "2021-09-01",
      amount: "00000000000",
    },

    {
      key: "32623",
      no: 3,
      fromUser: {
        name: "John Brown",
        avatar: "/images/staking/avatar.png",
      },
      to: {
        name: "Jim Green",
        avatar: "/images/staking/avatar.png",
      },
      date: "2021-09-01",
      amount: "00000000000",
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
        dataSource={[...tableData]}
        locale={{
          emptyText: "There is no record",
        }}
      />
    </Wrapper>
  );
};

export default HistoryTable;
