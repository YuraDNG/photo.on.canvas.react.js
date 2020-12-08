import React from "react";
import { EmailSettings } from "../components/settings/emailSettings"
import { InstaSettings } from "../components/settings/instaSettings";

export const Settings: React.FC = () => {
  return <>
    <div className="row">
      <div className="col-auto">
        <EmailSettings />
      </div>

      <div className="col-auto">
        <InstaSettings />
      </div>
    </div>
  </>
}