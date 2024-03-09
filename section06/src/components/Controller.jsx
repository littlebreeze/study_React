const Controller = ({ onClickHandler }) => {
  return (
    <div>
      <button onClick={() => onClickHandler(-1)}>
        -1
      </button>
      <button onClick={() => onClickHandler(-10)}>
        -10
      </button>
      <button
        onClick={() => onClickHandler(-100)}
      >
        -100
      </button>
      <button
        onClick={() => onClickHandler(+100)}
      >
        +100
      </button>
      <button onClick={() => onClickHandler(+10)}>
        +10
      </button>
      <button onClick={() => onClickHandler(+1)}>
        +1
      </button>
    </div>
  );
};

export default Controller;
