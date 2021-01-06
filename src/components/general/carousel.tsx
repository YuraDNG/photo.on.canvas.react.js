import React from "react"
import { Item } from "../home/instagram/item"

import "./carousel.css"

export const Carousel = (props: { arr: any[], id: string }): JSX.Element => {
  var href = '#' + props.id + "carousel"
  var count = 0

  var addClass = () => {
    document.querySelector('#'+ props.id +':first-child')?.classList.add("active")
  }

  return <>
    <div id={props.id + "carousel"} className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        {props.arr.map((item) =>
          <div id={props.id} key={count++} className="carousel-item">
            <Item item={item} />
          </div>
        )}
        {addClass()}
      </div>

      <a className="carousel-control-prev" href={href} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href={href} role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </>
}