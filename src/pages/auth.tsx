import React from "react";

import { LoginForm } from "../components/signIn/loginForm";
import { RegistrationForm } from "../components/signIn/registrationForm";

export const Auth: React.FC = () => {
  return <>
    <div className="row">
      <div className="col"><LoginForm /></div>

      <div className="col"><RegistrationForm /></div>
    </div>
  </>
}