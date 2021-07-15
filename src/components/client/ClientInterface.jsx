import React, { Component } from 'react';
import NewClient from "./NewClient.jsx"
import Client from "./Client"


class ClientInterface extends Component {
  constructor(props) {
    super(props)
    this.goToApp = this.goToApp.bind(this);
    this.clientEditedToApp = this.clientEditedToApp.bind(this);
    this.clientDeletedToApp = this.clientDeletedToApp.bind(this);
  }

  // ? Renvoie le nouveaux client au state du component App
  goToApp (newClientData) { this.props.newClient(newClientData) }

  // ? Renvoie la nouvelles liste de client à l'app
  clientEditedToApp (editedClient) { this.props.editedClient(editedClient) }
  clientDeletedToApp (deletedClient) { this.props.deletedClient(deletedClient) }


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
                Grâce à l'interface client, vous avez la possibilité de geré en ajoutant, modifiant ou supprimant n'importe quel client.
                <br /><br />
                Et acceder au magasin une fois un client sélectionné et traiter ça demande auprès de vous.
              </p>
              <NewClient newClientData={this.goToApp} />
            </div>
          </div>
          <div className="clientInterface-body">
            <Client clientDeleted={this.clientDeletedToApp} clientEdited={this.clientEditedToApp} />
          </div>
        </div>
      </section>
    );
  }
}

export default ClientInterface;
