import "../styles/button.css";

export default function Button({ text, className, type, handleClick }) {
  return (
    <button
      className={`button ${className || ""}`}
      type={type ? type : "button"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
