import React from "react";
import { NavLink } from "react-router-dom";

import "./adminNav.css"

export const AdminNav: React.FC = () => {
  return <>
    <ul className="admin-ul">
      <li className="admin-li">
        <NavLink className="nav-link" to="/AdminPanel/Orders" exact>
          <span className="material-icons">view_list</span>
          Список замовлень
        </NavLink>
      </li>

      <li className="admin-li">
        <NavLink className="nav-link" to="/AdminPanel/Users/" exact>
          <span className="material-icons">people_alt</span>
          Управління користувачами
        </NavLink>
      </li>

      <li className="admin-li">
        <NavLink className="nav-link" to="/AdminPanel/EmailSettings/" exact>
          <span className="material-icons">settings</span>
          Налаштування Email
        </NavLink>
      </li>
    </ul>
  </>
}