import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/women" className="btn btn-sidebar">
              <WomenFashionIcon />
              <p>Womens's Fashion</p>
            </Link>
          </li>
          <li className="sidebar__item">
            <Link to="/men" className="btn btn-sidebar">
              <MenFashionIcon />
              <p>Men's Fashion</p>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
