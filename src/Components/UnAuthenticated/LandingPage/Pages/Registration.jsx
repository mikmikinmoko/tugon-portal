import { Button, DatePicker, Form, Input, Radio, Select, message } from "antd";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import refbrgy from "../../../../Assets/Resources/json/refbrgy.json";
import TitleForm from "../../../../Reusable/TitleForm";
import { registrationImg } from "../../../../helpers/image";
import {
  useGetMunicipalities,
  useSignupCitizenApi,
} from "../../../../store/controller/registration";
import Logo from "../Logo/Logo";
import { useLoginApi } from "../../../../store/controller/login";
import { suffix } from "../../../../Assets/constant/values";

const Registration = () => {
  const [form] = Form.useForm();

  const lgu = Form.useWatch("cityId", form);

  const getMunicipalities = useGetMunicipalities();
  const signupCitizenApi = useSignupCitizenApi();

  const onFinish = (values) => {
    signupCitizenApi.mutate(
      {
        body: {
          ...values,
          lguCode: getMunicipalities?.data?.data
            .filter((e) => e.cityCode === lgu)
            .map((s) => s.lguCode)[0],
          regionId: refbrgy
            .filter((s) => s.citymunCode === lgu)
            .map((e) => e.regCode)[0],
          provinceId: refbrgy
            .filter((s) => s.citymunCode === lgu)
            .map((e) => e.provCode)[0],
          mobileNumber: "63" + values.mobileNumber,
          birthdate: values.birthdate.format("YYYY-MM-DD"),
        },
      },
      {
        onSuccess: ({ data }) => {
          form.resetFields();
          message.success(data.message);
        },
        onError: (error) => {
          message.warning(
            error?.response?.data?.message || "Input fields is required"
          );
        },
      }
    );

    // dispatch(
    //   signupCitizen({
    //     body: {
    //       ...values,
    //       lguCode: municipalities
    //         .filter((e) => e.cityCode === lgu)
    //         .map((s) => s.lguCode)[0],
    //       regionId: refbrgy
    //         .filter((s) => s.citymunCode === lgu)
    //         .map((e) => e.regCode)[0],
    //       provinceId: refbrgy
    //         .filter((s) => s.citymunCode === lgu)
    //         .map((e) => e.provCode)[0],
    //       mobileNumber: "63" + values.mobileNumber,
    //       birthdate: values.birthdate.format("YYYY-MM-DD"),
    //     },
    //     cb: () => {
    //       form.resetFields();
    //     },
    //   })
    // );
  };

  useEffect(() => {
    form.resetFields(["brgyId"]);
  }, [lgu]);

  return (
    <div className="font-['Poppins'] text-[18px] font-normal w-full flex min-h-screen">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div
          style={{
            backgroundImage: `url(${registrationImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="hidden lg:block object-cover h-full"
        >
          <div className="flex h-full flex-col justify-end items-start px-5 lg:px-5 xl:px-16 py-20   text-[#fff] ">
            <div className=" text-[40px] font-semibold w-11/12 ">
              Taytay Unified Governance & Outreach Network
            </div>
            <p className=" py-5 text-justify">
              TUGON represents a forward - thinking and citizen - centric
              approach, promoting efficiency, inclusivity, and technological and
              outreach activities
            </p>
          </div>
        </div>
        <div className=" text-[16px] p-5 lg:px-10">
          <div className="flex flex-col justify-center items-center gap-2">
            <Logo />
            <p className="text-center w-3/4">
              Join the Taytay Unified Governance & Outreach Network Today! Sign
              Up for Community Collaboration and Empowerment.
            </p>
          </div>
          <div className=" py-5 h-full">
            <Form
              // requiredMark="optional"
              form={form}
              onFinish={onFinish}
              layout="vertical"
            >
              <TitleForm>Contact Name</TitleForm>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-3 gap-3">
                <div>
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input First Name",
                      },
                    ]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    name="middleName"
                    label="Middle Name"
                    rules={[
                      {
                        required: false,
                        message: "Please input Middle Name",
                      },
                    ]}
                  >
                    <Input placeholder="Middle Name" />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                      {
                        required: true,
                        message: "Please input Last Name",
                      },
                    ]}
                  >
                    <Input placeholder="Last Name" />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    name="suffix"
                    label="Suffix"
                    rules={[
                      {
                        required: false,
                        message: "Please input Suffix",
                      },
                    ]}
                  >
                    <Select placeholder="Suffix">
                      {suffix.map((s) => (
                        <Select.Option value={s.value} key={s.id}>
                          {s.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label="Phone Number"
                    name="mobileNumber"
                    rules={[
                      {
                        required: true,
                        message: "Please enter phone number",
                      },
                      {
                        pattern: new RegExp(/^9{1}[0-9]/),
                        message: "Please enter valid mobile number",
                      },
                      {
                        min: 10,
                        message: "Mobile number must be at least 10 characters",
                      },
                    ]}
                  >
                    <Input
                      addonBefore="+63"
                      maxLength={10}
                      placeholder="Mobile Number"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    name="sex"
                    label="Gender"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Gender",
                      },
                    ]}
                  >
                    <Radio.Group>
                      <Radio value={0}>Male</Radio>
                      <Radio value={1}>Female</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
              </div>

              <TitleForm>Personal Information</TitleForm>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-3 gap-3">
                <div>
                  <Form.Item
                    label="Birth Date"
                    name="birthdate"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Birth Date",
                      },
                    ]}
                  >
                    <DatePicker className="w-full" format={"YYYY-MM-DD"} />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "The email address is required",
                      },
                      {
                        type: "email",
                        message: "The input is not a valid email address",
                      },
                    ]}
                  >
                    <Input placeholder="Email Address" />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label="City/Municipality"
                    name="cityId"
                    rules={[
                      {
                        required: true,
                        message: "Please enter city/municipality",
                      },
                    ]}
                  >
                    <Select
                      loading={getMunicipalities.isLoading}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      optionFilterProp="children"
                      showSearch
                      placeholder="City/Municipality"
                      options={getMunicipalities?.data?.data?.map((city) => {
                        return {
                          value: city.cityCode,
                          label: city.lguName,
                        };
                      })}
                    ></Select>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label="Barangay"
                    name="brgyId"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Baragay",
                      },
                    ]}
                  >
                    <Select>
                      {refbrgy
                        .filter((b) => b.citymunCode === lgu)
                        .map((s) => (
                          <Select.Option key={s.id} value={s.brgyCode}>
                            {s.brgyDesc}
                          </Select.Option>
                        ))}
                    </Select>
                  </Form.Item>
                </div>
              </div>

              <TitleForm>Login Credentials</TitleForm>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  xl:grid-cols-3 gap-3">
                <div>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username",
                      },
                    ]}
                  >
                    <Input placeholder="Username" />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Username",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Password" />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("Password didn't match!")
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password placeholder="Confirm Password" />
                  </Form.Item>
                </div>
                {/*<div>
                  <Form.Item label="Suffix">
                    <Select>
                      {suffix.map((s) => (
                        <Select.Option value={s.value} key={s.id}>
                          {s.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </div>
                <div>
                  <Form.Item
                    label="Phone Number"
                    rules={[
                      {
                        required: true,
                        message: "Please enter phone number",
                      },
                      {
                        pattern: new RegExp(/^9{1}[0-9]/),
                        message: "Please enter valid mobile number",
                      },
                      {
                        min: 10,
                        message: "Mobile number must be at least 10 characters",
                      },
                    ]}
                  >
                    <Input addonBefore="+63" maxLength={10} />
                  </Form.Item>
                </div>
                <div>
                  <Form.Item name="sex" label="Gender">
                    <Radio.Group>
                      <Radio value={0}>Male</Radio>
                      <Radio value={1}>Female</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div> */}
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <Button
                  type="primary"
                  onClick={() => form.submit()}
                  loading={signupCitizenApi.isPending}
                >
                  Create Account
                </Button>
                <p>
                  Have an account? <NavLink to="/login">Log In</NavLink>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
