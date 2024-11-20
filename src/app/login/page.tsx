import { Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";

export default function Login() {
    return (
        <div className="min-h-[100vh] flex items-center justify-center px-4">
            <div className="rounded border-slate-700 border p-4 w-full max-w-[600px]">
                <Form>
                    <FormItem>
                        <Input />
                    </FormItem>
                </Form>
            </div>
        </div>
    )
}