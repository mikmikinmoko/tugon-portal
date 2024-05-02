import { Checkbox, Form, Input } from "antd";
import Logo from "../Logo/Logo";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <div className=" bg-[#234F8B] font-['Poppins'] w-full h-screen flex justify-center items-center p-8">
        <div className="w-[450px] bg-[#ffffff] px-8 py-16 flex flex-col items-center justify-center rounded-lg">
          <div className="pt-8">
            <Logo width="253px" height="79px" />
          </div>
          <div className="text-center py-4">
            <p>
              Please log in to securely access your account and enjoy
              personalized services.
            </p>
          </div>
          <div className=" w-full ">
            <Form
              name="form"
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className=" opacity-40 p-2 text-1xl" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={
                    <LockOutlined className=" opacity-40 p-3 text-1xl " />
                  }
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <div className="mt-[-15px]">
                <Form.Item>
                  <div className="flex justify-between items-center">
                    <Form.Item name="remember" noStyle>
                      <Checkbox className=" opacity-40 hover:text-blue-500 font-['Poppins']">
                        Remember me
                      </Checkbox>
                    </Form.Item>

                    <a className="opacity-40 font-['Poppins']" href="">
                      Forgot password
                    </a>
                  </div>
                </Form.Item>
              </div>
              <Form.Item>
                <div className="flex flex-col items-center gap-2">
                  <button className=" sm:text-[16px] md:text-[18px] lg:text-[20px] px-16 py-2  font-['Poppins']  text-[#ffffff] rounded-md bg-[#234F8B]">
                    Sign In
                  </button>
                  <div className="font-['Poppins']">
                    {`Don't`} have an account?{" "}
                    <NavLink to="/registration">Sign Up</NavLink>
                  </div>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
