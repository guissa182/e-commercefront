/* Controla as rotas em que cada compenente será renderizado */
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  )
}

export default Routes
