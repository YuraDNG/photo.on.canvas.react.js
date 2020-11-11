import React from "react"
import { Alert } from "./alert"
import { Spinner } from "./spinner"

type generalType = {
  showLoader: boolean,
  showAlert: boolean,
  text: string
}

export const General = (props: generalType): JSX.Element => {
  return <>
    {props.showLoader ?
      <Spinner />
    :
    props.showAlert &&
      <Alert text={props.text}/>
    } 
  </>
}

