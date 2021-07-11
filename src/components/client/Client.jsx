import React, { Component } from 'react';

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appStateClients: JSON.parse(localStorage.getItem('AppStateClients')),
      editClient: {
        id: "",
        firstName: "",
        lastName: "",
        society: "",
        email: "",
        tel: "",
      }
    }
    this.userCard = React.createRef();
    this.saveClientState = this.saveClientState.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.actionDelete = this.actionDelete.bind(this);
    this.actionsModify = this.actionsModify.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderClients = this.renderClients.bind(this)
  }

  // ? Enregistre les données de appStateClients du localStorage dans le state
  saveClientState = () => {
    let appStateClients
    appStateClients = JSON.parse(localStorage.getItem('AppStateClients'))
    console.log("Je me mets a jour dans clients -> saveClienState()");
    console.log(appStateClients);
    this.setState({ appStateClients: appStateClients })
  }

  componentDidMount = () => {
    this.saveClientState
  }

  handleSubmit (e) {
    e.preventDefault();

  }

  handleChange (e) {
    let editClientState;
    let value = e.target.value;
    let name = e.target.name;
    editClientState = { ...this.state.editClient };

    switch (e.target.name) {
      case "firstName":
        editClientState[name] = value;
        break;
      case "lastName":
        editClientState[name] = value;
        break;
      case "society":
        editClientState[name] = value;
        break;
      case "email":
        editClientState[name] = value;
        break;
      case "tel":
        if (RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$', 'g').test(e.target.value) === true || e.target.value == "") {
          editClientState[name] = value;
        }
        break;
    }
    this.setState({ editClient: editClientState });
  }

  displayProfile = (e) => {
    let userCardId, newAppStateClients
    userCardId = e.target.parentElement.parentElement.children[1].children[4].lastChild.data
    this.state.appStateClients.map(e => {
      if (e.id == userCardId) {

        this.setState({
          editClient: {
            id: e.id,
            firstName: e.firstName,
            lastName: e.lastName,
            society: e.society,
            email: e.email,
            tel: e.tel,
          }
        })

      }
    })
  };

  actionsModify = () => { this.props.clientEdited(this.state.editClient) }

  actionDelete = (e) => {
    let userId = e.target.parentElement.parentElement.children[1].children[4].lastChild.data
    let appStateClients = [...this.state.appStateClients].filter(e => e.id != userId)
    this.props.clientDeleted(appStateClients)
  }

  render () {
    return (
      <>
        {
          this.state.appStateClients === null ? null
            : this.state.appStateClients.map(e => {
              if (e !== null) {
                return (
                  <div key={e.id} className="clientCard">
                    <i className="fas fa-user" />
                    <div className="clientCard-body" ref={this.userCard}>
                      <p className="clientCard-body-info"><strong className="clientCard-body-labelTitle">Nom complet : </strong>{`${e.firstName} ${e.lastName.toUpperCase()}`}</p>
                      <p className="clientCard-body-info"><strong className="clientCard-body-labelTitle">Société : </strong>{e.society}</p>
                      <p className="clientCard-body-info"><strong className="clientCard-body-labelTitle">Email : </strong>{e.email}</p>
                      <p className="clientCard-body-info"><strong className="clientCard-body-labelTitle">Tel : </strong>{e.tel}</p>
                      <p className="clientCard-body-info"><strong className="clientCard-body-labelTitle">id : </strong>{e.id}</p>
                    </div>
                    <div className="clientCard-actions">
                      <button
                        onClick={this.displayProfile}
                        data-bs-toggle="modal"
                        data-bs-target="#editClientModal"
                        className="clientCard-actions--modify">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button onClick={(e) =>this.actionDelete(e)} className="clientCard-actions--delete"><i className="fas fa-times"></i></button>
                    </div>
                  </div>
                )
              }
            })
        }

        <div className="modal fade" id="editClientModal" tabIndex="-1" aria-labelledby="editClientModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bs_overlay">
              <div className="modal-header">
                <h5 className="modal-title" id="editClientModalLabel">Création client</h5>
                <button
                  className="btn btn-transparent"
                  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close">
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => this.handleSubmit(e)}>

                  <label htmlFor="firstName">
                    <p>Prénom</p>
                    <input
                      name="firstName"
                      type="text"
                      value={this.state.editClient.firstName}
                      onChange={this.handleChange} />
                  </label>

                  <label htmlFor="lastName">
                    <p>Nom</p>
                    <input
                      name="lastName"
                      type="text"
                      value={this.state.editClient.lastName}
                      onChange={this.handleChange} />
                  </label>

                  <label htmlFor="society">
                    <p>Société</p>
                    <input
                      name="society"
                      type="text"
                      value={this.state.editClient.society}
                      onChange={this.handleChange} />
                  </label>

                  <label htmlFor="email">
                    <p>Email</p>
                    <input
                      name="email"
                      type="email"
                      value={this.state.editClient.email}
                      onChange={this.handleChange} />
                  </label>

                  <label htmlFor="tel">
                    <p>N° tel</p>
                    <input
                      name="tel"
                      type="text"
                      value={this.state.editClient.tel}
                      onChange={this.handleChange} />
                  </label>
                  <input
                    onClick={this.actionsModify}
                    className="btn"
                    type="submit"
                    value="Enregistrer"
                    data-bs-dismiss="modal"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default Client;