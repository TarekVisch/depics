import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { CartProvider } from './context/cartContext';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

// Add lazy loading later
import BrowsePage from './pages/browse-page';
import WomenPage from './pages/women-page';
import MenPage from './pages/men-page';
import CartPage from './pages/cart-page';

export default function App() {
  return (
    <CartProvider>
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
            <CartPage />
          </Route>
          <Route path={ROUTES.HOME}>
            <BrowsePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </CartProvider>
  );
}
