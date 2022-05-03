/* Controla as rotas em que cada compenente será renderizado */
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home'
import Cart from '../pages/cart'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cart" component={Cart} />
    </BrowserRouter>
  )
}

export default Routes
