import "../../../styles/Header.css";

export default function SubMenuWrapper({ handler, id, children }) {
  return (
    <li
      onMouseEnter={handler.bind(this, id)}
      onMouseLeave={handler.bind(this, null)}
    >
      {children}
    </li>
  );
}
