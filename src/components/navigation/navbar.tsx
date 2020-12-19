import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store";
import { AdminNav } from "./adminNav"

import "./navbar.css"

export const Navbar: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  const adminPanelLink = () => {
    if (isAuthenticated) {
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

  const loginPanelLink = () => {
    if (isAuthenticated) {
      return <>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/Auth" exact>
              <span className="material-icons">logout</span>
              Вийти
            </NavLink>
          </li>
        </ul>
      </>
    } else {
      return <>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/Auth" exact>
              <span className="material-icons">login</span>
              Увійти
            </NavLink>
          </li>
        </ul>
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

          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/Gallery" exact>
              <span className="material-icons">photo_library</span>
              Галерея
            </NavLink>
          </li> */}

          {adminPanelLink()}
        </ul>

        {loginPanelLink()}
      </div>
    </nav>
  </>
}