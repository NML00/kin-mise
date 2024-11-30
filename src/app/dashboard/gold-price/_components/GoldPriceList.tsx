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
  const data: GoldPriceType[] = [
    {
      goldType: "V99",
      askPrice: 7900,
      bidPrice: 8000,
      createdAt: "2024-08-17T01:57:36.111Z",
      updatedAt: "2024-09-22T20:43:33.528Z",
    },
    {
      goldType: "V98",
      askPrice: 7400,
      bidPrice: 7100,
      createdAt: "2024-09-17T20:45:31.017Z",
      updatedAt: "2024-09-22T20:43:33.532Z",
    },
    {
      goldType: "V97",
      askPrice: 7000,
      bidPrice: 7100,
      createdAt: "2024-09-17T20:44:55.441Z",
      updatedAt: "2024-09-17T20:44:55.441Z",
    },
  ];
  return (
    <Table scroll={{ x: 600 }} columns={columns} dataSource={data}></Table>
  );
}
