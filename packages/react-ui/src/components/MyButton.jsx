import "./Button.css";
export default function Button({ type, children }) {
  let _type = type || "primary";
  return <button className={_type}>{children}</button>;
}
