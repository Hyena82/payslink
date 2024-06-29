import React from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import styled from "styled-components";

interface DataType {
  key: string;
  no: number;
  userName: string;
  date: string;
  volume: string;
  level: string;
  active: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "User Name",
    dataIndex: "userName",
    key: "userName",
  },
  {
    title: "Date",
    key: "date",
    dataIndex: "date",
  },
  {
    title: "Level",
    key: "level",
    dataIndex: "level",
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
    userName: "John Brown",
    volume: "1",
    date: "2021-09-01",
    level: "1",
    active: "Active",
  },
  {
    key: "2",
    no: 2,
    userName: "Jim Green",
    volume: "1",
    date: "2021-09-01",
    level: "1",
    active: "Active",
  },
  {
    key: "3",
    no: 3,
    userName: "Joe Black",
    volume: "1",
    date: "2021-09-01",
    level: "1",
    active: "Active",
  },
  {
    key: "4",
    no: 4,
    userName: "Jim Red",
    volume: "1",
    date: "2021-09-01",
    level: "1",
    active: "Active",
  },
];

const Wrapper = styled.div`
  .member-table {
    border: 1px solid rgba(36, 35, 50, 1);
    border-radius: 16px;
    overflow: hidden;
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

const MemberTable = () => {
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

export default MemberTable;
