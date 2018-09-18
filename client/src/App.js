import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Menu from './components/Menu'
import Food from './components/Food'
import ProtectedRoute from './components/ProtectedRoute'


const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} /> 
      <ProtectedRoute path="/menu" component={Menu} />
      <Route path="/about" component={About} />
      <ProtectedRoute exact path="/foods/:id" component={Food} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
)

export default App
