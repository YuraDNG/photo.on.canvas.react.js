import React from "react"

import "./modalWindow.css"

export const ModalWindow = (props: {html: JSX.Element, setIsOpen: any}): JSX.Element => {
  return <>
      <div className="custom-modal">
        <div className="custom-modal-body">
          <span className="material-icons close-icon" onClick={e => props.setIsOpen(false)}>close</span>
          {props.html}
        </div>
      </div>
  </>
}