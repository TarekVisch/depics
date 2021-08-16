import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';
import ProductTable from '../components/product-table/product-table.component';
import womensData from '../fixtures/women.json';

export default class WomenPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="women">
        <Sidebar />

        <section className="women__section">
          <h1 className="women__header">Women's Fashion</h1>
          <ProductTable data={womensData} />
        </section>
      </main>
    );
  }
}
