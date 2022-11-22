// libraries
import React from 'react';

// components
import UnstyledLink from './UnstyledLink';

export default function Cell({ className, children, handler, cb }) {
  return (
    <div className={className} onClick={() => handler(cb)}>
      <UnstyledLink to='/'>{children}</UnstyledLink>
    </div>
  );
}
