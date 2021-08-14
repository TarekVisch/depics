import React from 'react';
import Header from './components/header/header.component';
import Browse from './pages/browse';
import Footer from './components/footer/footer.component';

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
        <Footer />
      </div>
    );
  }
}
