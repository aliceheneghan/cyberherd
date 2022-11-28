export default function Cell({ children, handler, cb }) {
  return <div onClick={() => handler(cb)}>{children}</div>;
}
