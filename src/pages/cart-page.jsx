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
              let total = 0;
              for (let i = 0; i < context.cart.length; i++) {
                total += parseFloat(context.cart[i].price);
              }
              return (
                <>
                  {context.cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      removeItem={context.removeFromCart}
                    />
                  ))}
                  <div className="cart__total">Total: $ {total.toFixed(2)}</div>
                </>
              );
            }
            return <p className="cart__empty">Your Shopping Cart is empty</p>;
          }}
        </CartContext.Consumer>
      </div>
    );
  }
}
