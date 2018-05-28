import React, { Component } from 'react';
import NutritionFact from './NutritionFact';
import ProductDescriptionSeeMore from './ProductDescriptionSeeMore';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
export default class ProductDescription extends Component {
  state = {
    seeMore: false,
    firstCheckBox: true,
    secondCheckBox: true,
    thirdCheckBox: true
  };
  seeMore = () => {
    console.log('vo day');
    this.setState({
      seeMore: !this.state.seeMore
    });
  };
  displaySeeMore = seeMore => {
    let result = null;
    seeMore ? (result = <ProductDescriptionSeeMore />) : (result = null);
    return result;
  };

  onChangeSelect = e => {
    this.setState({
      [e.target.id]: !e.target.checked
    });
  };
  render() {
    const { seeMore } = this.state;

    return (
      <div className="container__description__wrapped">
        <div className="container__description">
          <div className="product__over_view__wrapped">
            <div className="heading__description">
              <span>
                <strong>Product Overview</strong>
              </span>
            </div>
            <div className="product-overview-more">
              <p className="description_text">Description</p>
              <i
                class="fa fa-plus inline-view-more"
                onClick={() => this.seeMore()}
              />
              {this.displaySeeMore(seeMore)}
              <p className="description_text">Frequently Purchased Together</p>
              <div className="freq_prods_wrapped">
                <div className="freq_prod_container">
                  <div
                    className={classnames('freq_product', {
                      actived: this.state.firstCheckBox
                    })}
                  >
                    <img src="/img/products/gold_5lbs.jpg" />
                    <i class="fa fa-plus purchase_together" />
                  </div>
                  <div
                    className={classnames('freq_product', {
                      actived: this.state.secondCheckBox
                    })}
                  >
                    <img src="/img/products/gold_5lbs.jpg" />
                    <i class="fa fa-plus purchase_together" />
                  </div>
                  <div
                    className={classnames('freq_product', {
                      actived: this.state.thirdCheckBox
                    })}
                  >
                    <img src="/img/products/gold_5lbs.jpg" />
                  </div>
                </div>
                <div className="check_box_freq_wrapped">
                  <div className="freq_descrip">
                    <input type="checkbox" checked={this.state.firstCheckBox} />
                    <label
                      id="firstCheckBox"
                      labelName="firstCheckBox"
                      checked={this.state.firstCheckBox}
                      onClick={this.onChangeSelect}
                    />
                    <div className="freq_description-wrapper">
                      <span className="first">Current item:</span>
                      <Link to="/products/gold-standard-5lbs">
                        <span>
                          Gold Standard, 100% Whey, Double Rich Chocolate, 5 lbs
                          (2,27 kg)
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="freq_descrip">
                    <input
                      type="checkbox"
                      checked={this.state.secondCheckBox}
                    />
                    <label
                      id="secondCheckBox"
                      labelName="firstCheckBox"
                      checked={this.state.secondCheckBox}
                      onClick={this.onChangeSelect}
                    />
                    <div className="freq_description-wrapper">
                      <span className="first">Current item:</span>
                      <Link to="/products/gold-standard-5lbs">
                        <span>
                          Gold Standard, 100% Whey, Double Rich Chocolate, 5 lbs
                          (2,27 kg)
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="freq_descrip">
                    <input type="checkbox" checked={this.state.thirdCheckBox} />
                    <label
                      id="thirdCheckBox"
                      labelName="firstCheckBox"
                      checked={this.state.thirdCheckBox}
                      onClick={this.onChangeSelect}
                    />
                    <div className="freq_description-wrapper">
                      <span className="first">Current item:</span>
                      <Link to="/products/gold-standard-5lbs">
                        <span>
                          Gold Standard, 100% Whey, Double Rich Chocolate, 5 lbs
                          (2,27 kg)
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NutritionFact />
          </div>
        </div>
      </div>
    );
  }
}
