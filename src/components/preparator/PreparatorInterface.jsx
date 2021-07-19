import React, { Component } from 'react';

class PreparatorInterface extends Component {
    // Todo : Je doit afficher : nom des articles , quantité de chaque articles , 
    // Todo : quantité de chaque articles préparer, status, btn préparé pour chaques articles, btn livré
    // Todo :
    constructor(props) {
        super(props)
        this.state = {
            AppStateClients: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount () {
        let AppStateClients
        AppStateClients = JSON.parse(localStorage.getItem('AppStateClients'))
        this.setState({ AppStateClients: AppStateClients })
    }

    render () {

        return (
            <>
                <section>
                    <div className="clientInterface">
                        <div className="clientInterface-header">
                            <div className="clientInterface-header-left">
                                <h1 className="clientInterface-header-left-title">
                                    Interface
                                    <span className="clientInterface-header-left-title-span"> Préparateur</span>
                                </h1>
                                <p className="clientInterface-header-left-text">
                                    Grâce à l'interface de préparation vous aurez une interface clair pour savoir ou vous vous situez au niveau de vos commandes.
                                    <br /><br />
                                    Et gardez le suivi de la commande a jour pour vos client.
                                </p>
                            </div>
                        </div>
                        {/* // ! -------------------------------------------------------------------------- */}
                        <div className="preparatorInterface">
                            {
                                (this.state.AppStateClients.length !== 0) && [...this.state.AppStateClients].map(client =>
                                    client.order.map(clientOrder =>
                                        // ? || orderId | status | actions( plus de détail, préparé )
                                        <div key={`order#${clientOrder[0].orderId}`} className="preparatorInterface-order">
                                            <div className="preparatorInterface-order-header">
                                                {clientOrder[0].status}
                                                {console.log(clientOrder)}
                                                <div>
                                                <span>Order Id :</span>
                                                <span>{clientOrder[0].orderId}</span>
                                                </div>
                                                <div>
                                                <span></span>
                                                <span></span>
                                                </div>
                                                <div>
                                                    <button class="btn btn-green">préparé</button>
                                                    <button>
                                                        <i class="fas fa-chevron-down"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="preparatorInterface-order-body">

                                            </div>
                                        </div>
                                    )
                                )
                            }
                        </div>
                        {/* // ! -------------------------------------------------------------------------- */}
                    </div>
                </section>
            </>
        );
    }
}

export default PreparatorInterface;