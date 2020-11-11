import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../store/registration/actions";
import { IRegister } from "../../store/registration/types";
import { SubmitButton } from "../general/submitButton/submitButton";

export const RegistrationForm: React.FC = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    let data: IRegister = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }
    dispatch(registerThunk(data))
  }

  return <>
    <form onSubmit={submitHandler}>
      <label className="auth-label">SIGN UP</label>

      <div className="form-group auth-group">
        <span className="material-icons auth-icon">alternate_email</span>
        <input
          type="email"
          className="form-control auth-input"
          placeholder="Введіть свій Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group auth-group">
        <span className="material-icons auth-icon">enhanced_encryption</span>
        <input
          type="password"
          className="form-control auth-input"
          placeholder="Введіть пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div className="form-group auth-group">
        <span className="material-icons auth-icon">no_encryption</span>
        <input
          type="password"
          className="form-control auth-input"
          placeholder="Підтвердіть пароль"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </div>

      <SubmitButton text="Зареєструватись"/>
    </form>
  </>
}