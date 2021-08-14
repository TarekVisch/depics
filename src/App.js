import React from 'react';
import Header from './components/header/header.component';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Header />
      </div>
    );
  }
}
