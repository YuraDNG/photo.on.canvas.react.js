import React from "react"

import "./video.css"

export const Video: React.FC = () => {

  return <>
    <video className="video video-item" src="./Video/Presentation.mp4" controls={true} />
  </>
}