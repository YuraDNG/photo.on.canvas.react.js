import { ValidType } from "../../helpers/useInput"

export const usernameValidators: ValidType[] = [
  (value: any) => !value.length ? "Поле є обовязковим" : ""
  
]

export const passwordValidators: ValidType[] = [
  (value: any) => !value.length ? "Поле є обовязковим" : ""
  
]

export const receiversValidators: ValidType[] = [
  
  
]