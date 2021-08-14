import React from 'react';
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
          <a href="/" className="btn btn-logo">
            De.
          </a>
        </div>
        <div className="header__cart">
          <a href="/cart" className="btn btn-svg">
            <Cart />
          </a>
        </div>
      </header>
    );
  }
}
