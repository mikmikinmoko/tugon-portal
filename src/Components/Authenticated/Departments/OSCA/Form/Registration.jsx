import { useNavigate } from "react-router-dom";
import Navigation from "../../../../UnAuthenticated/LandingPage/Navigation/Navigation";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Upload,
  message,
} from "antd";
import Step from "../../../../../Reusable/Step";
import TitleForm from "../../../../../Reusable/TitleForm";
import { useEffect, useState } from "react";
import {
  InboxOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import refbrgy from "../../../../../Assets/Resources/json/refbrgy.json";
import refcitymun from "../../../../../Assets/Resources/json/refcitymun.json";
import refprovince from "../../../../../Assets/Resources/json/refprovince.json";
import refregion from "../../../../../Assets/Resources/json/refregion.json";
import dayjs from "dayjs";
import { seniorActions } from "../../../../../store/store";

const { Dragger } = Upload;

const civilStatus = [
  {
    id: 0,
    label: "Single",
  },
  {
    id: 1,
    label: "Married",
  },
  {
    id: 2,
    label: "Widowed",
  },
  {
    id: 3,
    label: "Legally Seperate",
  },
];

const Registration = () => {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const [file, setFile] = useState({});
  const [validId, setValidId] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [step, setStep] = useState(0);

  const { createSeniorId } = seniorActions;

  console.log(values);

  const document = {
    name: "document",
    accept: "image/png, image/jpeg",
    multiple: false,
    beforeUpload: async (file) => {
      setFile(file);
      setImagePreview(await getBase64(file));
      return false;
    },
    onChange(info) {
      const { status } = info.file;

      // if (status !== "uploading") {
      // }

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    onDrop(e) {
      e;
    },
  };
  const id = {
    name: "id",
    accept: "image/png, image/jpeg",
    multiple: true,
    beforeUpload: async (file) => {
      setValidId(file);
      setImagePreview(await getBase64(file));
      return false;
    },
    onChange(info) {
      const { status } = info.file;

      // if (status !== "uploading") {
      // }

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    onDrop(e) {
      e;
    },
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = (error) => reject(error);
    });
  useEffect(() => {
    const { birthdate, sex, ...rest } = currentUser;
    form.setFieldsValue({
      dateOfBirth: dayjs(birthdate),
      sex: +sex,
      ...rest,
    });
  }, [currentUser]);

  const onFinish = (val) => {
    const formData = new FormData();
    const {
      accountId,
      birthdate,
      age,
      brgyId,
      cityId,
      dateCreated,
      dateUpdated,
      email,
      familyCode,
      id,
      firstName,
      middleName,
      lastName,
      isDeleted,
      isVoter,
      mobileNumber,
      provinceId,
      regionId,
      sex,
      suffix,
      tempEmail,
      tempMobileNumber,
      voterLocation,
      voterNumber,
      document,
      familyComposition,
      ...values
    } = form.getFieldsValue(true);
    Object.keys(values).forEach((key) => formData.append(key, values[key]));
    formData.append("document", val.document.file);
    formData.append("id", val.id.file);
    formData.append("id", val.id.file);
    formData.append("familyComposition", JSON.stringify(familyComposition));

    dispatch(createSeniorId(formData));
  };
  const items = [
    {
      title: "Step 1",
      description: "Personal Information",
    },
    {
      title: "Step 2",
      description: "Additional Information",
    },
    {
      title: "Step 3",
      description: "Family Composition",
    },
    {
      title: "Step 4",
      description: "Membership to Senior Citizens Association",
    },
    {
      title: "Step 5",
      description: "Documents",
    },
  ];

  return (
    <>
      <Navigation />
      <section className="w-full h-screen font-['Poppins']">
        <div className="flex justify-center items-center">
          <div className="w-[1100px]">
            <div className=" bg-[#E0E6F2] py-2 px-10">
              <div className="py-5 text-[#808080] text-[14px]">
                <Button type="text" onClick={() => navigate(-1)}>
                  &larr; back
                </Button>
              </div>
              <h1 className="text-[24px] font-semibold">
                Office of the Senior {`Citizen's`} Affair (OSCA)
                <span className="text-[#808080] text-[12px] px-2 font-normal">
                  Registration Form
                </span>
              </h1>
            </div>
            <div className="h-full w-full ">
              <div className="lg:grid lg:grid-cols-4 ">
                <div className=" border-r-2 border-[#D8E6F6]  py-16 px-5">
                  <Step current={step} items={items} />
                </div>
                <div className=" col-span-3 py-16 px-10 ">
                  <Form
                    form={form}
                    layout="vertical"
                    requiredMark="optional"
                    onFinish={onFinish}
                  >
                    <div className="py-3">
                      {step === 2 ? (
                        <TitleForm>Family Composition</TitleForm>
                      ) : step === 3 ? (
                        <TitleForm>
                          Membership to Senior Citizens Association
                        </TitleForm>
                      ) : step === 4 ? (
                        <TitleForm>Document</TitleForm>
                      ) : (
                        <TitleForm>Personal Information</TitleForm>
                      )}
                    </div>
                    {step === 0 && (
                      <>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4">
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
                              <Input placeholder="First Name" disabled />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              name="middleName"
                              label="Middle Name"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input Middle Name",
                                },
                              ]}
                            >
                              <Input placeholder="Middle Name" disabled />
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
                              <Input placeholder="Last Name" disabled />
                            </Form.Item>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-4 gap-4">
                          <div>
                            <Form.Item
                              label="Date of Birth"
                              name="dateOfBirth"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Birth Date",
                                },
                              ]}
                            >
                              <DatePicker
                                className="w-full"
                                format={"YYYY-MM-DD"}
                                placeholder="YYYY-MM-DD"
                                disabled
                              />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              label="Place of Birth"
                              name="placeOfBirth"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Birth Place",
                                },
                              ]}
                            >
                              <Input placeholder="Enter Place of Birth" />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              label="Age"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Age",
                                },
                              ]}
                            >
                              <Input placeholder="Enter Age" disabled />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              name="sex"
                              label="Sex"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Gender",
                                },
                              ]}
                            >
                              <Radio.Group disabled>
                                <Radio value={0}>Male</Radio>
                                <Radio value={1}>Female</Radio>
                              </Radio.Group>
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              label="Civil Status"
                              name="civilStatus"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Civil Status",
                                },
                              ]}
                            >
                              <Select>
                                {civilStatus.map((s) => (
                                  <Select.Option value={s.id} key={s.id}>
                                    {s.label}
                                  </Select.Option>
                                ))}
                              </Select>
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              label="Telephone or Cellphone Number"
                              name="mobileNumber"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Please input your Telephone or Cellphone Number",
                                },
                              ]}
                            >
                              <Input
                                placeholder="Enter Telephone or Cellphone Number"
                                disabled
                              />
                            </Form.Item>
                          </div>

                          <div>
                            <Form.Item
                              label="Region"
                              name="regionId"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter Province",
                                },
                              ]}
                            >
                              <Select
                                disabled
                                filterOption={(input, option) =>
                                  (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                                }
                                optionFilterProp="children"
                                showSearch
                                placeholder="State/Province"
                                options={refregion.map((r) => {
                                  return {
                                    value: r.regCode,
                                    label: r.regDesc,
                                  };
                                })}
                              ></Select>
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              label="Province"
                              name="provinceId"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter Province",
                                },
                              ]}
                            >
                              <Select
                                disabled
                                filterOption={(input, option) =>
                                  (option?.label ?? "")
                                    .toLowerCase()
                                    .includes(input.toLowerCase())
                                }
                                optionFilterProp="children"
                                showSearch
                                placeholder="State/Province"
                                options={refprovince.map((p) => {
                                  return {
                                    value: p.provCode,
                                    label: p.provDesc,
                                  };
                                })}
                              ></Select>
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              label="City"
                              name="cityId"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter City/Municipality",
                                },
                              ]}
                            >
                              <Select
                                placeholder="City/Municipality"
                                disabled
                                options={refcitymun.map((c) => {
                                  return {
                                    value: c.citymunCode,
                                    label: c.citymunDesc,
                                  };
                                })}
                              ></Select>
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              label={"Barangay"}
                              name="brgyId"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input your Baragay",
                                },
                              ]}
                            >
                              <Select
                                placeholder="Barangay"
                                disabled
                                options={refbrgy.map((b) => {
                                  return {
                                    value: b.brgyCode,
                                    label: b.brgyDesc,
                                  };
                                })}
                              />
                            </Form.Item>
                          </div>
                          {/* <div>
                        <Form.Item
                          name="street"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Baragay",
                            },
                          ]}
                        >
                          <Input placeholder="Street Address" />
                        </Form.Item>
                      </div> */}
                        </div>
                      </>
                    )}
                    {step === 1 && (
                      <>
                        <div>
                          <Form.Item
                            label="Pensioner"
                            name="pensioner"
                            rules={[
                              {
                                required: true,
                                message: "Please select Pensioner",
                              },
                            ]}
                          >
                            <Radio.Group>
                              <Radio value={0}>Yes</Radio>
                              <Radio value={1}>No</Radio>
                            </Radio.Group>
                          </Form.Item>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-3 gap-x-10">
                          <div>
                            <Form.Item
                              label="Amount of Pension"
                              name="amountOfPension"
                            >
                              <Input />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item label="Income" name="income">
                              <Input />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              label="Educational Attainment"
                              name="educationalAttainment"
                            >
                              <Select>
                                <Select.Option value={0}>
                                  Elementary Level
                                </Select.Option>
                                <Select.Option value={1}>
                                  High School Level
                                </Select.Option>
                                <Select.Option value={2}>
                                  College Level
                                </Select.Option>
                                <Select.Option value={3}>
                                  College Graduate
                                </Select.Option>
                                <Select.Option value={4}>
                                  Vocational / Technical Course
                                </Select.Option>
                              </Select>
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              label="Employment Status"
                              name="employmentStatus"
                            >
                              <Select>
                                <Select.Option value={0}>
                                  Employed
                                </Select.Option>
                                <Select.Option value={1}>
                                  Unemployed
                                </Select.Option>
                                <Select.Option value={2}>
                                  Business
                                </Select.Option>
                              </Select>
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item
                              label="Physical Condition"
                              name="physicalCondition"
                            >
                              <Select>
                                <Select.Option value={0}>Healthy</Select.Option>
                                <Select.Option value={1}>
                                  Sickly & Frail
                                </Select.Option>
                                <Select.Option value={2}>
                                  Bed Ridden
                                </Select.Option>
                                <Select.Option value={3}>PWD</Select.Option>
                              </Select>
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item label="Skills" name="skills">
                              <Input />
                            </Form.Item>
                          </div>
                        </div>
                      </>
                    )}
                    {step === 2 && (
                      <>
                        {/* <div className="grid grid-cols-2 grid-rows-3 gap-x-10">
                          <div>
                            <Form.Item label="Name" name="name">
                              <Input />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item label="Relationship" name="relationship">
                              <Input />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item label="Age" name="age">
                              <Input />
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item label="Status" name="status">
                              <Radio.Group>
                                <Radio value="ALIVE">Alive</Radio>
                                <Radio value="DECEASE">Deceased</Radio>
                              </Radio.Group>
                            </Form.Item>
                          </div>
                          <div>
                            <Form.Item label="Occupation" name="occupation">
                              <Input />
                            </Form.Item>
                          </div>
                        </div> */}
                        <div>
                          <Form.List name="familyComposition">
                            {(fields, { add, remove }) => (
                              <>
                                {fields.map(({ key, name, ...restField }) => (
                                  <div
                                    key={key}
                                    className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 grid-rows-3 lg:gap-10 md:gap-10"
                                  >
                                    <Form.Item
                                      {...restField}
                                      name={[name, "name"]}
                                      label="Name"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing first name",
                                        },
                                      ]}
                                    >
                                      <Input placeholder="First Name" />
                                    </Form.Item>
                                    <Form.Item
                                      {...restField}
                                      name={[name, "relationship"]}
                                      label="Relationship"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing last name",
                                        },
                                      ]}
                                    >
                                      <Input placeholder="Relationship" />
                                    </Form.Item>
                                    <Form.Item
                                      {...restField}
                                      name={[name, "age"]}
                                      label="Age"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing last name",
                                        },
                                      ]}
                                    >
                                      <Input placeholder="Last Name" />
                                    </Form.Item>
                                    <Form.Item
                                      {...restField}
                                      name={[name, "status"]}
                                      label="Status"
                                    >
                                      <Radio.Group>
                                        <Radio value={0}>Alive</Radio>
                                        <Radio value={1}>Deceased</Radio>
                                      </Radio.Group>
                                    </Form.Item>
                                    <Form.Item
                                      {...restField}
                                      name={[name, "occupation"]}
                                      label="Occupation"
                                      rules={[
                                        {
                                          required: true,
                                          message: "Missing last name",
                                        },
                                      ]}
                                    >
                                      <Input placeholder="Last Name" />
                                    </Form.Item>
                                    <div className="pt-7">
                                      <Button
                                        type="dashed"
                                        block
                                        onClick={() => remove(name)}
                                        icon={<MinusCircleOutlined />}
                                      >
                                        Remove Field
                                      </Button>
                                    </div>
                                  </div>
                                ))}
                                <div className="py-4 w-full">
                                  <Form.Item>
                                    <Button
                                      type="dashed"
                                      onClick={() => add()}
                                      block
                                      icon={<PlusOutlined />}
                                    >
                                      Add field
                                    </Button>
                                  </Form.Item>
                                </div>
                              </>
                            )}
                          </Form.List>
                        </div>
                      </>
                    )}
                    {step === 3 && (
                      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-3 md:grid md:grid-cols-2 md:grid-rows-3 gap-x-10">
                        <div>
                          <Form.Item
                            label="Name of Association"
                            name="nameOfAssociation"
                          >
                            <Input placeholder="Name of Association" />
                          </Form.Item>
                        </div>
                        <div>
                          <Form.Item
                            label="Address of Association"
                            name="addressOfAssociation"
                            rules={[
                              {
                                required: true,
                                message:
                                  "Please input the Address of Association",
                              },
                            ]}
                          >
                            <Input placeholder="Address" />
                          </Form.Item>
                        </div>

                        <div>
                          <Form.Item
                            label="Date of Membership"
                            name="dateOfMembership"
                            rules={[
                              {
                                required: true,
                                message: "Please input your Date of Membership",
                              },
                            ]}
                          >
                            <DatePicker
                              className="w-full"
                              format={"YYYY-MM-DD"}
                              placeholder="YYYY-MM-DD"
                            />
                          </Form.Item>
                        </div>
                        <div>
                          <Form.Item
                            label="Position"
                            name="position"
                            rules={[
                              {
                                required: true,
                                message: "Please input your position",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </div>
                      </div>
                    )}
                    {step === 4 && (
                      <div className="font-['Poppins']">
                        <div className="py-2 text-[16px] text-[#a8a8a8]">
                          Birth Certificate / Passport
                        </div>
                        <Form.Item
                          name="document"
                          rules={[
                            {
                              required: true,
                              message:
                                "Please input your Birth Certificarte / Passport",
                            },
                          ]}
                        >
                          <Dragger {...document}>
                            <p className="ant-upload-drag-icon">
                              <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                              Click or drag file to this area to upload
                            </p>
                            <p className="ant-upload-hint">
                              Support for a single or bulk upload. Strictly
                              prohibited from uploading company data or other
                              banned files.
                            </p>
                          </Dragger>
                        </Form.Item>
                        <div className="py-2 text-[16px] text-[#a8a8a8]">
                          2 Valid {`ID's`}
                        </div>
                        <Form.Item
                          name="id"
                          rules={[
                            {
                              required: true,
                              message: "Please input your ID",
                            },
                          ]}
                        >
                          <Dragger {...id}>
                            <p className="ant-upload-drag-icon">
                              <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                              Click or drag file to this area to upload
                            </p>
                            <p className="ant-upload-hint">
                              Support for a single or bulk upload. Strictly
                              prohibited from uploading company data or other
                              banned files.
                            </p>
                          </Dragger>
                        </Form.Item>

                        <Form.Item
                          name="agreement"
                          valuePropName="checked"
                          rules={[
                            {
                              validator: (_, value) =>
                                value
                                  ? Promise.resolve()
                                  : Promise.reject(
                                      new Error("Should accept agreement")
                                    ),
                            },
                          ]}
                          // {...tailFormItemLayout}
                        >
                          <Checkbox>
                            I certify that the above information are true and
                            correct to the best of my knowledge and belief
                          </Checkbox>
                        </Form.Item>
                      </div>
                    )}
                    <div className="flex justify-end gap-2">
                      <Button
                        disabled={step <= 0}
                        onClick={() => setStep((step) => step - 1)}
                      >
                        Previous
                      </Button>
                      {step === 4 ? (
                        <Button type="primary" onClick={() => form.submit()}>
                          Submit
                        </Button>
                      ) : (
                        <Button
                          type="primary"
                          onClick={() => setStep((step) => step + 1)}
                        >
                          Next
                        </Button>
                      )}
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
