import { Button, DatePicker, Form, Input, Radio, Select, message } from "antd";
import Navigation from "../../../../UnAuthenticated/LandingPage/Navigation/Navigation";
import Step from "../../../../../Reusable/Step";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../../../../Reusable/Title";
import TitleForm from "../../../../../Reusable/TitleForm";
import moment from "moment";
import {
  causeOfDisability,
  civilStatusPWD,
  educationalAttainment,
  itemsPWD,
  occupation,
  statusOfEmployment,
  typeOfDisability,
  typesofEmployment,
} from "../../../../constant/values";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useCitizenAuthStore } from "../../../../../store/storage/useAuth";
import refbrgy from "../../../../../Assets/Resources/json/refbrgy.json";
import dayjs from "dayjs";
import { useCreatePwdId } from "../../../../../store/controller/registration";

const PWDRegistration = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const type = Form.useWatch(["type"], form);
  const accomplish = Form.useWatch(["accomplishedBy"], form);
  const [step, setStep] = useState(0);
  const [oldStep, setOldStep] = useState(step);
  const { userData } = useCitizenAuthStore();
  const createPwdId = useCreatePwdId();

  const nextStep = async () => {
    try {
      await form.validateFields("");
      setStep((n) => n + 1);
      setOldStep(step);
    } catch (err) {
      console.log(err);
      message.warning(err?.errorFields[0]?.errors);
    }
  };
  const onFinish = (values) => {
    const {
      accountId,
      brgyId,
      cityId,
      dateCreated,
      dateOfBirth,
      dateOfMembership,
      dateUpdated,
      email,
      familyCode,
      firstName,
      id,
      isDeleted,
      isVoter,
      lastName,
      middleName,
      mobileNumber,
      provinceId,
      regionId,
      sex,
      suffix,
      tempEmail,
      tempMobileNumber,
      voterLocation,
      voterNumber,
      familyComposition,
      ...rest
    } = form.getFieldsValue(true);
    console.log(rest);

    createPwdId.mutate(
      {
        ...rest,
        familyComposition: JSON.stringify(familyComposition),
        // dateOfMembership: dateOfMembership.format("YYYY-MM-DD"),
      },
      {
        onSuccess: ({ data }) => {
          message.success(data.messgae);
          form.resetFields("");
          navigate("/pwd");
        },
        onError: (err) => {
          message.warning(err?.response?.data?.message);
        },
      }
    );
  };

  useEffect(() => {
    const { birthdate, sex, mobileNumber, dateOfMembership, brgyId, ...rest } =
      userData;
    form.setFieldsValue({
      dateOfBirth: dayjs(birthdate).format("YYYY-MM-DD"),
      sex: +sex,
      mobileNumber: +mobileNumber,
      dateOfMembership: dayjs(dateOfMembership),
      brgyId: refbrgy
        .filter((r) => r.brgyCode === userData.brgyId)
        .map((s) => s.brgyDesc),
      ...rest,
    });
  }, [userData, refbrgy]);

  useEffect(() => {
    const { firstName, middleName, lastName } = userData;
    if (accomplish === 0) {
      form.setFieldsValue({
        respondentFirstName: firstName,
        respondentMiddleName: middleName,
        respondentLastName: lastName,
      });
      setOldStep(step);
    } else {
      if (step === 7 && oldStep !== 8 && oldStep !== 6) {
        form.resetFields([
          "respondentFirstName",
          "respondentMiddleName",
          "respondentLastName",
        ]);
      }
    }
  }, [accomplish, step, oldStep]);

  return (
    <>
      <Navigation />
      <section className="w-full h-screen font-['Poppins']">
        <div className="px-5 lg:px-32 flex-col flex">
          <div className="bg-[#E0E6F2] px-10 py-2 ">
            <div className="py-5 text-[#808080] text-[14px]">
              <Button type="text" onClick={() => navigate(-1)}>
                &larr; back
              </Button>
            </div>
            <div className="text-[24px] font-semibold">
              Person with Disability Office (PDAO)
              <span className="text-[#808080] text-[12px] px-2 font-normal">
                Registration Form
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-4">
            <div className="lg:border-r-2 border-[#D8E6F6] py-6 lg:py-10 px-5">
              <Step items={itemsPWD} current={step} />
            </div>
            <div className="col-span-3 py-6 lg:py-10 px-5">
              <Form
                form={form}
                onFinish={onFinish}
                className="font-['Poppins']"
                layout="vertical"
                // requiredMark="optional"
              >
                <div className="py-3">
                  {itemsPWD
                    .filter((s) => s.step === step)
                    .map((s) => (
                      <TitleForm key={s.step}>{s.description}</TitleForm>
                    ))}
                </div>
                {/* Application Information */}
                {step === 0 && (
                  <>
                    <Form.Item
                      name="type"
                      label="Type of Application"
                      rules={[
                        {
                          required: true,
                          message: "Please select type of application",
                        },
                      ]}
                    >
                      <Radio.Group>
                        <Radio value={0}>New Applicant</Radio>
                        <Radio value={1}>Renewal</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:py-2 md:gap-5 lg:gap-5">
                      <Form.Item
                        label="Person with Disability (PWD) Number"
                        name="pwdId"
                        rules={[
                          {
                            required: type === 1,
                            message: "Please input PWD Number",
                          },
                        ]}
                      >
                        <Input placeholder="PWD Number" disabled={type === 0} />
                      </Form.Item>
                      <Form.Item
                        label="Date of Membership"
                        name="dateOfMembership"
                        rules={[
                          {
                            required: type === 1,
                            message: "Please select date of Membership",
                          },
                        ]}
                      >
                        <DatePicker
                          className="w-full"
                          format={"YYYY-MM-DD"}
                          disabled={type === 0}
                        />
                      </Form.Item>
                    </div>
                  </>
                )}
                {/* Personal Information */}
                {step === 1 && (
                  <>
                    <div className="grid grid-cols-2 grid-rows-5 gap-x-4">
                      <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[
                          {
                            required: true,
                            message: "Please input First Name",
                          },
                        ]}
                      >
                        <Input disabled />
                      </Form.Item>
                      <Form.Item label="Middle Name" name="middleName">
                        <Input disabled />
                      </Form.Item>
                      <Form.Item
                        label="Last Name"
                        name="lastName"
                        rules={[
                          {
                            required: true,
                            message: "Please input First Name",
                          },
                        ]}
                      >
                        <Input disabled />
                      </Form.Item>
                      <Form.Item label="Suffix" name="suffix">
                        <Input disabled />
                      </Form.Item>
                      <Form.Item
                        label="Date of Birth"
                        name="dateOfBirth"
                        rules={[
                          {
                            required: true,
                            message: "Please input Date of Birth",
                          },
                        ]}
                      >
                        <Input disabled />
                      </Form.Item>
                      <Form.Item
                        label="Sex"
                        name="sex"
                        rules={[
                          {
                            required: true,
                            message: "Please select your gender",
                          },
                        ]}
                      >
                        <Radio.Group disabled>
                          <Radio value={0}>Male</Radio>
                          <Radio value={1}>Female</Radio>
                        </Radio.Group>
                      </Form.Item>
                      <Form.Item
                        label="Civil Status"
                        name="civilStatus"
                        rules={[
                          {
                            required: true,
                            message: "Please select Civil Status",
                          },
                        ]}
                      >
                        <Select>
                          {civilStatusPWD.map((c) => (
                            <Select.Option value={c.id} key={c.id}>
                              {c.value}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <div></div>
                      <Form.Item
                        label="Type of Disability"
                        name="typeOfDisability"
                        rules={[
                          {
                            required: true,
                            message: "Please select Type of Disability",
                          },
                        ]}
                      >
                        <Select>
                          {typeOfDisability.map((t) => (
                            <Select.Option value={t.value} key={t.id}>
                              {t.value}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="Cause of Disability"
                        name="causeOfDisability"
                        rules={[
                          {
                            required: true,
                            message: "Please select Cause of Disability",
                          },
                        ]}
                      >
                        <Select>
                          {causeOfDisability.map((c) => (
                            <Select value={c.value} key={c.id}>
                              {c.value}
                            </Select>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                  </>
                )}
                {/*  Additional Information Section */}
                {step === 2 && (
                  <>
                    <div className="font-medium py-3 text-[18px]">
                      Residence Address
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-x-5">
                      <Form.Item>
                        <Input placeholder="House No." />
                      </Form.Item>
                      <Form.Item>
                        <Input placeholder="Street" />
                      </Form.Item>
                      <Form.Item>
                        <Input placeholder="Subdivision" />
                      </Form.Item>
                      <Form.Item name="brgyId">
                        <Input placeholder="Barangay" disabled />
                      </Form.Item>
                    </div>
                    <div className="font-medium py-3 text-[18px]">
                      Contact Details
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-x-5">
                      <Form.Item name="landlineNumber">
                        <Input placeholder="Landline Number" />
                      </Form.Item>
                      <Form.Item name="mobileNumber">
                        <Input placeholder="Mobile Number" disabled />
                      </Form.Item>
                      <Form.Item name="email">
                        <Input placeholder="Email Address" disabled />
                      </Form.Item>
                    </div>
                  </>
                )}
                {step === 3 && (
                  <>
                    <div className="grid grid-cols-2 grid-rows-3 gap-5">
                      <Form.Item
                        label="Educational Attainment"
                        name="educationalAttainment"
                        rules={[
                          {
                            required: true,
                            message:
                              "Please select your Educational Attainment",
                          },
                        ]}
                      >
                        <Select>
                          {educationalAttainment.map((s) => (
                            <Select.Option key={s.id} value={s.id}>
                              {s.value}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="Occupation"
                        name="occupation"
                        rules={[
                          {
                            required: true,
                            message: "Please select your Occupation",
                          },
                        ]}
                      >
                        <Select>
                          {occupation.map((e) => (
                            <Select.Option key={e.id} value={e.value}>
                              {e.value}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="Status of Employment"
                        name="employmentStatus"
                        rules={[
                          {
                            required: true,
                            message: "Please select your Employment Status",
                          },
                        ]}
                      >
                        <Select>
                          {statusOfEmployment.map((s) => (
                            <Select.Option key={s.id} value={s.id}>
                              {s.value}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="Category of Employment"
                        name="categoryOfEmployment"
                        rules={[
                          {
                            required: true,
                            message:
                              "Please select your Category of Employment",
                          },
                        ]}
                      >
                        <Radio.Group>
                          <Radio value="GOVERNMENT">Government</Radio>
                          <Radio value="PRIVATE">Private</Radio>
                        </Radio.Group>
                      </Form.Item>
                      <Form.Item
                        label="Types of Employment"
                        name="typeOfEmployment"
                        rules={[
                          {
                            required: true,
                            message: "Please select your Type of Employment",
                          },
                        ]}
                      >
                        <Select>
                          {typesofEmployment.map((s) => (
                            <Select.Option key={s.id} value={s.value}>
                              {s.value}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                  </>
                )}
                {step === 4 && (
                  <>
                    <div className="grid grid-cols-2 grid-rows-2 gap-5">
                      <Form.Item
                        label="Organization Affiliated"
                        name="nameOfOrganization"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Name of Organization",
                          },
                        ]}
                      >
                        <Input placeholder="Name of Organization" />
                      </Form.Item>
                      <Form.Item
                        label="Contact Person"
                        name="numberOfOrganization"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Number of Organization",
                          },
                        ]}
                      >
                        <Input placeholder="Contact Person" />
                      </Form.Item>
                      <Form.Item
                        label="Office Address"
                        name="addressOfOrganization"
                        rules={[
                          {
                            required: true,
                            message:
                              "Please input your Address of Organization",
                          },
                        ]}
                      >
                        <Input placeholder="Office Address" />
                      </Form.Item>
                    </div>
                  </>
                )}
                {step === 5 && (
                  <>
                    <div className="grid grid-cols-2 grid-rows-2 gap-x-5">
                      <Form.Item
                        label="SSS Number"
                        name="sssNumber"
                        rules={[
                          {
                            required: false,
                            message: "Please input your SSS Number",
                          },
                        ]}
                      >
                        <Input
                          placeholder="SSS Number (12-3456789-0)"
                          onChange={({ target }) => {
                            form.setFieldValue(
                              "sssNumber",
                              target.value.replace(
                                /[- #*;,.<>\{\}\[\]\\\/]|[^0-9]/gi,
                                ""
                              )
                            );
                          }}
                        />
                      </Form.Item>
                      <Form.Item
                        label="GSIS Number"
                        name="gsisNumber"
                        rules={[
                          {
                            required: false,
                            message: "Please input your GSIS Number",
                          },
                        ]}
                        onChange={({ target }) => {
                          form.setFieldValue(
                            "gsisNumber",
                            target.value.replace(
                              /[- #*;,.<>\{\}\[\]\\\/]|[^0-9]/gi,
                              ""
                            )
                          );
                        }}
                      >
                        <Input placeholder=" GSIS Number (1234-5678)" />
                      </Form.Item>
                      <Form.Item
                        label="PSN Number"
                        name="psnNumber"
                        rules={[
                          {
                            required: false,
                            message: "Please input your PSN Number",
                          },
                        ]}
                        onChange={({ target }) => {
                          form.setFieldValue(
                            "psnNumber",
                            target.value.replace(
                              /[- #*;,.<>\{\}\[\]\\\/]|[^0-9]/gi,
                              ""
                            )
                          );
                        }}
                      >
                        <Input placeholder="PSN Number" />
                      </Form.Item>
                      <Form.Item
                        label="PhilHealth Number"
                        name="philhealthNumber"
                        rules={[
                          {
                            required: false,
                            message: "Please input your PhilHealth Number",
                          },
                        ]}
                        onChange={({ target }) => {
                          form.setFieldValue(
                            "philhealthNumber",
                            target.value.replace(
                              /[- #*;,.<>\{\}\[\]\\\/]|[^0-9]/gi,
                              ""
                            )
                          );
                        }}
                      >
                        <Input placeholder="PhilHealth Number" />
                      </Form.Item>
                    </div>
                  </>
                )}
                {/* Family Composition */}
                {step === 6 && (
                  <>
                    {/* <div className="grid grid-cols-2"> */}
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
                                label="Full Name"
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
                                    message: "Missing relationship",
                                  },
                                ]}
                              >
                                <Input placeholder="relationship" />
                              </Form.Item>
                              <Form.Item
                                {...restField}
                                name={[name, "age"]}
                                label="Age"
                                rules={[
                                  {
                                    required: true,
                                    message: "Missing age",
                                  },
                                ]}
                              >
                                <Input placeholder="Age" />
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
                    {/* </div> */}
                  </>
                )}
                {step === 7 && (
                  <>
                    <Form.Item
                      label="Accomplished by"
                      name="accomplishedBy"
                      rules={[
                        {
                          required: true,
                          message: "Please select Accomplished by",
                        },
                      ]}
                    >
                      <Radio.Group>
                        <Radio value={0}>Applicant</Radio>
                        <Radio value={1}>Guardian</Radio>
                        <Radio value={2}>Representative</Radio>
                      </Radio.Group>
                    </Form.Item>
                    <div className="grid grid-cols-2 gap-x-5">
                      <Form.Item
                        label="First Name"
                        name="respondentFirstName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your First Name",
                          },
                        ]}
                      >
                        <Input
                          placeholder={`${
                            accomplish === 1
                              ? "Guardian First Name"
                              : "Representative First Name"
                          }`}
                          disabled={accomplish === 0}
                        />
                      </Form.Item>
                      <Form.Item
                        label="Middle Name"
                        name="respondentMiddleName"
                      >
                        <Input
                          placeholder={`${
                            accomplish === 1
                              ? "Guardian Middle Name"
                              : "Representative Middle Name"
                          }`}
                          disabled={accomplish === 0}
                        />
                      </Form.Item>
                      <Form.Item
                        label="Last Name"
                        name="respondentLastName"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Last Name",
                          },
                        ]}
                      >
                        <Input
                          placeholder={`${
                            accomplish === 1
                              ? "Guardian Last Name"
                              : "Representative Last Name"
                          }`}
                          disabled={accomplish === 0}
                        />
                      </Form.Item>
                    </div>
                  </>
                )}
                {step === 8 && (
                  <>
                    {/* <div className="text-[#a8a7a7]">
                      Name of Certifying Physician
                    </div> */}
                    <div className="grid grid-cols-2 grid-rows-2 gap-x-5">
                      <Form.Item
                        label="First Name"
                        name="physicianFirstName"
                        rules={[
                          {
                            required: true,
                            message: "Please input Physician First Name",
                          },
                        ]}
                      >
                        <Input placeholder="Physician First Name" />
                      </Form.Item>
                      <Form.Item label="Middle Name" name="physicianMiddleName">
                        <Input placeholder="Physician Middle Name" />
                      </Form.Item>
                      <Form.Item
                        label="Last Name"
                        name="physicianLastName"
                        rules={[
                          {
                            required: true,
                            message: "Please input Physician Last Name",
                          },
                        ]}
                      >
                        <Input placeholder="Physician Last Name" />
                      </Form.Item>
                      <Form.Item
                        label="License Number"
                        name="licenseNumber"
                        rules={[
                          {
                            required: true,
                            message: "Please input Physician License No.s",
                          },
                        ]}
                      >
                        <Input placeholder="Physician License Number" />
                      </Form.Item>
                    </div>
                  </>
                )}
                {step === 9 && (
                  <>
                    <div className="grid grid-cols-2">
                      <div>2</div>
                      <div>3</div>
                    </div>
                  </>
                )}
                <div className="px-5 py-4 w-full">
                  <div className="flex items-center justify-end gap-4">
                    <Button
                      disabled={step <= 0}
                      onClick={() => {
                        setStep((s) => s - 1);
                        setOldStep(step);
                      }}
                    >
                      Previous
                    </Button>
                    {step === 8 ? (
                      <Button type="primary" onClick={() => form.submit()}>
                        Submit
                      </Button>
                    ) : (
                      <Button type="primary" onClick={nextStep}>
                        Next
                      </Button>
                    )}
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PWDRegistration;
