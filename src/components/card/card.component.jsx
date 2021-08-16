import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { product } = this.props;
    return (
      <div className="card">
        <div className="card__img">
          <img src={product.src} alt="Dress" />
        </div>
        <div className="card__title">
          <p>{product.title}</p>
        </div>
        <div className="card__price">
          <p>$ {product.price}</p>
        </div>
      </div>
    );
  }
}
