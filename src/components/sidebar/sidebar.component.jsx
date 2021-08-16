import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <NavLink
              to="/women"
              className="btn btn-sidebar"
              activeClassName="currentSidebarLink"
            >
              <WomenFashionIcon />
              <p>Womens's Fashion</p>
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink
              to="/men"
              className="btn btn-sidebar"
              activeClassName="currentSidebarLink"
            >
              <MenFashionIcon />
              <p>Men's Fashion</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
