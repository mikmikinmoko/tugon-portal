import { logo2 } from "../../../../helpers/image";

const Logo = ({ width, height }) => {
  return (
    <a href="#">
      <img src={logo2} alt="Logo Tugon" width={width} height={height} />
    </a>
  );
};

export default Logo;
