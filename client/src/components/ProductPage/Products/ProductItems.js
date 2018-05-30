import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
export default class ProductItems extends Component {
  state = {
    data: [],
    offset: 0
  };

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState({ offset: offset }, () => {});
  };

  render() {
    return (
      <div className="product__items__wrapped">
        <div className="product__item__content">
          <Link to="/products/gold-standard-5lbs">
            <div className="product_item_images">
              <div className="product_image">
                <img src="/img/products/gold_5lbs.jpg" alt="No image founded" />
              </div>
              <div className="product_gift_icon">
                <img
                  className="gift_icon"
                  src="/img/icon_gift.png"
                  alt="No image founded"
                />
              </div>
            </div>
            <div className="product_item_info">
              <div className="product__heading">
                <h3>Whey Gold Standard 5lbs</h3>
              </div>
              <div className="product__price">
                <div className="product_new_price">
                  <span>$79</span>
                </div>
                <div className="del_price">
                  <span>$99</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="product__item__content">
          <Link to="/products/gold-standard-5lbs">
            <div className="product_item_images">
              <div className="product_image">
                <img src="/img/products/gold_5lbs.jpg" alt="No image founded" />
              </div>
              <div className="product_gift_icon">
                <img
                  className="gift_icon"
                  src="/img/icon_gift.png"
                  alt="No image founded"
                />
              </div>
            </div>
            <div className="product_item_info">
              <div className="product__heading">
                <h3>Whey Gold Standard 5lbs</h3>
              </div>
              <div className="product__price">
                <div className="product_new_price">
                  <span>$79</span>
                </div>
                <div className="del_price">
                  <span>$99</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="product__item__content">
          <Link to="/products/gold-standard-5lbs">
            <div className="product_item_images">
              <div className="product_image">
                <img src="/img/products/gold_5lbs.jpg" alt="No image founded" />
              </div>
              <div className="product_gift_icon">
                <img
                  className="gift_icon"
                  src="/img/icon_gift.png"
                  alt="No image founded"
                />
              </div>
            </div>
            <div className="product_item_info">
              <div className="product__heading">
                <h3>Whey Gold Standard 5lbs</h3>
              </div>
              <div className="product__price">
                <div className="product_new_price">
                  <span>$79</span>
                </div>
                <div className="del_price">
                  <span>$99</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="product__item__content">
          <Link to="/products/gold-standard-5lbs">
            <div className="product_item_images">
              <div className="product_image">
                <img src="/img/products/gold_5lbs.jpg" alt="No image founded" />
              </div>
              <div className="product_gift_icon">
                <img
                  className="gift_icon"
                  src="/img/icon_gift.png"
                  alt="No image founded"
                />
              </div>
            </div>
            <div className="product_item_info">
              <div className="product__heading">
                <h3>Whey Gold Standard 5lbs</h3>
              </div>
              <div className="product__price">
                <div className="product_new_price">
                  <span>$79</span>
                </div>
                <div className="del_price">
                  <span>$99</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="product__item__content">
          <Link to="/products/gold-standard-5lbs">
            <div className="product_item_images">
              <div className="product_image">
                <img src="/img/products/gold_5lbs.jpg" alt="No image founded" />
              </div>
              <div className="product_gift_icon">
                <img
                  className="gift_icon"
                  src="/img/icon_gift.png"
                  alt="No image founded"
                />
              </div>
            </div>
            <div className="product_item_info">
              <div className="product__heading">
                <h3>Whey Gold Standard 5lbs</h3>
              </div>
              <div className="product__price">
                <div className="product_new_price">
                  <span>$79</span>
                </div>
                <div className="del_price">
                  <span>$99</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="product__item__content">
          <Link to="/products/gold-standard-5lbs">
            <div className="product_item_images">
              <div className="product_image">
                <img src="/img/products/gold_5lbs.jpg" alt="No image founded" />
              </div>
              <div className="product_gift_icon">
                <img
                  className="gift_icon"
                  src="/img/icon_gift.png"
                  alt="No image founded"
                />
              </div>
            </div>
            <div className="product_item_info">
              <div className="product__heading">
                <h3>Whey Gold Standard 5lbs</h3>
              </div>
              <div className="product__price">
                <div className="product_new_price">
                  <span>$79</span>
                </div>
                <div className="del_price">
                  <span>$99</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
