import PropTypes from "prop-types";

export const Button = (props) => {
  return (
    <button
      className={`${props.variant === "answer" && "answer "} ${
        props.selected && "selected"
      }`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  selected: PropTypes.bool,
};
