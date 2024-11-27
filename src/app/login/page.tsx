import { Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";

export default function Login() {
  return (
    <div className="min-h-[100vh] flex items-center justify-center px-4">
      <div className="rounded border-slate-700 border p-4 w-full max-w-[600px] bg-slate-100">
        <Form layout="vertical">
          <FormItem label="User">
            <Input />
          </FormItem>
          <FormItem label="Password">
            <Password />
          </FormItem>
        </Form>
      </div>
    </div>
  );
}
