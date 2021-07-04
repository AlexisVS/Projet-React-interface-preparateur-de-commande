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
  constructor(props) {
    super(props)

    this.state = {
      inventory: [
        {
          name: 'Peluche Cactus B0Y',
          price: 3658.85,
          stock: 15
        },
        {
          name: 'Huawei P10 Lite',
          price: 299.99,
          stock: 357
        },
        {
          name: 'Briquet BIC Rouge',
          price: 1.50,
          stock: 62
        },
      ],
      clients: [
        {
          firstName: "Christophe",
          lastName: "Brieux",
          society: "Polaris",
          email: "christophe.brieux@polaris.com",
          tel: "0032 485 25 87 98",
          order: [
            {
              name: 'Peluche Cactus B0Y',
              quantity: 1
            },
            {
              name: 'Huawei P10 Lite',
              quantity: 1
            },
            {
              name: 'Briquet BIC Rouge',
              quantity: 15
            },
          ],
          orderHistory: [],
        },
      ]
    }
    this.newClientData = this.newClientData.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)

  }

  newClientData (newClientData) {
    this.setState({ clients: [...this.state.clients, newClientData] })
    console.log(this.state);
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.newClientData !== prevState.clients[prevState.clients.length]) {
      this.setState({ clients: [...prevState.clients, this.props.newClientData]})
    }
  }

  render () {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/client" component={() => <ClientInterface newClient={this.newClientData} />} />
            <Route path="/preparator" component={PreparatorInterface} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;