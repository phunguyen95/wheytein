import React from 'react';
import { Link } from 'react-router-dom';
import AllProductDropdown from './AllProductDropdown';
function Menu() {
  return (
    <div className="wrapped_menu_header">
      <ul className="menu_items">
        <li className="menu_item">
          <Link to="/">Homepage</Link>
        </li>
        <li className="menu_item menu__test ">
          <Link className="dropdown__product" to="/products">
            All Products
          </Link>
        </li>
        <AllProductDropdown />

        <li className="menu_item">Shop By Goal</li>
        <li className="menu_item">
          <Link to="/weight-lost">Weight Lost</Link>
        </li>
        <li className="menu_item">
          <Link to="/specials">Specials</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
