import { Button, Checkbox, Form, Input } from "antd";
import Logo from "../Logo/Logo";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../../store/store";

const LoginForm = () => {
  const [form] = Form.useForm();
  const { isLoading } = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { login } = authActions;

  const onFinish = (values) => {
    dispatch(login(values));
    navigate("/");
  };

  return (
    <div>
      <div className=" bg-[#234F8B] font-['Poppins'] w-full h-full py-32 flex justify-center items-center px-8">
        <div className="w-[450px] bg-[#ffffff] p-4 lg:px-8  lg:py-16 flex flex-col items-center justify-center rounded-lg">
          <Logo width="253px" height="79px" />
          <div className="text-center ">
            <p>
              Please log in to securely access your account and enjoy
              personalized services.
            </p>
          </div>
          <div className=" w-full ">
            <Form form={form} onFinish={onFinish}>
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
                    <Checkbox className=" opacity-40 hover:text-blue-500 font-['Poppins']">
                      Remember me
                    </Checkbox>

                    <a className="opacity-40 font-['Poppins']" href="">
                      Forgot password
                    </a>
                  </div>
                </Form.Item>
              </div>
              <Form.Item>
                <div className="flex flex-col items-center gap-2">
                  <Button
                    type="primary"
                    loading={isLoading}
                    onClick={() => form.submit()}
                  >
                    Sign In
                  </Button>
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
