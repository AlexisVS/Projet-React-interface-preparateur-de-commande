import React, { useState } from 'react';

const Article = ({ currentUser, name, price }) => {
  const [quantity, setQuantity] = useState("")
  let userOrder
  let appStateClients = JSON.parse(localStorage.getItem('AppStateClients'))
  appStateClients.forEach(e => e.id == currentUser ? userOrder = e : null)
  let updateOrder = (e) => {
    let name, quantity
    name = e.target.parentElement.parentElement.children[0].lastChild.data
    quantity = e.target.valueAsNumber
    console.log(name);
    console.log(quantity);
    userOrder.order = [{name: name, quantity: quantity}]
  }
  return (
    < div >
    <div className="shop-article-wrapper">
      <div className="shop-article">
        <p><strong className="font-SourceSP">Nom: </strong>{name}</p>
        <p><strong className="font-SourceSP-Bold">Prix: </strong>{price}€</p>
        <div className="shop-article-quantity">
          <strong className="font-SourceSP">Quantité: </strong>
          <input onChange={(e) => {setQuantity(e.target.value);updateOrder(e)}} defaultValue={quantity} type="number" />
        </div>
      </div>
    </div>
</div >
  );
};

export default Article;