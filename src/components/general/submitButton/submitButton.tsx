import React from "react"
import "./submitButton.css"

export const SubmitButton = (props: {text: string, disabled?: boolean}): JSX.Element => {

  return <>
    <button 
      type="submit" 
      className="btn"
      disabled={props.disabled}
    >{props.text}</button>
  </>
}