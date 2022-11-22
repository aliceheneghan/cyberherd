// libraries
import { useState} from 'react';

// components
import UnstyledLink from './UnstyledLink';

export default function Cell({ className, children, handler, cb, dateObject }) {
 

  // handler
  const dateOnClick = (e) => {
    console.log(dateObject);
  };

  if (className === "date-cell") {
    return (
      <div className={className}  onClick={dateOnClick}>
        <UnstyledLink to='/'>{children}</UnstyledLink>
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
