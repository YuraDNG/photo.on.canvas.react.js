import React from "react"
import { useDispatch } from "react-redux"
import { loginThunk } from "../../store/login/actions"
import { SubmitButton } from "../general/submitButton/submitButton"
import { useInput } from "../../helpers/useInput"

import "./index.css"
import { emailValidators } from "./loginValidation"

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch()
  const email = useInput("", emailValidators)
  const password = useInput("")

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(loginThunk({email: email.value, password: password.value}))
  }

  return <>
    <form onSubmit={submitHandler}>
      <label className="auth-label">LOG IN</label>

      <div className="form-group auth-group">
        <span className="material-icons auth-icon">alternate_email</span>
        <input
          type="email"
          className="form-control auth-input"
          placeholder="Введіть свій Email"
          value={email.value}
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
        />
      </div>

      {email.isFocused && email.errors.length != 0 &&
        <span className="error-span">{email.errors}</span>
      }
      
      <div className="form-group auth-group">
        <span className="material-icons auth-icon">enhanced_encryption</span>
        <input
          type="password"
          className="form-control auth-input"
          placeholder="Введіть пароль"
          value={password.value}
          onChange={e => password.onChange(e)}
          onBlur={e => password.onBlur(e)}
        />
      </div>

      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label">Запамятати</label>
      </div>

      <>
        <SubmitButton text="Увійти" />
      </>

    </form>
  </>
}