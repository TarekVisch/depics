import React from 'react';

const CartContext = React.createContext(null);

class CartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  addToCart = (item) => {
    this.setState((prevState) => {
      return { cart: [...prevState.cart, item] };
    });
  };

  removeFromCart = (id) => {
    this.setState((prevState) => {
      const newCart = prevState.cart.filter((item) => item.id !== id);
      return { cart: newCart };
    });
  };

  render() {
    const { cart } = this.state;
    return (
      <CartContext.Provider
        value={{
          cart,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export { CartContext, CartProvider };
