import React from 'react';
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
      </main>
    );
  }
}
