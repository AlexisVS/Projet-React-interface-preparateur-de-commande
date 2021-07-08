import React, { Component } from 'react';
import NewClient from "./NewClient.jsx"
import Client from "./Client"


class ClientInterface extends Component {
  constructor(props) {
    super(props)
    this.goToApp = this.goToApp.bind(this);
    // this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.clientEditedToApp = this.clientEditedToApp.bind(this);
  }

  // Renvoie le nouveaux client au state du component App
  goToApp (newClientData) { this.props.newClient(newClientData) }

  // componentDidUpdate (prevProps, prevState) {
  //   if (prevProps.newClientData !== this.props.newClient) {
  //     // Rafraichit la props newClient
  //     this.props.newClient(this.props.newClient);
  //   }

  //   if (prevProps.clientEdited !== this.props.editClient) {
  //     this.props.clientEdited(this.props.clientEdited)
  //   }
  // }

  clientEditedToApp (editedClient) { this.props.editedClient(editedClient); console.log("Bonjour"); }

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
          </div>
          <Client clientEdited={this.clientEditedToApp} />
        </div>
      </section>
    );
  }
}

export default ClientInterface;