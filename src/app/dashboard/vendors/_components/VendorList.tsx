'use client'

import { Table, TableProps } from "antd";

export default function VendorsList() {
  type VendorType = {
    vendorName: string;
    vendorAddress: string;
    createdAt: string;
    id: string;
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
  ];
  const data: VendorType[] = [];
  return (
    <Table scroll={{ x: 600 }} columns={columns} dataSource={data}></Table>
  );
}
