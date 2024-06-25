import { Button, DatePicker, Form, Input, Select } from "antd";
import TitleForm from "../../../../../Reusable/TitleForm";
import { useEffect, useState } from "react";
import { useCitizenAuthStore } from "../../../../../store/storage/useAuth";
import { suffix } from "../../../../../Assets/constant/values";
import { ageCalc } from "../../../../../helpers/ageCalc";
import dayjs from "dayjs";
import refbrgy from "../../../../../Assets/Resources/json/refbrgy.json";
import refcitymun from "../../../../../Assets/Resources/json/refcitymun.json";
import refprovince from "../../../../../Assets/Resources/json/refprovince.json";
import refregion from "../../../../../Assets/Resources/json/refregion.json";

const EditProfileForm = () => {
  const [editForm] = Form.useForm();
  const [enabledForms, setEnabledForms] = useState(true);
  const { userData } = useCitizenAuthStore();
  console.log(userData);

  useEffect(() => {
    const { birthdate, ...rest } = userData;
    editForm.setFieldsValue({
      ...rest,
      age: ageCalc(birthdate),
      birthdate: dayjs(birthdate),
    });
  }, [userData, enabledForms]);

  //   useEffect(() => {
  //     const { birthdate, ...rest } = userData;
  //     editForm.setFieldsValue({
  //       ...rest,
  //       age: ageCalc(birthdate),
  //       birthdate: dayjs(birthdate),
  //     });
  //   }, [enabledForms]);
  const onFinish = (values) => {
    const { birthdate, ...rest } = values;
    console.log(rest);
    console.log(dayjs(birthdate).format("YYYY-MM-DD"));
  };

  return (
    <Form
      layout="vertical"
      form={editForm}
      disabled={enabledForms}
      onFinish={onFinish}
    >
      <div className="px-2 py-4">
        <TitleForm>Personal Information</TitleForm>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Form.Item label="First Name" name="firstName">
            <Input />
          </Form.Item>
          <Form.Item label="Middle Name" name="middleName">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName">
            <Input />
          </Form.Item>
          <Form.Item label="Suffix" name="suffix">
            <Select>
              {suffix.map((s) => (
                <Select.Option value={s.value} key={s.id}>
                  {s.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Age" name="birthdate">
            <DatePicker className="w-full" format="YYYY-MM-DD" />
          </Form.Item>
          <Form.Item label="Age" name="age">
            <Input />
          </Form.Item>
          <Form.Item label="Sex" name="sex">
            <Select>
              <Select.Option value="0">Male</Select.Option>
              <Select.Option value="1">Female</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <TitleForm>Address Information</TitleForm>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Form.Item label="Region" name="regionId">
            <Select>
              {refregion.map((s) => (
                <Select.Option key={s.id} value={s.regCode}>
                  {s.regDesc}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Province" name="provinceId">
            <Select>
              {refprovince
                .filter((p) => p.regCode === userData.regionId)
                .map((s) => (
                  <Select.Option key={s.id} value={s.provCode}>
                    {s.provDesc}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item label="City/Municipality" name="cityId">
            <Select>
              {refcitymun
                .filter((c) => c.provCode === userData.provinceId)
                .map((c) => (
                  <Select.Option key={c.id} value={c.citymunCode}>
                    {c.citymunDesc}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item label="Barangay" name="brgyId">
            <Select>
              {refbrgy
                .filter((b) => b.citymunCode === userData.cityId)
                .map((b) => (
                  <Select.Option key={b.id} value={b.brgyCode}>
                    {b.brgyDesc}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
        </div>
        <TitleForm>Other Information</TitleForm>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Mobile Number" name="mobileNumber">
            <Input />
          </Form.Item>
        </div>
      </div>
      <div className="flex items-end justify-end px-5 gap-2">
        <Button
          disabled={false}
          type="primary"
          ghost
          onClick={() => setEnabledForms(!enabledForms)}
        >
          {enabledForms ? "Edit Profile" : "Cancel Edit"}
        </Button>

        <Button
          htmlType="submit"
          type="primary"
          onClick={() => editForm.submit()}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default EditProfileForm;
