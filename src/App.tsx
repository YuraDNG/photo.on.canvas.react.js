import React from "react"
import { Route } from "react-router"

import { Navbar } from "./components/navigation/navbar"

import { Home } from "./pages/home"
import { Gallery } from "./pages/gallery"
import { MakeOrder } from "./pages/makeOrder"
import { Auth } from "./pages/auth"
import { Settings } from "./pages/settings"

import { Orders } from "./components/orders/orders"
import { Users } from "./components/users/users"


import "./custom.css"
import "./css/form.css"
import "./css/button.css"
import { Preloader } from "./components/general/preloader/preloader"

export const App: React.FC = () => {
  return <>
    <Preloader />
    
    <div className="container-fluid h-100">
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route exact path="/MakeOrder" component={MakeOrder} />
      <Route exact path="/Gallery" component={Gallery} />
      <Route exact path="/Auth" component={Auth} />
      <Route exact path="/AdminPanel/Orders" component={Orders} />
      <Route exact path="/AdminPanel/Users" component={Users} />
      <Route exact path="/AdminPanel/Settings" component={Settings} />
    </div>
  </>
}




