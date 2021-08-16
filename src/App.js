import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

// Add lazy loading later
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
        <Switch>
          <Route path="/women">
            <p>Women's section</p>
          </Route>
          <Route path="/men">
            <p>Men's section</p>
          </Route>
          <Route path="/cart">
            <p>Cart Page</p>
          </Route>
          <Route path="/">
            <Browse />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}
