"use client";

import { Table, TableProps } from "antd";

export default function VendorsList() {
  type VendorType = {
    vendorName: string;
    vendorAddress: string;
    createdAt: string;
    updatedAt: string;
    id: number;
  };
  const columns: TableProps<VendorType>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Vendor",
      dataIndex: "vendorName",
      key: "vendorName",
    },
    {
      title: "Address",
      dataIndex: "vendorAddress",
      key: "vendorAddress",
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, { createdAt }) => <>{new Date(createdAt).toDateString()}</>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, item) => <>Hello</>,
    },
  ];
  const data: VendorType[] = [
    {
      id: 6,
      vendorName: "Tan Thanh Danh",
      vendorAddress: "111 An Duong Vuong",
      createdAt: "2024-09-23T16:21:39.834Z",
      updatedAt: "2024-09-23T16:21:39.834Z",
    },
  ];
  return (
    <Table scroll={{ x: 600 }} columns={columns} dataSource={data}></Table>
  );
}
