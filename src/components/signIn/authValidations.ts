import { ValidType } from "../../helpers/useInput"

export const emailValidators: ValidType[] = [
  (value: any) => !value.length ? "Поле є обовязковим" : ""
  
]

export const passwordValidators: ValidType[] = [
  (value: any) => value.length < 6 ? "Потрібно ввести не менше шести символів" : ""
  
]