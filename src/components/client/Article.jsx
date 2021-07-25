import React, { useEffect, useState } from 'react';

const Article = ({ name, price, id }) => {

  const [order, setOrder] = useState({ id: id, name: name, quantity: ""})
  const [inputvalue, setInputValue] = useState('')


  // ? Update le localStorage orderUpdate pour pouvoir manipuler le panier du client
  let updateOrder = (e) => {
    setInputValue(e.target.value)
    let newOrder
    newOrder = order
    newOrder.quantity = e.target.value
    setOrder(newOrder)

    let orderUpdate = JSON.parse(localStorage.getItem('orderUpdate'))
    if (orderUpdate == null || orderUpdate == undefined) {
      orderUpdate = []
      
    }
    orderUpdate.every(e => e.id != order.id) == true
      ? orderUpdate.push(order)
      : orderUpdate.forEach(e => {
        if (e.id == order.id) {
          e.quantity = newOrder.quantity
        }
      })
    localStorage.setItem("orderUpdate", JSON.stringify(orderUpdate));
  }

  return (
    < div >
      <div className="shop-article-wrapper">
        <div className="shop-article">
          <p><strong className="font-SourceSP">Nom: </strong>{name}</p>
          <p><strong className="font-SourceSP-Bold">Prix: </strong>{price}€</p>
          <div className="shop-article-quantity">
            <strong className="font-SourceSP">Quantité: </strong>
            <input onChange={(e) => updateOrder(e)} value={inputvalue} type="number" />
          </div>
        </div>
      </div>
    </ div >
  );
};

export default Article;