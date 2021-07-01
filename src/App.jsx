import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
// Layout
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
// Pages
import Home from "./components/home/Home"
import About from "./components/about/About"
import ClientInterface from "./components/client/ClientInterface"
import PreparatorInterface from "./components/preparator/PreparatorInterface"
// 404
import NotFound from "./NotFound"

class App extends Component {
  render () {
    return (
      <>
        <BrowserRouter>

          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/client" component={ClientInterface}/>
            <Route path="/preparator" component={PreparatorInterface}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;