import React, { useEffect, useState } from "react"

export type ValidType = {
  (value: any): string
}

export const useInput = (initValue: any, validations?: ValidType[] ) => {
  const [value, setValue] = useState(initValue)
  const [isFocused, setFocused] = useState(false)
  const [errors, setErrors] = useState("")

  useEffect(() => {
    validations?.map(validator => {
      setErrors(validator(value))
    })
  }, [value])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(true)
  }

  return {
    value,
    errors,
    onChange,
    onBlur,
    isFocused
  }
}