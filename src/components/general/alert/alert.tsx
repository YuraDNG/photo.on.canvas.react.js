import React, { useState } from "react"

import "./alert.css"

export const Alert = (props: { text: string, display: boolean }): JSX.Element => {

  return <>
    {props.display &&
      <div
        className="alert red-alert"
        role="alert"
      >
        <h4>{props.text}</h4>
      </div>
    }
  </>
}