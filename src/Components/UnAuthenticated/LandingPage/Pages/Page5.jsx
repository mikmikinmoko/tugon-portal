import { footer2 } from "../../../../helpers/image";

const Page5 = () => {
  return (
    <section className="h-full w-full bg-[url('src/Assets/img/page5.png')] py-24 px-16"></section>
  );
};
const Footer = ({ children }) => {
  return (
    <footer className="w-full bg-[#001862] text-white py-7">
      <div className="container mx-auto text-center">
        © 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export { Page5, Footer };
