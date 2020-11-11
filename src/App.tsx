import React from "react"
import { Route } from "react-router"

import { Navbar } from "./components/navigation/navbar"

import { Home } from "./pages/home"
import { Gallery } from "./pages/gallery"
import { MakeOrder } from "./pages/makeOrder"
import { Auth } from "./pages/auth"

import "./custom.css"
import { Orders } from "./components/orders/orders"
import { Users } from "./components/users/users"
import { EmailSettings } from "./components/emailSettings"

export const App: React.FC = () => {
  return <>
    <div className="container-fluid h-100">
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route exact path="/MakeOrder" component={MakeOrder} />
      <Route exact path="/Gallery" component={Gallery} />
      <Route exact path="/Auth" component={Auth} />
      <Route exact path="/AdminPanel/Orders" component={Orders} />
      <Route exact path="/AdminPanel/Users" component={Users} />
      <Route exact path="/AdminPanel/EmailSettings" component={EmailSettings} />
    </div>
  </>
}




