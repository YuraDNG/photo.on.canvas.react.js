import React, { useEffect } from "react"
import { Reviews } from "../components/home/instagram/reviews"
import { Vizualizations } from "../components/home/instagram/vizualizations"
import { Video } from "../components/home/video"
import { Text } from "../components/home/text"
import { Prices } from "../components/home/instagram/prices"
import { RootState } from "../store"
import { useDispatch, useSelector } from "react-redux"
import { getStoriesThunk } from "../store/instagram/actions"

import "./home.css"

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  const showLoader = useSelector((state: RootState) => state.instagram.showLoader)

  useEffect(() => {
    dispatch(getStoriesThunk())
  }, [dispatch])

  return <>
    <div className="home">
      <div className="row block text-block">
        <Text />
      </div>

      <div className="row">
        {/* <div className="col-6 block"><Video /></div> */}
        <div className="col-7 block"><Prices /></div>
        <div className="col-5 block">
          <Vizualizations />
          <Reviews />
        </div>
      </div>

      <div className="row block">
        {/* <Reviews /> */}
        {/* <Vizualizations /> */}
      </div>
    </div>
  </>


}