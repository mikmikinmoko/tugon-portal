import { Button, DatePicker, Form, Input, Select } from "antd";
import TitleForm from "../../../../../Reusable/TitleForm";
import { useEffect } from "react";
import { suffix } from "../../../../../Assets/constant/values";
import { ageCalc } from "../../../../../helpers/ageCalc";
import dayjs from "dayjs";
import refbrgy from "../../../../../Assets/Resources/json/refbrgy.json";
import refcitymun from "../../../../../Assets/Resources/json/refcitymun.json";
import refprovince from "../../../../../Assets/Resources/json/refprovince.json";
import refregion from "../../../../../Assets/Resources/json/refregion.json";

const EditProfileForm = ({ onFinish, form, getProfile }) => {
  // const lgu = Form.useWatch("regionId", editForm);
  // const province = Form.useWatch("provinceId", editForm);
  // const city = Form.useWatch("cityId", editForm);

  useEffect(() => {
    const { birthdate, primaryEmail, primaryMobile, ...rest } =
      getProfile.data?.data;
    form.setFieldsValue({
      ...rest,
      age: ageCalc(birthdate),
      birthdate: dayjs(birthdate),
      primaryEmail: primaryEmail,
      primaryMobile: primaryMobile,
    });
  }, []);

  return (
    // <div>asd</div>
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <div className="px-2 py-4">
        {/* <TitleForm>Personal Information</TitleForm> */}
        <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3">
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
          <Form.Item label="Birthdate" name="birthdate">
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
        {/* <TitleForm>Address Information</TitleForm> */}
        {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
                .filter((p) => p.regCode === lgu)
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
                .filter((c) => c.provCode === province)
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
                .filter((b) => b.citymunCode === city)
                .map((b) => (
                  <Select.Option key={b.id} value={b.brgyCode}>
                    {b.brgyDesc}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
        </div> */}
        {/* <TitleForm>Other Information</TitleForm> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Form.Item label="Email" name="primaryEmail">
            <Input />
          </Form.Item>
          <Form.Item label="Mobile Number" name="primaryMobile">
            <Input />
          </Form.Item>
        </div>
      </div>
      <div className="flex items-end justify-end px-5 gap-2">
        {/* <Button
          disabled={false}
          type="primary"
          ghost
          onClick={() => setEnabledForms(!enabledForms)}
        >
          {enabledForms ? "Edit Profile" : "Cancel Edit"}
        </Button> */}

        <Button
          htmlType="submit"
          type="primary"
          onClick={() => form.submit()}
          loading={getProfile.isLoading}
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default EditProfileForm;
