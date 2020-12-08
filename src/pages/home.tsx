import React from "react"
import { Reviews } from "../components/home/reviews"
import { Video } from "../components/home/video"
import { Text } from "../components/home/text"

import "./home.css"

export const Home: React.FC = () => {
  

  return <>
    <div className="row block text-block">
      <Text />
    </div>

    <div className="row block">
      <Video />
    </div> 

    <div className="row block">
      <Reviews />
    </div>
  </>
}