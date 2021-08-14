import React from 'react';
import Carousel from '../components/carousel/carousel.component';
import Sidebar from '../components/sidebar/sidebar.component';

export default class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="browse">
        <Sidebar />

        <section className="browse__section">
          <Carousel />
        </section>
      </main>
    );
  }
}
