// libraries
import { useState } from 'react';

// style
import './_calendar.scss';

// components
import Cell from './Cell';


export default function Calendar() {
  

  return (
    <div className="calendar">
      <div className="calendar-month">
        <Cell>
          {'<'}
        </Cell>
        <Cell>Month</Cell>
        <Cell>
          {'>'}
        </Cell>
      </div>
    </div>
  );
}
