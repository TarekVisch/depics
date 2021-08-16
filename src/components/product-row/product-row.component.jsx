import React from 'react';
import Card from '../card/card.component';

export default class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { products } = this.props;
    return (
      <div className="products__row">
        {products.map((product) => (
          <div key={product.id} className="products__col">
            <Card product={product} />
          </div>
        ))}
      </div>
    );
  }
}
