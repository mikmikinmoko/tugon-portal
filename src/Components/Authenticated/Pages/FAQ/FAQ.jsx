import { Collapse } from "antd";
import Title from "../../../../Reusable/Title";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "Frequently Ask Question's",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Frequently Ask Question's",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Frequently Ask Question's",
    children: <p>{text}</p>,
  },
  {
    key: "4",
    label: "Frequently Ask Question's",
    children: <p>{text}</p>,
  },
  {
    key: "5",
    label: "Frequently Ask Question's",
    children: <p>{text}</p>,
  },
  {
    key: "6",
    label: "Frequently Ask Question's",
    children: <p>{text}</p>,
  },
];

const FAQ = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="font-['Poppins'] w-full h-full">
      <div className="p-5 lg:py-8 lg:px-32">
        <div className="py-5">
          <Title>FAQ</Title>
        </div>
        <Collapse
          items={items}
          accordion
          defaultActiveKey={["1"]}
          onChange={onChange}
          className="font-['Poppins']"
        />
      </div>
    </div>
  );
};

export default FAQ;
