import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
// Layout
import Header from "./components/layout/Header"
// Pages
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
          id: 1,
          name: 'Peluche Cactus B0Y',
          price: 3658.85,
          stock: 15
        },
        {
          id: 2,
          name: 'Huawei P10 Lite',
          price: 299.99,
          stock: 357
        },
        {
          id: 3,
          name: 'Briquet BIC Rouge',
          price: 1.50,
          stock: 62
        },
      ],
      clients: []
    };
    this.newClientData = this.newClientData.bind(this);
    this.newEditedClientData = this.newEditedClientData.bind(this);
    this.newDeletedClientData = this.newDeletedClientData.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this)
  }


  // ? permet de récuperer la liste des clients dans le localStorage
  componentDidMount () {
    this.setState({ clients: JSON.parse(localStorage.getItem('AppStateClients')) })
    localStorage.setItem("inventory", JSON.stringify([...this.state.inventory]))
    // ? Définit l'id de l'order
    JSON.parse(localStorage.getItem('newOrderId')) == null
      ? localStorage.setItem("newOrderId", JSON.stringify(1))
      : null

  }


  // ? Met a jour le localStorage AppStateClients au démontage du component
  componentWillUnmount () {
    localStorage.setItem("AppStateClients", JSON.stringify([...this.state.clients]))
  }

  // ? -------------------------------------------------------------------------- */
  // ?   'new' au nom de mes fonction veut dire que je fait transiter une props     */
  // ? -------------------------------------------------------------------------- */


  // ?  A la venue de la nouvelle props newClientData qui vient de NewClient.jsx
  // ? Met a jour le state clients et le localStorage AppStateClients
  newClientData (newClientData) {

    if (newClientData !== null && newClientData.id !== "" && newClientData.id != undefined) {

      if (this.state.clients == [] || this.state.clients == undefined || this.state.clients == null) {
        this.setState({ clients: [newClientData] })
        localStorage.setItem("AppStateClients", JSON.stringify([newClientData]));
      }

      else {
        this.setState({ clients: [...this.state.clients, newClientData] })
        let storageClean;
        storageClean = [...this.state.clients, newClientData];
        localStorage.setItem("AppStateClients", JSON.stringify(storageClean));
      }
    }

  }

  // ?  A la venue de la nouvelle props editedClient qui vient de client.jsx
  // ? Met a jour le state clients et le localStorage AppStateClients
  newEditedClientData (editedClient) {
    if (editedClient !== null && editedClient.id !== "" && editedClient.id != undefined) {
      let clients;
      clients = [...this.state.clients];

      clients.forEach(e => {

        if (e.id == editedClient.id) {
          e.firstName = editedClient.firstName;
          e.lastName = editedClient.lastName;
          e.society = editedClient.society;
          e.email = editedClient.email;
          e.tel = editedClient.tel;
        }
      });

      this.setState({ clients: clients });
      localStorage.setItem('AppStateClients', JSON.stringify(clients))
    }
  }

  // ?  A la venue de la nouvelle props deletedClient qui vient de client.jsx
  // ? Met a jour le state clients et le localStorage AppStateClients
  newDeletedClientData (deletedClient) {
    if (deletedClient !== null && deletedClient != undefined) {
      this.setState({ clients: deletedClient });
      localStorage.setItem('AppStateClients', JSON.stringify(deletedClient))
    }
  }
  render () {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/preparator" component={PreparatorInterface} />
            <Route exact path="/" component={() => <ClientInterface deletedClient={this.newDeletedClientData} editedClient={this.newEditedClientData} newClient={this.newClientData} />} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
