/* eslint-disable react/prop-types */
const Button = ({ text, color, children }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};
Button.defaultProps = {
  color: 'black',
};

export default Button;
