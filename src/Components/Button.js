export default function Button({ Children, style, className }) {
  const buttonStyle = {
    background: "blue",
    padding: "10px 15px",
    color: "white",
    borderRadius: "5px",
    border: "none",
  };
  return (
    <div>
      <button style={style ? style : buttonStyle} className={className}>
        {Children}
      </button>
    </div>
  );
}
