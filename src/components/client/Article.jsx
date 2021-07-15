import React, { useState } from 'react';

const Article = ({ name, price, id, storeClientOrder }) => {
  const [quantity, setQuantity] = useState(Number)
  const [order, setOrder] = useState({ id: id, name: name, quantity: "" })
  let updateOrder = (e) => {
    setOrder({ ...order, quantity: e.target.value })
    //TODO: Comment envoyer une props au parent ?
    storeClientOrder({ ...order, quantity: e.target.value })
  }

  return (
    < div >
      <div className="shop-article-wrapper">
        <div className="shop-article">
          <p><strong className="font-SourceSP">Nom: </strong>{name}</p>
          <p><strong className="font-SourceSP-Bold">Prix: </strong>{price}€</p>
          <div className="shop-article-quantity">
            <strong className="font-SourceSP">Quantité: </strong>
            <input onChange={(e) => updateOrder(e)} type="number" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Article;