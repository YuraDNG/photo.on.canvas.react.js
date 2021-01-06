import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useInput } from "../../helpers/useInput";
import { registerThunk } from "../../store/registration/actions";
import { IRegister } from "../../store/registration/types";
import { SubmitButton } from "../general/submitButton/submitButton";
import { emailValidators, passwordValidators } from "./authValidations";

export const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch()
  const email = useInput("", emailValidators)
  const password = useInput("", passwordValidators)
  const confirmPassword = useInput("", passwordValidators)

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    let data: IRegister = {
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    }
    dispatch(registerThunk(data))
  }

  return <>
    <form onSubmit={submitHandler}>
      <label className="auth-label">SIGN UP</label>

      <div className="form-group form-input-group" style={email.style}>
        <span className="material-icons auth-icon">alternate_email</span>
        <input
          type="email"
          className="form-control auth-input"
          placeholder="Введіть свій Email"
          value={email.value}
          onChange={e => email.onChange(e)}
          onFocus={e => email.onBlur(e)}
        />
      </div>

      {email.error.length !== 0 &&
        <span className="error-span">{email.error}</span>
      }

      <div className="form-group form-input-group" style={password.style}>
        <span className="material-icons auth-icon">enhanced_encryption</span>
        <input
          type="password"
          className="form-control auth-input"
          placeholder="Введіть пароль"
          value={password.value}
          onChange={e => password.onChange(e)}
          onFocus={e => password.onBlur(e)}
        />
      </div>

      {password.error.length !== 0 &&
        <span className="error-span">{password.error}</span>
      }

      <div className="form-group form-input-group" style={confirmPassword.style}>
        <span className="material-icons auth-icon">no_encryption</span>
        <input
          type="password"
          className="form-control auth-input"
          placeholder="Підтвердіть пароль"
          value={confirmPassword.value}
          onChange={e => confirmPassword.onChange(e)}
          onFocus={e => confirmPassword.onBlur(e)}
        />
      </div>

      {password.error.length !== 0 &&
        <span className="error-span">{confirmPassword.error}</span>
      }

      <SubmitButton 
        text="Зареєструватись"
        disabled={
          email.disabledButton ||
          password.disabledButton ||
          confirmPassword.disabledButton
        }
      />
    </form>
  </>
}