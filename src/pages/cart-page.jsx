import React from 'react';
import { CartContext } from '../context/cartContext';

export default class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cart">
        <CartContext.Consumer>
          {(context) => {
            if (context.cart.length > 0) {
              return context.cart.map((item) => (
                <div className="cart__item">{item.title}</div>
              ));
            }
            return <p className="cart__empty">Cart is empty</p>;
          }}
        </CartContext.Consumer>
      </div>
    );
  }
}
