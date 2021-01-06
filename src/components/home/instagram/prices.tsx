import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store"
import { getStoriesThunk } from "../../../store/instagram/actions"

import "./prices.css"

export const Prices: React.FC = () => {
  const dispatch = useDispatch()
  const stories = useSelector((state: RootState) => state.instagram.stories)

  useEffect(() => {
    dispatch(getStoriesThunk())
  }, [dispatch])

  return <>
    {stories.filter(x => x.category === "ЦІНИ").map((item) =>
      <img className="prices-img" src={item.imageUri} alt="..." />
    )}
  </>
}