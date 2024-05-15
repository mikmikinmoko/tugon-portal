import { footer2 } from "../../../../helpers/image";

const Page5 = () => {
  return (
    <section className="h-full w-full bg-[url('src/Assets/img/page5.png')] py-24 px-16"></section>
  );
};
const Footer = ({ children }) => {
  return <div className=" bg-[#001862] p-10">"{children}</div>;
};

export { Page5, Footer };
