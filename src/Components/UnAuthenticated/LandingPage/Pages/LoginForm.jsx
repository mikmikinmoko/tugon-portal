import { Button, Checkbox, Form, Input } from "antd";
import Logo from "../Logo/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../../store/store";
import {
  CloseEyeIcon,
  EyeIcon,
  LockIcon,
  UsersIcon,
} from "../../../../Assets/Resources/Icons/Icons";
import { useEffect, useRef } from "react";

const LoginForm = () => {
  const ref = useRef();
  const [form] = Form.useForm();
  const { isLoading, isAuthenticated } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  const { login } = authActions;
  const navigate = useNavigate();

  const onFinish = (values) => {
    dispatch(
      login({
        username: values.username,
        password: values.password,
        cb: () => {
          navigate("/", { replace: true });
        },
      })
    );
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <div className=" lg:bg-[#234F8B] md:bg-[#234F8B] font-['Poppins'] w-full h-screen py-32 flex justify-center items-center px-8">
        <div className="w-[450px] bg-[#ffffff] p-4 lg:px-8  lg:py-16 flex flex-col items-center justify-center rounded-lg">
          <Logo width="253px" height="79px" />
          <div className="text-center py-3">
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
                  disabled={isLoading}
                  placeholder="Password"
                  suffix={<CloseEyeIcon />}
                  iconRender={(e) => (e ? <CloseEyeIcon /> : <EyeIcon />)}
                />
              </Form.Item>
              <div className="mt-[-15px]">
                <Form.Item>
                  <div className="flex justify-between items-center py-5 text-[10px]  ">
                    <Checkbox className=" opacity-40 hover:text-blue-500 font-['Poppins'] text-[10px] lg:text-[14px]  ">
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
                  loading={isLoading}
                  onClick={() => form.submit()}
                  className="bg-[#234F8B] w-full"
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
    </div>
  );
};

export default LoginForm;
