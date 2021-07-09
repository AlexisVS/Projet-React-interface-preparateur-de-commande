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
          id: 1,
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
        {
          id: 2,
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
        {
          id: 3,
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
        {
          id: 4,
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
        {
          id: 5,
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
        {
          id: 6,
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
        {
          id: 7,
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
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.newClientData = this.newClientData.bind(this);
    this.newEditedClientData = this.newEditedClientData.bind(this);
  }

  componentDidMount () {
    this.setState({ clients: JSON.parse(localStorage.getItem('appStateClients')) })
    localStorage.setItem('appStateClients', JSON.stringify(this.state.clients))
    // this.forceUpdate()
  }


  componentDidUpdate (prevProps, prevState) {
    //   if (this.props.newClientData !== prevState.clients[prevState.clients.length - 1]) {
    //     this.setState({ clients: [...this.state.clients, this.props.newClientData] });
    //   }
    //   // Todo : Je doit faire en sorte que quand le nom, le prenom, la societe, email change de la state clients qu"elle se mette a jour
    if (this.props.editedClient !== prevProps.editClient) {
      this.newEditedClientData()
    }
    //   if (prevState.clients !== this.state.clients) {
    //     localStorage.setItem('appStateClients', JSON.stringify([...this.state.clients]))
    //   }
  }

  componentWillUnmount () {
    if (this.state.clients !== JSON.parse(localStorage.getItem('appStateClients'))) {
      localStorage.setItem('appStateClients', JSON.stringify([...this.state.clients]))
    }
  }

  newClientData (newClientData) {
    if (newClientData !== null || newClientData.id !== "") {
      this.setState({ clients: [...this.state.clients, newClientData] })
      localStorage.setItem("appStateClients", JSON.stringify([...this.state.clients, newClientData]));
    }

  }


  newEditedClientData (editedClient) {
    console.log("J'arrive jusque ici");
    if (editedClient.id !== "" || editedClient.id !== null || editedClient.id !== undefined) {
      let newClientsState;
      newClientsState = [...this.state.clients];

      newClientsState.forEach(e => {

        if (e.id == editedClient.id) {
          e.firstName = editedClient.firstName;
          e.lastName = editedClient.lastName;
          e.society = editedClient.society;
          e.email = editedClient.email;
          e.tel = editedClient.tel;
        }
      });
      this.setState({ clients: newClientsState });
    }
  }

  render () {
    console.log("Je suis dans le render de l'app");
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/client" component={() => <ClientInterface editedClient={this.newEditedClientData} newClient={this.newClientData} />} />
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