/* Controla as rotas em que cada compenente será renderizado */
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../pages/home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  )
}

export default Routes
