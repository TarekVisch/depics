import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';

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
        </section>
      </main>
    );
  }
}
