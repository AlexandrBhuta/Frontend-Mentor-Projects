import React from "react";
import cart from "../images/icon-cart-2.svg";
import iconAdd from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";

const InfoMain = ({ addItems, items }) => {
  return (
    <>
      <div className="info">
        <h4>sneaker company</h4>
        <h1 className="heading"> fall limited edition sneakers </h1>
        <p className="paragraph">
          These low - profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ ll withstand everything
          the weather can offer.
        </p>
        <div className="pricing">
          <h1>$125.00</h1> <h3>$250.00 </h3>
        </div>
        <div className="btns-main">
          <div className="item-number">
            <button type="button">
              <img
                onClick={addItems}
                className="minus-items"
                src={iconMinus}
                alt="icon-minus"
              />
            </button>
            <p>{items}</p>
            <button type="button">
              <img
                onClick={addItems}
                className="add-items"
                src={iconAdd}
                alt="icon-minus"
              />
            </button>
          </div>
          <div className="cart-btn">
            <button onClick={addItems} className="add-to-cart" type="button">
              <img src={cart} alt="" />
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoMain;
