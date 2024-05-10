import { Steps } from "antd";
// const description = "This is a description.";
const Step = ({ step }) => {
  return (
    <Steps
      direction="vertical"
      current={step}
      items={[
        {
          title: "Personal Information",
        },
        {
          title: "Additional Information",
        },
        {
          title: "Family Composition",
        },
        {
          title: "Membership to Senior Citizens Association",
        },
        {
          title: "Document",
        },
      ]}
    />
  );
};

export default Step;
