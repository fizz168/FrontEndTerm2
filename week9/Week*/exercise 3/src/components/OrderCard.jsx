import React from "react";
export default function OrderCard() {
  const [quantity, setQuantity] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  return (
    <div className="order">
      <div>
        <h4>TODO NAME</h4>
   
        <small>TODO PRICE</small>
      </div>

      <div className="order-quantity">
        <div className="order-button">-</div>
        <h4>TODO PRICE</h4>
        <div className="order-button">+</div>
      </div>
    </div>
  );
}
