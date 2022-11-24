// components
import UnstyledLink from './UnstyledLink';

export default function Cell({ className, children, handler, cb, date }) {
  // handlers
  const dateOnClick = () => {
    console.log(date);
  }

  if (className === "date-cell") {
    return (
      <div className={className}  onClick={dateOnClick}>
        <UnstyledLink to={`/results/${date}`}>{children}</UnstyledLink>
      </div>
    );
  } else {
    return (
      <div onClick={() => handler(cb)}>
        {children}
      </div>
    );
  }
  
}
