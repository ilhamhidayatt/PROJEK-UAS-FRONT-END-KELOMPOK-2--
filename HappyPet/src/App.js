import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComponent } from './components'
import { Home2, Home, Contact, Sukses } from './pages'
import About from './pages/About';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <NavbarComponent />
          <main>
            <Switch>
            <Route  path="/home2" component={Home2} exact/>
              <Route  path="/home" component={Home} exact/>
              <Route  path="/contact" component={Contact} exact/>
              <Route  path="/about" component={About} exact/>
              <Route  path="/sukses" component={Sukses} exact/>
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}
