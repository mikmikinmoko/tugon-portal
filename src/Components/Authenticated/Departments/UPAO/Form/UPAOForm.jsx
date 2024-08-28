import { Form, Input } from "antd";
import HeaderRegistration from "../../../../../Reusable/HeaderRegistration";
import TitleForm from "../../../../../Reusable/TitleForm";

const UPAOForm = () => {
  return (
    <section className="w-full h-screen font-['Poppins'] px-5 lg:px-32">
      <div className=" flex-col flex">
        <HeaderRegistration>Urban Poor Affair Office</HeaderRegistration>
      </div>
      <Form layout="vertical">
        <div className="py-5 grid grid-cols-2 gap-10">
          <div>
            <Form.Item
              name="controlNumber"
              label="Control Number"
              rules={[
                {
                  required: true,
                  message: "Please input control number",
                },
              ]}
            >
              <Input placeholder="Control Number" className="w-52" />
            </Form.Item>
            <TitleForm>Personal Information</TitleForm>

            <Form.Item
              label="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              label="Middle Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Middle Name" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>
          <div>2</div>
        </div>
      </Form>
    </section>
  );
};

export default UPAOForm;
