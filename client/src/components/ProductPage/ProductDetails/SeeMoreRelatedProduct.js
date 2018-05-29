import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class SeeMoreRelatedProducts extends Component {
  render() {
    return (
      <div className="wrapped-related-products">
        <div className="related-products-container">
          <div className="related_item">
            <Link to="/products/gold">
              <div className="image">
                <img src="/img/products/gold_5lbs.jpg" />
              </div>
              <div className="product-info-wrapped">
                <div className="product-description">
                  <span>
                    Optimum Nutrition, Gold Standard, 100% Whey, Vanilla Ice
                    Cream, 7.79 lb (3.53 kg)
                  </span>
                </div>
                <div className="product-price">NZ$135.65</div>
              </div>
            </Link>
          </div>
          <div className="related_item">
            <div className="image">
              <img src="/img/products/gold_5lbs.jpg" />
            </div>
            <div className="product-info-wrapped">
              <div className="product-description">
                <span>
                  Optimum Nutrition, Gold Standard, 100% Whey, Vanilla Ice
                  Cream, 7.79 lb (3.53 kg)
                </span>
              </div>
              <div className="product-price">NZ$135.65</div>
            </div>
          </div>
          <div className="related_item">
            <div className="image">
              <img src="/img/products/gold_5lbs.jpg" />
            </div>
            <div className="product-info-wrapped">
              <div className="product-description">
                <span>
                  Optimum Nutrition, Gold Standard, 100% Whey, Vanilla Ice
                  Cream, 7.79 lb (3.53 kg)
                </span>
              </div>
              <div className="product-price">NZ$135.65</div>
            </div>
          </div>
          <div className="related_item">
            <div className="image">
              <img src="/img/products/gold_5lbs.jpg" />
            </div>
            <div className="product-info-wrapped">
              <div className="product-description">
                <span>
                  Optimum Nutrition, Gold Standard, 100% Whey, Vanilla Ice
                  Cream, 7.79 lb (3.53 kg)
                </span>
              </div>
              <div className="product-price">NZ$135.65</div>
            </div>
          </div>
          <div className="related_item">
            <div className="image">
              <img src="/img/products/gold_5lbs.jpg" />
            </div>
            <div className="product-info-wrapped">
              <div className="product-description">
                <span>
                  Optimum Nutrition, Gold Standard, 100% Whey, Vanilla Ice
                  Cream, 7.79 lb (3.53 kg)
                </span>
              </div>
              <div className="product-price">NZ$135.65</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
