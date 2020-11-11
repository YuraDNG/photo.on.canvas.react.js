import React from "react";
import { NavLink } from "react-router-dom";
import { AdminNav } from "./adminNav"

import "./navbar.css"

export const Navbar: React.FC = () => {

  const adminPanelLink = () => {
    if (true) {
      return <>
        <div className="dropdown">
          <li className="nav-item active-item">
            <div className="nav-link link">
              <span className="material-icons">admin_panel_settings</span>
              Панель Адміністратора
            </div>
          </li>

          <div className="dropdown-content">
            <AdminNav />
          </div>
        </div>
      </>
    }
  }

  return <>
    <nav className="nav navbar-expand-lg">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-icon">Menu</span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              <span className="material-icons">home</span>
              Головна
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/MakeOrder" exact>
              <span className="material-icons">add_shopping_cart</span>
              Замовити картину
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Gallery" exact>
              <span className="material-icons">photo_library</span>
              Галерея
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Auth" exact>
              <span className="material-icons">login</span>
              Увійти
            </NavLink>
          </li>

          {adminPanelLink()}
        </ul>
      </div>
    </nav>
  </>
}