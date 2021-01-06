import React from "react"

import "./modalWindow.css"

export const ModalWindow = (props: {html: JSX.Element, setIsOpen: any}): JSX.Element => {
  return <>
      <div className="custom-modal" onClick={e => props.setIsOpen(false)}>
        <div className="custom-modal-body">
          {props.html}
        </div>
      </div>
  </>
}