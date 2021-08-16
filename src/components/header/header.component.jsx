import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { ReactComponent as Cart } from '../../icons/cart-empty.svg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <Link to={ROUTES.HOME} className="btn btn-logo">
            De.
          </Link>
        </div>
        <div className="header__cart">
          <Link to={ROUTES.CART} className="btn btn-svg">
            <Cart />
          </Link>
        </div>
      </header>
    );
  }
}
