import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { logo2 } from "../../../../helpers/image";

const Logo = ({ width, height }) => {
  return (
    <NavLink to="/">
      <img src={logo2} alt="Logo Tugon" width={width} height={height} />
    </NavLink>
  );
};

Logo.propTypes = {
  width: PropTypes.node,
  height: PropTypes.node,
};
export default Logo;
