import React from 'react';
import ProductRow from '../product-row/product-row.component';

export default class ProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = this.props.data;

    return (
      <div className="products">
        {data.map((item) => (
          <div key={item.id} className="products__container">
            <h2 className="products__category">{item.category}</h2>
            <ProductRow products={item.products} />
          </div>
        ))}
      </div>
    );
  }
}
