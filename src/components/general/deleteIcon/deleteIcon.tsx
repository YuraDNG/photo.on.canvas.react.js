import React from "react"
import "./deleteIcon.css"

export const DeleteIcon = (props: {onClickHandler: any}): JSX.Element => {

  return <>
    <span className="material-icons delete-icon" onClick={props.onClickHandler}>delete_forever</span>
  </>
}


