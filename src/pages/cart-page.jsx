import React from 'react';
import CartItem from '../components/cart-item/cart-item.component';
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
                <CartItem key={item.id} item={item} />
              ));
            }
            return <p className="cart__empty">Cart is empty</p>;
          }}
        </CartContext.Consumer>
      </div>
    );
  }
}
