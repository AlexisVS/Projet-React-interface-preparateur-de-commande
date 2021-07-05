import React, { Component } from 'react';
import NewClient from "./NewClient.jsx"
import Client from "./Client"

class ClientInterface extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.goToApp = this.goToApp.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.renderClients = this.renderClients.bind(this)
  }

  // Renvoie le nouveaux client au state du component App
  goToApp (newClientData) {
    this.setState({ newClientData: newClientData })
    this.props.newClient(newClientData)
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.newClientData !== this.props.newClient) {
      // Rafraichit la props newClient
      this.props.newClient(this.props.newClient)

      // this.renderClients
    }
    // if (PrevState.newClientData !== this.props.NewClient) {
    //   this.props.newClient(this.state.newClientData)
    // }
    console.log(this.state);
  }
  // Fait le rendu des clients
  renderClients () {
    let clients
    // Nettoie le localStorage AppStateClients
    clients = JSON.parse(localStorage.getItem('AppStateClients'))

    localStorage.getItem('AppStateClients') !== null
      ? [clients].map((e) => {
        return <Client
          key={e.id}
          id={e.id}
          firstName={e.firstName}
          lastName={e.lastName}
          society={e.society}
          email={e.email}
          tel={e.tel}
          order={e.order}
          orderHistory={e.orderHistory} />
      })
      : null
  }


  render () {
    return (
      <section>
        <div className="clientInterface">
          <div className="clientInterface-header">
            <div className="clientInterface-header-left">
              <h1 className="clientInterface-header-left-title">
                Interface
                <span className="clientInterface-header-left-title-span"> client</span>
              </h1>
              <p className="clientInterface-header-left-text">
                Grâce à l'interface client, vous avez la possibilité de geré et satisfaire n'importe quel client. Vous pouvez ajouter, modifier ou supprimer n'importe quel client.
                <br /><br />
                Et acceder au magasin une fois un client sélectionné et traiter ça demande auprès de vous.
              </p>
              <NewClient newClientData={this.goToApp} />
            </div>
            <div className="clientInterface-body">
              {/* {this.renderClients()} */}
              {
                [JSON.parse(localStorage.getItem('AppStateClients'))].map((e) =>
                e == null ? null :
                  <Client
                    key={e.id}
                    id={e.id}
                    firstName={e.firstName}
                    lastName={e.lastName}
                    society={e.society}
                    email={e.email}
                    tel={e.tel}
                    order={e.order}
                    orderHistory={e.orderHistory} ></Client>
                )
              }
              <button onClick={this.renderClients}>render clients</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ClientInterface;