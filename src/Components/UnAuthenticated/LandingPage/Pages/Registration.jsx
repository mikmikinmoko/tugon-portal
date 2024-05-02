import { Button, DatePicker, Form, Input, Radio, Select, message } from "antd";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import TitleForm from "../../../../Reusable/TitleForm";
import { useEffect, useState } from "react";
import { getMunicipalities } from "../../../../store/api/auth-api";
import refbrgy from "../../../../Assets/Resources/json/refbrgy.json";
// import refcitymun from "../../../../Assets/Resources/json/refcitymun.json";
// import refprovince from "../../../../Assets/Resources/json/refprovince.json";
// import refregion from "../../../../Assets/Resources/json/refregion.json";

const suffix = [
  { id: 0, value: "", label: "" },
  { id: 1, value: "Jr.", label: "Jr." },
  { id: 2, value: "Jr II", label: "Jr. II" },
  { id: 3, value: "Sr.", label: "Sr." },
  { id: 4, value: "II", label: "II" },
  { id: 5, value: "III", label: "III" },
  { id: 6, value: "IV", label: "IV" },
  { id: 7, value: "V", label: "V" },
  { id: 8, value: "VI", label: "VI" },
];

const Registration = () => {
  const [form] = Form.useForm();
  const lgu = Form.useWatch("cityId", form);

  console.log(lgu);
  console.log(refbrgy.filter((b) => b.citymunCode === lgu).map((s) => s));

  const [municipalities, setMunicipalities] = useState([]);
  const [fetchMunicipalitiesLoading, setFetchMunicipalitiesLoading] =
    useState(false);

  const fetchMunicipalities = async () => {
    setFetchMunicipalitiesLoading(true);
    const request = await getMunicipalities();
    if (request.name === "AxiosError") {
      message.error(request.response.data.message);
    } else {
      setMunicipalities(request.data);
    }
    setFetchMunicipalitiesLoading(false);
  };

  useEffect(() => {
    fetchMunicipalities();
  }, []);

  const onFinish = (values) => {
    console.log(values);
  };

  useEffect(() => {
    form.resetFields(["brgyId"]);
  }, [lgu]);

  return (
    <div className="font-['Poppins'] text-[18px] font-normal">
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className=" bg-[url('src/Assets/img/registrationImg.png')] bg-cover bg-center ">
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
          <div className="font-['Manrope'] py-5">
            <Form
              requiredMark="optional"
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
                    name="birthDate"
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
                      loading={fetchMunicipalitiesLoading}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      optionFilterProp="children"
                      showSearch
                      placeholder="City/Municipality"
                      options={municipalities.map((city) => {
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
                    rules={[
                      {
                        required: true,
                        message: "Please input your Password",
                      },
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
                <Button type="primary" onClick={() => form.submit()}>
                  Submit
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
