import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
export default class FrequentlyPurchaseTogether extends Component {
  state = {
    firstCheckBox: true,
    secondCheckBox: true,
    thirdCheckBox: true
  };
  onChangeSelect = e => {
    this.setState({
      [e.target.id]: !e.target.checked
    });
  };
  render() {
    const {
      firstCheckBox,
      secondCheckBox,
      thirdCheckBox,
      windowWidth
    } = this.state;
    const disabled = !firstCheckBox && !secondCheckBox && !thirdCheckBox;

    return (
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
                  Gold Standard, 100% Whey, Double Rich Chocolate, 5 lbs (2,27
                  kg)
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
                  Gold Standard, 100% Whey, Double Rich Chocolate, 5 lbs (2,27
                  kg)
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
                  Gold Standard, 100% Whey, Double Rich Chocolate, 5 lbs (2,27
                  kg)
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
              <span>Add Selected To Cart</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
