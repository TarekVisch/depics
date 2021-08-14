import React from 'react';
import Header from './components/header/header.component';
import Browse from './pages/browse';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Browse />
      </div>
    );
  }
}
