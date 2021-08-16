import React from 'react';
import Sidebar from '../components/sidebar/sidebar.component';

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
        </section>
      </main>
    );
  }
}
