import React, { Component } from 'react';

class Client extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appStateClients: JSON.parse(localStorage.getItem('AppStateClients'))
        }
        this.saveClientState = this.saveClientState.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        // this.renderClients = this.renderClients.bind(this)
    }

    // ? Enregistre les données de appStateClients du localStorage dans le state
    saveClientState = () => {
        let appStateClients
        appStateClients = JSON.parse(localStorage.getItem('AppStateClients'))
        for (const key in appStateClients) {
            if (appStateClients[key] == null) {
                delete appStateClients[key]
            }
        }
        console.log(appStateClients);
        this.setState({ appStateClients: appStateClients })
    }
    componentDidMount = () => {
        this.saveClientState
    }

    componentDidUpdate = (prevProps, prevState) => {
        let appStateClients
        appStateClients = JSON.parse(localStorage.getItem('AppStateClients'))
        for (const key in appStateClients) {
            if (appStateClients[key] == null) {
                delete appStateClients[key]
            }
        }
        if (prevState.appStateClients !== appStateClients) {
            this.saveClientState
        }
    }

    render () {
        console.log(this.state.appStateClients);
        return (
            <>
                {
                    this.state.appStateClients === null ? null
                        : this.state.appStateClients.map(e => {
                            if (e !== null) {
                                return (
                                    <div key={e.id} className="clientCard">
                                        <i className="fas fa-user" />
                                        <div className="clientCard-body">
                                            <p className="clientCard-body-info"><strong className="clientCard-body-labelTitle">Nom complet : </strong>{`${e.firstName} ${e.lastName.toUpperCase()}`}</p>
                                            <p className="clientCard-body-info"><strong className="clientCard-body-labelTitle">Société : </strong>{e.society}</p>
                                            <p className="clientCard-body-info"><strong className="clientCard-body-labelTitle">Email : </strong>{e.email}</p>
                                            <p className="clientCard-body-info"><strong className="clientCard-body-labelTitle">Tel : </strong>{e.tel}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                }
            </>
        );
    }
}

export default Client;