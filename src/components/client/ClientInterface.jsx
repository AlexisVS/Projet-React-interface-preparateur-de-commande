import React, { Component } from 'react';
import NewClient from "./NewClient.jsx"

class ClientInterface extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.goToApp = this.goToApp.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
  }
  
goToApp(newClientData) {
  this.setState({newClientData: newClientData})
  this.props.newClient(newClientData)
  console.log(this.props.newClient);
  console.log(this.state);
}

componentDidUpdate(prevProps, PrevState) {
  if (prevProps.newClient !== this.state.newClientData) {
    this.props.newClient(this.state.newClientData)
  }
  if (PrevState.newClientData !== this.props.NewClient) {
    this.props.newClient(this.state.newClientData)
  }
  console.log(this.state);
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
              <NewClient newClientData={this.goToApp}/>
            </div>
            <div className="clientInterface-header-right">
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ClientInterface;