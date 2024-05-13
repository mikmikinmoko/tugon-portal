import { Steps } from "antd";
const Step = ({ current, items }) => {
  return (
    <Steps
      className="px-10"
      direction="vertical"
      size="small"
      current={current}
      items={items}
    />
  );
};

export default Step;
