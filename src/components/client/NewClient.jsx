import React, { Component } from 'react';
import { Switch } from 'react-router-dom';


class NewClient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      society: "",
      email: "",
      tel: "",
      order: [],
      orderHistory: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
  }


  handleSubmit (e) {
    e.preventDefault();
  }

  handleChange (e) {
    switch (e.target.name) {
      case "firstName":
        this.setState({
          firstName: e.target.value
        })
        break;
      case "lastName":
        this.setState({
          lastName: e.target.value
        })
        break;
      case "society":
        this.setState({
          society: e.target.value
        })
        break;
      case "email":
        this.setState({
          email: e.target.value
        })
        break;
      case "tel":
        RegExp('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$', 'g').test(e.target.value) === true || e.target.value == ""
          ? this.setState({
            tel: e.target.value
          })
          : null
        break;
    }
  }

  submit () {
    this.props.newClientData(this.state)
  }

  componentDidUpdate (prevProps) {
    if (this.props.newClientData !== prevProps.newClientData) {
      this.props.newClientData(this.state)
    }
  }

  componentDidMount () {
    let appStateClients
    appStateClients = JSON.parse(localStorage.getItem("AppStateClients"))
    if (appStateClients !== null) {
      this.setState({ id: appStateClients.length + 1 })
    } else if (appStateClients == null) {
      this.setState({ id: Date.now })
    }
  }

  render () {
    return (
      <>
        <button
          className="clientInterface-header-left-button"
          data-bs-toggle="modal"
          data-bs-target="#newClientModal">
          Ajouter un client
        </button>

        <div className="modal fade" id="newClientModal" tabIndex="-1" aria-labelledby="newClientModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bs_overlay">
              <div className="modal-header">
                <h5 className="modal-title" id="newClientModalLabel">Création client</h5>
                <button
                  className="btn btn-transparent"
                  type="button"
                  data-bs-dismiss="modal"
                // aria-label="Close"
                >
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
                      value={this.state.firstName}
                      onChange={this.handleChange} />
                  </label>

                  <label htmlFor="lastName">
                    <p>Nom</p>
                    <input
                      name="lastName"
                      type="text"
                      value={this.state.lastName}
                      onChange={this.handleChange} />
                  </label>

                  <label htmlFor="society">
                    <p>Société</p>
                    <input
                      name="society"
                      type="text"
                      value={this.state.society}
                      onChange={this.handleChange} />
                  </label>

                  <label htmlFor="email">
                    <p>Email</p>
                    <input
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange} />
                  </label>

                  <label htmlFor="tel">
                    <p>N° tel</p>
                    <input
                      name="tel"
                      type="text"
                      value={this.state.tel}
                      onChange={this.handleChange} />
                  </label>
                  <input
                    className="btn"
                    type="submit"
                    value="Enregistrer"
                    data-bs-dismiss="modal"
                    onClick={this.submit}
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

export default NewClient;