"use client";

import { Button, Form, FormProps, Input } from "antd";
import FormItem from "antd/es/form/FormItem";

export default function CreateVendors() {
  type CreateVendorType = {
    vendorName: string;
    vendorAddress: string;
  };
  const handleCreate: FormProps<CreateVendorType>["onFinish"] = async () => {};
  return (
    <div className="py-8">
      <div className="rounded max-w-[600px] bg-neutral-100 p-4">
        <Form
          onFinish={handleCreate}
          name="create-vendor"
          className=" "
          layout="vertical"
        >
          <div className="text-lg font-semibold">Create Vendor</div>
          <FormItem label="Vendor Name" rules={[{ required: true }]}>
            <Input></Input>
          </FormItem>
          <FormItem label="Vendor Address" rules={[{ required: true }]}>
            <Input></Input>
          </FormItem>
          <FormItem>
            <Button htmlType="submit">Create</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}
