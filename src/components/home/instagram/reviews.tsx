import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store"
import { Item } from "./item"
import { getStoriesThunk } from "../../../store/instagram/actions"

import "./stories.css"
import "./carousel.css"

export const Reviews: React.FC = () => {
  const dispatch = useDispatch()
  const stories = useSelector((state: RootState) => state.instagram.stories)
  var count = 0

  useEffect(() => {
    dispatch(getStoriesThunk())
  }, [dispatch])

  var addClass = () => {
    document.querySelector('#rev-item:first-child')?.classList.add("active")
  }

  return <>
    <div id="carousel-rev" className="carousel slide" data-ride="carousel">
      <h5 className="carousel-label">Відгуки</h5>

      <div className="carousel-inner">

        {stories.filter(x => x.category === "відгуки").map((item) =>
          <div id="rev-item" key={count++} className="carousel-item">
            {addClass()}
            <Item item={item} />
          </div>
        )}
      </div>

      <a className="carousel-control-prev" href="#carousel-rev" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel-rev" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </>
}