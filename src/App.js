import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

// Add lazy loading later
import BrowsePage from './pages/browse-page';
import WomenPage from './pages/women-page';
import MenPage from './pages/men-page';

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
          <Route path={ROUTES.WOMEN}>
            <WomenPage />
          </Route>
          <Route path={ROUTES.MEN}>
            <MenPage />
          </Route>
          <Route path={ROUTES.CART}>
            <p>Cart Page</p>
          </Route>
          <Route path={ROUTES.HOME}>
            <BrowsePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}
