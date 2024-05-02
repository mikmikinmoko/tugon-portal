import PropTypes from "prop-types";
const TitleForm = ({ children }) => {
  return (
    <div className="text-[20px] text-[#234F8B] font-semibold">{children}</div>
  );
};

TitleForm.propTypes = {
  children: PropTypes.node,
};

export default TitleForm;
