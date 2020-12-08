import React, { useEffect, useState } from "react"

export type ValidType = {
  (value: any): string
}

export const useInput = (initValue: any, validations?: ValidType[] ) => {
  const [value, setValue] = useState(initValue)
  const [wasFocused, setFocused] = useState(false)
  const [error, setError] = useState("")
  const [style, setStyle] = useState({})
  
  const set = (data: any) => {
    setValue(data)
  }

  useEffect(() => {
    if (wasFocused) {
      validations?.map(validator => {
        setError(validator(value))
      })
    }
  }, [value, wasFocused])

  useEffect(() => {
    if (error.length !== 0) {
      setStyle({
        borderColor: "red",
        borderWidth: "2px",
        borderStyle: "solid"
      })
    } else if (error.length == 0 && wasFocused){
      setStyle({
        borderColor: "#0dde0d",
        borderWidth: "2px",
        borderStyle: "solid"
      })
    }
  }, [error])

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValue(event.target.value)
  }

  const onBlur = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFocused(true) 
  }

  return {
    value,
    set,
    error,
    onChange,
    onBlur,
    style
  }
}