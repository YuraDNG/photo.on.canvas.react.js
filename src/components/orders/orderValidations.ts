import { ValidType } from "../../helpers/useInput"

export const nameValidators: ValidType[] = [
  (value: any) => !value.length ? "Поле є обовязковим" : ""
  
]

export const phoneValidators: ValidType[] = [
  (value: any) => !value.length ? "Поле є обовязковим" : ""
  
]

export const addressValidators: ValidType[] = [
  (value: any) => !value.length ? "Поле є обовязковим" : ""
  
]

export const canvasIdValidators: ValidType[] = [
  (value: any) => !value.length ? "Поле є обовязковим" : ""
  
]