import React from 'react';
import { ReactComponent as AddIcon } from '../../icons/add.svg';
import { ReactComponent as CartFullIcon } from '../../icons/cart-filled.svg';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  render() {
    const { product, context } = this.props;
    const isInCart =
      context.cart.filter((item) => item.id === product.id).length === 1;

    return (
      <div
        className="card"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="card__img">
          <img src={product.src} alt="Dress" />
        </div>
        <div className="card__title">
          <p>{product.title}</p>
        </div>
        <div className="card__price">
          <p>$ {product.price}</p>
        </div>
        {this.state.hovered && !isInCart ? (
          <button
            className="btn card__cart"
            onClick={() => context.addToCart(product)}
          >
            <AddIcon />
          </button>
        ) : null}
        {isInCart ? (
          <button
            className="btn card__cart"
            onClick={() => context.removeFromCart(product.id)}
          >
            <CartFullIcon />
          </button>
        ) : null}
      </div>
    );
  }
}
