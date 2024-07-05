import { Button, Form, Input, message } from "antd";
import { useUpdatePassword } from "../../../../../store/controller/profile";

const ChangePassword = ({ setChangePassword }) => {
  const [form] = Form.useForm();

  const updatePassword = useUpdatePassword();

  const onFinish = (val) => {
    const { confirmPassword, ...rest } = val;
    updatePassword.mutate(rest, {
      onSuccess: (data) => {
        message.success(data.data.message);
        form.resetFields("");
        setChangePassword(false);
      },
      onError: (err) => {
        message.error(err.response.data.message);
      },
    });
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <div className="flex justify-center items-center flex-col">
        <div className="w-96">
          <Form.Item
            label="Old Password"
            name="oldPassword"
            rules={[
              { required: true, message: "Please input your old password" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="password"
            rules={[
              { required: true, message: "Please input your new password" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm New Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please input your New Password",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Password didn't match!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button
            className="w-full py-5 flex justify-center items-center font-['Poppins']"
            htmlType="submit"
            type="primary"
            onClick={() => form.submit()}
            // loading={updatePassword.isPending}
          >
            <span className="text-[16px]">Submit</span>
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default ChangePassword;
