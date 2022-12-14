export default function Cell({ handler, handlerParam, className, children }) {
  return <div onClick={() => handler(handlerParam)} className={className}>{children}</div>;
}