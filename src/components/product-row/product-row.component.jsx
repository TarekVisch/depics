import React from 'react';
import { CartContext } from '../../context/cartContext';
import Card from '../card/card.component';

export default class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { products } = this.props;
    return (
      <CartContext.Consumer>
        {(context) => (
          <div className="products__row">
            {products.map((product) => (
              <div key={product.id} className="products__col">
                <Card product={product} context={context} />
              </div>
            ))}
          </div>
        )}
      </CartContext.Consumer>
    );
  }
}
