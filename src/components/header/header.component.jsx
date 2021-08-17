import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { CartContext } from '../../context/cartContext';
import { ReactComponent as CartEmptyIcon } from '../../icons/cart-empty.svg';
import { ReactComponent as CartFullIcon } from '../../icons/cart-filled.svg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CartContext.Consumer>
        {(context) => {
          return (
            <header className="header">
              <div className="header__logo">
                <Link to={ROUTES.HOME} className="btn btn-logo">
                  De.
                </Link>
              </div>
              <div className="header__cart">
                <Link to={ROUTES.CART} className="btn btn-svg">
                  {context.cart.length > 0 ? (
                    <CartFullIcon />
                  ) : (
                    <CartEmptyIcon />
                  )}
                </Link>
              </div>
            </header>
          );
        }}
      </CartContext.Consumer>
    );
  }
}
