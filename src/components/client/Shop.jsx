import React, { Component } from 'react';
import Article from "./Article"

class shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: this.props.currentUser,
      inventory: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.stockProduct = this.stockProduct.bind(this)
    this.articleRef = React.createRef()
    this.updateOrder = this.updateOrder.bind(this)
  }

  componentDidMount () {
    let inventory, appStateClients
    inventory = JSON.parse(localStorage.getItem("inventory"))
    appStateClients = JSON.parse(localStorage.getItem("AppStateClients"))
    this.setState({ inventory: inventory, appStateClients: appStateClients })
  }

  stockProduct (e) {
    console.log(e.target.parentElement.parentElement.parentElement);
  }

  updateOrder(order) {
    console.log(order);
  } 

  render () {
    console.log(this.props.currentUser);
    console.log(this.state.currentUser);
    return (
      <>


        {/* <!-- Modal --> */}
        <div className="modal fade" id="shopModal" tabIndex="-1" aria-labelledby="shopModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable modal-fullscreen-lg-down">
            <div className="modal-content bs_overlay modal-shadow">
              <div className="modal-header">
                <h5 className="modal-title" id="shopModalLabel">Shop</h5>
                <button type="button" className="btn btn-transparent" data-bs-dismiss="modal">
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="modal-body ">
                {/* -------------------------------------------------------------------------- */}
                <div className="shop-wrapper">
                  <div className="shop">

                    {
                      // TODO : Je doit a chaque article stocker ICI son nom et sa quantité tout en sachant qu'il peut y avoir plusieurs articles sélectionner
                      // TODO : Ou alors j'envoie  
                      this.state.inventory.map(e => {
                        return <Article storeClientOrder={this.updateOrder()} currentUser={this.state.currentUser} name={e.name} price={e.price} id={e.id} key={e.id} />
                      })
                    }



                  </div>
                </div>
                {/* -------------------------------------------------------------------------- */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-blue" data-bs-dismiss="modal">Fermer</button>
                <button type="button" className="btn btn-green" data-bs-dismiss="modal">Sauvegarder</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default shop;