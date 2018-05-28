import React, { Component } from 'react';
import SelectOptionGroups from '../Products/SelectOptionGroups';

export default class ProductDetailsRightColumn extends Component {
  state = {
    qty: 0
  };

  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };
  render() {
    const options_price = [
      { label: '0', value: 0 },
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 }
    ];
    return (
      <div className="wrapped_qty_info">
      <div className="quantity_container">
        <div className="filter__select__quantity">
          <label>Qty:</label>
          <div className="wrapped_select">
            <SelectOptionGroups
              value={this.state.qty}
              name="qty"
              onChange={this.onChange}
              options={options_price}
            />
            <span className="dropdown_icon">
              {' '}
              <img src="/img/arrow-down.png" alt="no image found" />
            </span>
          </div>
        </div>
        <div className="wrapped_add_to_cart">
          <div className="btn-to-cart">
            <button className="btn-add-to-cart">
              <span className="pulse-ring" />
              <i class="fa fa-plus pull-left" />
              <span>ADD TO CART</span>
            </button>
          </div>
          <div className="btn-to-wish-list-wrapped">
            <button className="btn-add-to-wish">
              <span>ADD TO WISH LIST</span>
            </button>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
