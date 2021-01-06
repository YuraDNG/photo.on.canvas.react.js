import React from "react"
import "./preloader.css"

export const Preloader = (): JSX.Element => {

  var body = document.querySelector('body')
  window.onload = () => {
    body?.classList.add("loaded_hiding")
    setTimeout(() => {
      body?.classList.add("loaded")
      body?.classList.remove("loaded_hiding")
    }, 1000)
  }

  return <>
    <div className="preloader">
      <div className="preloader-row">
        <div className="preloader-item"></div>
        <div className="preloader-item"></div>
      </div>
    </div>
  </>
}