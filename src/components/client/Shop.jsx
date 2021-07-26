import React, { Component } from 'react';
import Article from "./Article"


class shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: JSON.parse(localStorage.getItem('currentUserId')),
      inventory: [{}],
      userCommand: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.stockProduct = this.stockProduct.bind(this)
    this.shopRef = React.createRef()
    this.stockProduct = this.stockProduct.bind(this)
  }


  componentDidMount () {
    // ? Initialise le localStorage orderUpdate
    localStorage.setItem("orderUpdate", JSON.stringify([]))

    // ? S'abonne au localStorage inventory, appStateClients, articleUpdate, currentUserId
    let inventory, appStateClients, articleUpdate, currentUserId
    currentUserId = JSON.parse(localStorage.getItem('currentUserId'))
    inventory = JSON.parse(localStorage.getItem("inventory"))
    appStateClients = JSON.parse(localStorage.getItem("AppStateClients"))
    articleUpdate = JSON.parse(localStorage.getItem("orderUpdate"))
    this.setState({ inventory: inventory, appStateClients: appStateClients, articleUpdate: articleUpdate, currentUser : currentUserId })
  }

  // ? stock et nettoie les champs
  stockProduct (e) {
    // stock

    let orderUpdate, newOrderId, saveClientOrder
    newOrderId = JSON.parse(localStorage.getItem('newOrderId'))
    orderUpdate = JSON.parse(localStorage.getItem('orderUpdate'))
    if (orderUpdate !== null && saveClientOrder !== null) {
      orderUpdate.unshift({ status: "En préparation", orderId: newOrderId })

      saveClientOrder = this.state.appStateClients
      saveClientOrder.forEach(client => {
        if (client.id == this.state.currentUser) {
          client.order = [...client.order, orderUpdate]
        }
      })

      localStorage.setItem('AppStateClients', JSON.stringify(saveClientOrder))
      localStorage.setItem('newOrderId', JSON.stringify(newOrderId + 1))

        // nettoie
        ;[...this.shopRef.current.children].forEach(e => {
          e.children[0].children[0].children[2].children[1].value = ""
          console.log(e.children[0].children[0].children[2].children[1]);
        })

        // document.querySelectorAll('.jsx_InputQuantityArticleShop').forEach(e => e.value = "")

      localStorage.removeItem('orderUpdate')
      this.forceUpdate()

    }
  }

  // ? met a jour le shop Pour Mettre a jour state.currentUser
  componentDidUpdate (prevProps, prevState) {
    prevState.currentUser != JSON.parse(localStorage.getItem('currentUserId'))
      ? this.setState({ currentUser: JSON.parse(localStorage.getItem('currentUserId')) })
      : null
  }

  render () {
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
                  <div ref={this.shopRef} className="shop" id="shop">

                    {
                      // TODO : Je doit a chaque article stocker ICI son nom et sa quantité tout en sachant qu'il peut y avoir plusieurs articles sélectionner
                      // TODO : Ou alors j'envoie  
                      this.state.inventory.map(e => {
                        return <Article currentUser={this.state.currentUser} name={e.name} price={e.price} id={e.id} key={e.name + e.id} />
                      })
                    }

                  </div>
                </div>
                {/* -------------------------------------------------------------------------- */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-blue" data-bs-dismiss="modal">Fermer</button>
                <button type="button" onClick={this.stockProduct} className="btn btn-green" data-bs-dismiss="modal">Sauvegarder</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default shop;