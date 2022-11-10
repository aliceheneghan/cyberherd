import React from 'react'
// Style
import "../scss/layout/_calendar.scss"

export default function Calendar() {
  return (
    <div class="calendar">
        <div class="month-selector">
            <div class="span-2">{"<"}</div>
            <div class="span-3">Month</div>
            <div class="span-2">{">"}</div>
        </div>
    </div>
  )
}
