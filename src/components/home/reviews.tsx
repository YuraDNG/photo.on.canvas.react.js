import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store"
import { getInstaStoriesThunk } from "../../store/instagram/actions"
import { ModalWindow } from "../general/modalWindow/modalWindow"

import "./reviews.css"

export const Reviews: React.FC = () => {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const stories = useSelector((state: RootState) => state.instagram.instaData.instaStories)

  useEffect(() => {
    dispatch(getInstaStoriesThunk("відгуки"))
  }, [dispatch])

  return <>
    {stories.map((story) =>
      <>
        <img className="review-img" onClick={e => setIsOpen(true)} src={story.imgURL} alt="..." />
        {isOpen &&
          <ModalWindow html={
            story.videoURL !== null ?
              <video src={story.videoURL} width="260" /> :
              <img src={story.imgURL} width="260" alt="..." />
          } setIsOpen={setIsOpen} />
        }
      </>
    )}
  </>
}