import React from "react"

export const Alert = (props: {text: string}): JSX.Element => {

  return <>
    <div 
      className="alert alert-dark" 
      role="alert"
      style={{marginTop: "10px"}}
    >
      <h4>{props.text}</h4>
    </div>
  </>
}