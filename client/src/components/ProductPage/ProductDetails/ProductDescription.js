import React, { Component } from 'react';
import NutritionFact from './NutritionFact';
import ProductDescriptionSeeMore from './ProductDescriptionSeeMore';
import RelatedProducts from './RelatedProducts';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import FrequentlyPurchaseTogether from './FrequentlyPurchaseTogether';
export default class ProductDescription extends Component {
  state = {
    seeMoreDescription: false,
    firstCheckBox: true,
    secondCheckBox: true,
    thirdCheckBox: true,
    windowWidth: undefined,
    windowHeight: undefined
  };
  seeMore = () => {
    const { windowWidth } = this.state;
    this.setState({
      seeMoreDescription: !this.state.seeMoreDescription
    });
  };
  displaySeeMore = seeMore => {
    let result = null;
    seeMore ? (result = <ProductDescriptionSeeMore />) : (result = null);
    return result;
  };
  handleResize = () =>
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });

  onChangeSelect = e => {
    this.setState({
      [e.target.id]: !e.target.checked
    });
  };
  renderMobile = () => {
    const { seeMoreDescription } = this.state;
    const {
      firstCheckBox,
      secondCheckBox,
      thirdCheckBox,
      windowWidth
    } = this.state;
    const disabled = !firstCheckBox && !secondCheckBox && !thirdCheckBox;
    return (
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
            {this.displaySeeMore(seeMoreDescription)}
            <p className="description_text">Frequently Purchased Together</p>
          </div>
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
                <input type="checkbox" checked={this.state.secondCheckBox} />
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
              <div className="freq-btn-to-cart">
                <button
                  className={classnames('btn-add-to-cart freq', {
                    blur: !firstCheckBox && !secondCheckBox && !thirdCheckBox
                  })}
                  disabled={disabled}
                >
                  <span>ADD TO CART</span>
                </button>
              </div>
            </div>
          </div>
          <NutritionFact windowWidth={windowWidth} />
          <RelatedProducts windowWidth={windowWidth} />
        </div>
      </div>
    );
  };
  renderDesktop = () => {
    const { windowWidth, seeMoreDescription } = this.state;

    return (
      <div>
        <div className="wrapped-freq-prods">
          <div className="bundle-offer-container">
            <div className="bundle-offer">Frequently Purchased Together</div>
            <div className="bundle-offer-nib" />
            <div className="header-text" />
          </div>
          <FrequentlyPurchaseTogether />
        </div>

        <div className="container__description">
          <div className="product__over_view__wrapped">
            <div className="heading__description">
              <span>
                <strong>Product Overview</strong>
              </span>
            </div>
            <div className="product-description-container">
              <div className="inner-content-description">
                <div className="product-overview-more">
                  <p className="description_text">Description</p>

                  {this.displaySeeMore(true)}
                </div>
              </div>

              <div className="inner-content-nutrition-fact">
                <NutritionFact windowWidth={windowWidth} />
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts windowWidth={windowWidth} />
      </div>
    );
  };
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const { windowWidth } = this.state;
    return (
      <div className="container__description__wrapkped">
        {windowWidth < 640 ? this.renderMobile() : this.renderDesktop()}
      </div>
    );
  }
}
