import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} className={style}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  style: "",
};

export default Button;
