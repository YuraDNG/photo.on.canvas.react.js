import React, { useState } from "react"
import { IInstaStory } from "../../../store/instagram/types"
import { ModalWindow } from "../../general/modalWindow/modalWindow"

import "./item.css"

export const Item = (props: {item: IInstaStory}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return <>
    <img className="story-img" onClick={e => setIsOpen(true)} src={props.item.imageUri} alt="..." />
    {isOpen &&
      <ModalWindow html={
        props.item.videoUri !== null ?
          <video className="item" src={props.item.videoUri} autoPlay={true} /> :
          <img className="item" src={props.item.imageUri} alt="..." />
      } setIsOpen={setIsOpen} />
    }
  </>
}