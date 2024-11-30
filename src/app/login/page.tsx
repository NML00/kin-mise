"use client";
import { Button, Form, FormProps, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  type LoginForm = {
    email: string;
    password: string;
  };
  const handleLogin: FormProps<LoginForm>["onFinish"] = async (value) => {
    console.log(value, "yaa");
    router.push("/dashboard");
  };
  return (
    <div className="min-h-[100vh] flex items-center justify-center px-4">
      <div className="rounded border-slate-700 border p-4 w-full max-w-[600px] bg-slate-100">
        <Form<LoginForm> layout="vertical" onFinish={handleLogin}>
          <FormItem name={"user"} label="User">
            <Input />
          </FormItem>
          <FormItem name={"password"} label="Password">
            <Password />
          </FormItem>
          <FormItem>
            <Button htmlType="submit">Log in</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
}
