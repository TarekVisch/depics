import React from 'react';
import { ReactComponent as WomenFashionIcon } from '../../icons/fashion-women.svg';
import { ReactComponent as MenFashionIcon } from '../../icons/fashion-men.svg';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="sidebar">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <a href="/women" className="btn btn-sidebar">
              <WomenFashionIcon />
              <p>Womens's Fashion</p>
            </a>
          </li>
          <li className="sidebar__item">
            <a href="/men" className="btn btn-sidebar">
              <MenFashionIcon />
              <p>Men's Fashion</p>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
