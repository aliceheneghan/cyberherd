// packages
import React from 'react';

export default function Cell({ className, children, handler, cb}) {
  return (
    <div className={className} onClick={() => handler(cb)}>{children}</div>
  )
}
