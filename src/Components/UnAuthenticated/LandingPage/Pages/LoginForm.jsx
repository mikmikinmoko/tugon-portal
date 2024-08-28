import { Button, Checkbox, Form, Input, message } from "antd";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import {
  CloseEyeIcon,
  EyeIcon,
  LockIcon,
  UsersIcon,
} from "../../../../Assets/Resources/Icons/Icons";
import { useEffect, useRef } from "react";
import { useLoginApi } from "../../../../store/controller/login";

const LoginForm = () => {
  const [form] = Form.useForm();

  const logInApi = useLoginApi();

  const onFinish = (values) => {
    const body = { username: values.username, password: values.password };
    logInApi.mutate(body, {
      onSuccess: () => {
        message.success("Successfully Login");
      },
    });
    // dispatch(
    //   login({
    //     username: values.username,
    //     password: values.password,
    //     cb: () => {
    //       navigate("/", { replace: true });
    //     },
    //   })
    // );
  };

  // useEffect(() => {
  //   if (logInApi.isSuccess) navigate("/", { replace: true });
  // }, [logInApi, navigate]);

  return (
    <div className="lg:bg-[#234F8B] md:bg-[#234F8B] font-['Poppins'] w-full min-h-screen  py-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-[450px] bg-[#ffffff] px-4 lg:px-8 py-8 lg:py-16 flex flex-col items-center justify-center rounded-lg shadow-lg">
        <Logo width="253px" height="79px" />
        <div className="text-center py-3">
          <p>
            Please log in to securely access your account and enjoy personalized
            services.
          </p>
        </div>
        <div className="w-full mt-4">
          <Form
            form={form}
            onFinish={onFinish}
            initialValues={{
              username: "testdynamic",
              password: "testdynamic",
            }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username",
                },
              ]}
              className="mt-2"
            >
              <Input
                className="py-2"
                prefix={<UsersIcon />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              className="mb-2"
            >
              <Input.Password
                className="py-2"
                prefix={<LockIcon />}
                disabled={logInApi.isPending}
                placeholder="Password"
                suffix={<CloseEyeIcon />}
                iconRender={(e) => (e ? <CloseEyeIcon /> : <EyeIcon />)}
              />
            </Form.Item>
            <div className="mt-[-15px]">
              <Form.Item>
                <div className="flex justify-between items-center py-5 text-[10px]">
                  <Checkbox className="opacity-40 hover:text-blue-500 font-['Poppins'] text-[10px] lg:text-[14px]">
                    Remember me
                  </Checkbox>
                  <a
                    className="opacity-40 font-['Poppins'] lg:text-[14px]"
                    href=""
                  >
                    Forgot password
                  </a>
                </div>
              </Form.Item>
            </div>
            <Form.Item>
              <Button
                type="primary"
                loading={logInApi.isPending}
                onClick={() => form.submit()}
                className="bg-[#234F8B] w-full py-5 flex justify-center items-center"
                htmlType="submit"
              >
                Sign In
              </Button>
            </Form.Item>
            <div className="flex flex-col items-center gap-2">
              <div className="font-['Poppins'] py-5">
                {`Don't`} have an account?{" "}
                <NavLink to="/registration">Sign Up</NavLink>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
