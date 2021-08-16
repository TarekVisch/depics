import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import ProductTable from '../components/product-table/product-table.component';
import mensData from '../fixtures/men.json';

export default class MenPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="men">
        <Sidebar />

        <section className="men__section">
          <h1 className="men__header">Men's Fashion</h1>
          <ProductTable data={mensData} />
        </section>
      </main>
    );
  }
}
