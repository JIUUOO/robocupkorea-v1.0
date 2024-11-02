import "../../../styles/Header.css";

export default function MainMenuWrapper({ handler, id, children }) {
  return (
    <div
      onMouseEnter={handler.bind(this, id)}
      onMouseLeave={handler.bind(this, null)}
      className="dropdown__head"
    >
      {children}
    </div>
  );
}
