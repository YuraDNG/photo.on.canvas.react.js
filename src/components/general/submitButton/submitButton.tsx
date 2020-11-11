import React from "react"
import "./submitButton.css"

export const SubmitButton = (props: {text: string}): JSX.Element => {

  return <>
    <button type="submit" className="btn">{props.text}</button>
  </>
}