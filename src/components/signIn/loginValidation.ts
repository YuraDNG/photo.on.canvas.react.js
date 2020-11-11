import { ValidType } from "../../helpers/useInput"

export const emailValidators: ValidType[] = [
  (value: any) => !value.length ? "Поле є обовязковим" : ""
  
]

