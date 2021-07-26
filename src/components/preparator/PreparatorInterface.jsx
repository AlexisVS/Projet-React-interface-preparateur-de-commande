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
    this.changeArticleBackground = this.changeArticleBackground.bind(this)
    this.extendsOrder = this.extendsOrder.bind(this)
    this.actionPrepare = this.actionPrepare.bind(this)
    this.actionSubmit = this.actionSubmit.bind(this)
  }

  componentDidMount () {
    let AppStateClients
    AppStateClients = JSON.parse(localStorage.getItem('AppStateClients'))
    this.setState({ AppStateClients: AppStateClients })
  }

  changeArticleBackground (e) {
    let input
    input = e.target.parentElement
    input.classList.toggle('bg-green')
  }

  extendsOrder (e) {
    console.log(e.target.parentElement.parentElement.parentElement);
    e.target.parentElement.parentElement.parentElement.children[1].classList.toggle('d-block')
    e.target.children[0].classList.toggle('extend')
    e.target.parentElement.parentElement.parentElement.classList.toggle('pb-0')
  }

  actionPrepare (e, clientOrder) {
    e.target.parentElement.parentElement.children[1].classList.remove('pills-yellow')
    e.target.parentElement.parentElement.children[1].classList.add('pills-blue')
    let newAppStateClients
    newAppStateClients = [...this.state.AppStateClients]
    newAppStateClients.forEach(client => {
      client.order.forEach((orderClient,) => {
        if (clientOrder[0].orderId == orderClient[0].orderId) {
          orderClient[0].status = "En cours d'envoie"
        }
      })
    })
    localStorage.setItem('AppStateClients', JSON.stringify(newAppStateClients))
    this.setState({ AppStateClients: newAppStateClients })
    this.forceUpdate()
  }

  actionSubmit (e, clientOrder) {
    let newAppStateClients, finishedOrder
    newAppStateClients = [...this.state.AppStateClients]
    newAppStateClients.forEach((client, clientIndex) => {
      client.order.forEach((orderClient, orderClientIndex) => {
        if (clientOrder[0].orderId == orderClient[0].orderId) {
          finishedOrder = orderClient
          delete finishedOrder.status
          client.order.splice(orderClientIndex, 1)
          client.orderHistory.push(finishedOrder);
        }
      })
    })
    this.setState({ AppStateClients: newAppStateClients })
    localStorage.setItem('AppStateClients', JSON.stringify(newAppStateClients))
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
                this.state.AppStateClients !== null && this.state.AppStateClients.length !== 0 && [...this.state.AppStateClients].map(client => (

                  client.order.map((clientOrder, clientOrderIndex) => (

                    // ? || orderId | status | actions( plus de détail, préparé )

                    <div key={`order#${clientOrder[0].orderId}`} id={`order#${clientOrder[0].orderId}`} className="preparatorInterface-order">
                      <div className="preparatorInterface-order-header">

                        <div className="preparatorInterface-order-header-orderId">
                          <span>Order Id :</span>
                          <span>{clientOrder[0].orderId}</span>
                        </div>

                        <span className={`preparatorInterface-order-header-orderStatus pills ${clientOrder[0].status == "En préparation" ? 'pills-yellow' : 'pills-blue'} `}>
                          {clientOrder[0].status}
                        </span>

                        <div className="preparatorInterface-order-header-actions">
                          {clientOrder[0].status == "En préparation"
                            ? <button onClick={(e) => this.actionPrepare(e, clientOrder)} className="btn btn-green">préparé</button>
                            : <button onClick={(e) => this.actionSubmit(e, clientOrder)} className="btn btn-blue">Envoyer</button>
                          }

                          <button onClick={this.extendsOrder} className="preparatorInterface-order-header-actions-show">
                            <i className="fas fa-chevron-down"></i>
                          </button>
                        </div>
                      </div>

                      <div className="preparatorInterface-order-body">

                        {clientOrder.map((article, articleIndex) => {

                          if (articleIndex > 0) {
                            return (

                              <div key={`order#${clientOrder[0].orderId}` + "-preparatorInterfaceArticle" + articleIndex} id={"preparatorInterfaceArticle" + articleIndex} className="preparatorInterface-order-body-article">
                                <p className="preparatorInterface-order-body-article-name">
                                  <strong>Nom: </strong>
                                  {article.name}
                                </p>

                                <div className="preparatorInterface-order-body-article-quantity">
                                  <strong>Quantity: </strong>
                                  {article.quantity}
                                </div>

                                <input onClick={this.changeArticleBackground} type="checkbox" id={`order#${clientOrder[0].orderId}` + clientOrderIndex + articleIndex} />
                                <label className="switchLabel" htmlFor={`order#${clientOrder[0].orderId}` + clientOrderIndex + articleIndex}>Toggle</label>
                              </div>
                            )
                          }
                        })}
                      </div>
                    </div>
                  ))
                ))
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