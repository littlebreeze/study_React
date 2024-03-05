/* eslint-disable react/prop-types */
const Button = ({ text, color, children }) => {
  const onClickBtn = (e) => {
    console.log(e);
  };
  return (
    <button
      onClick={onClickBtn}
      // onMouseEnter={onClickBtn}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};
Button.defaultProps = {
  color: 'black',
};

export default Button;
