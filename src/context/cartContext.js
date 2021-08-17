import React from 'react';

const CartContext = React.createContext(null);

class CartProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  render() {
    const { cart } = this.state;
    return (
      <CartContext.Provider value={{ cart }}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export { CartContext, CartProvider };
