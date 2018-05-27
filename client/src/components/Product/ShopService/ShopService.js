import React, { Component } from 'react';
import SubcribseNewLetters from './SubcribseNewLetters';
export default class ShopService extends Component {
  render() {
    return (
      <div>
        <SubcribseNewLetters />
        <div class="service__shop__wrap">
          <div className="service__shop__container">
            <div className="wrapped__information__service">
              <div className="header__service">
                <i className="fa fa-tags" />
                <p>PROMOTION</p>
              </div>
              <div className="service__content">
                <p>
                  NZ's lowest prices and crazy deals on protein, fat burners,
                  pre-workouts, creatine, aminos and much more! This page is
                  NZ's home of discount supplements online.
                </p>
              </div>
            </div>
            <div className="wrapped__information__service">
              <div className="header__service">
                <i className="fa fa-balance-scale" />
                <p>Delivery</p>
              </div>
              <div className="service__content">
                <p>
                  <strong>FREE Shipping</strong> NZ Wide with Courier Post! Yes
                  you heard it here - Free shipping all over NZ. Our shipping
                  turn around times are great and are dispatched as quickly as
                  possible to ensure you receive your product super fast!
                </p>
              </div>
            </div>
            <div className="wrapped__information__service">
              <div className="header__service">
                <i className="fa fa-home" />
                <span>Customer Services</span>
              </div>
              <div className="service__content">
                <span>
                  Forget all the spin and marketing hype - we leave it at the
                  door. What you can expect from us is good, honest, Kiwi advice
                  and service.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
