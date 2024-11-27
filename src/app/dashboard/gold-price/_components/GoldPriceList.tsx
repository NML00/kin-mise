"use client";
import { Table, TableProps } from "antd";

export default function GoldPriceList() {
  type GoldPriceType = {
    goldType: string;
    askPrice: number;
    bidPrice: number;
    createdAt: string;
    updatedAt: string;
  };
  const columns: TableProps<GoldPriceType>["columns"] = [
    {
      title: "Type",
      dataIndex: "goldType",
      key: "goldType",
    },
    {
      title: "Asking price",
      dataIndex: "askPrice",
      key: "askPrice",
    },
    {
      title: "Bidding price",
      dataIndex: "bidPrice",
      key: "bidPrice",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, { createdAt }) => <>{new Date(createdAt).toDateString()}</>,
    },
  ];
  const data: GoldPriceType[] = [];
  return (
    <Table scroll={{ x: 600 }} columns={columns} dataSource={data}></Table>
  );
}
