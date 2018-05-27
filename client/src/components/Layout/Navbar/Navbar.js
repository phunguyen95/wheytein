import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="wrapped_navbar">
          <div className="navbar">
            <div className="logo">
              <img src="/img/logo.png" alt="No image found" />
            </div>
            <div className="wrapped__menus">
              <div className="wrapped__search">
                <div className="search__bar">
                  <input type="text" placeholder="Search" />
                  <button className="btn btn-search">
                    <img src="/img/search.svg" />
                  </button>
                </div>
              </div>
              <div className="wrapped__menu">
                <ul className="menu__items">
                  <li className="menu__item">
                    <Link to="/cart">
                      <div className="rounded-circle-icon">
                        <i class="fa fa-shopping-bag" />
                        <span className="cart__quantity">0</span>
                      </div>
                      <span className="fa__info">Cart</span>
                    </Link>
                  </li>

                  <li className="menu__item">
                    <Link to="/account">
                      <div className="rounded-circle-icon">
                        <i class="fa fa-user" />
                      </div>
                      <span className="fa__info">Account</span>
                    </Link>
                  </li>
                  <li className="menu__item">
                    <a href="https://www.facebook.com/profile.php?id=100009378927105">
                      <div className="rounded-circle-icon">
                        <i class="fa fa-facebook" />
                      </div>
                      <span className="fa__info">Facebook</span>
                    </a>
                  </li>
                  <li className="menu__item">
                    <div className="rounded-circle-icon">
                      <i class="fa fa-map-marker" />
                    </div>
                    <span className="fa__info">Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="line__break_nav_bar" />
        </header>
        <Menu />
      </div>
    );
  }
}
