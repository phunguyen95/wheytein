import React, { Component } from 'react';
import SelectOptionGroups from '../Products/SelectOptionGroups';

export default class ProductDetailsRightColumn extends Component {
  state = {
    qty: 0,
    windowWidth: undefined,
    windowHeight: undefined
  };
  handleResize = () =>
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  renderMobile = () => {
    const options_price = [
      { label: '0', value: 0 },
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 }
    ];
    return (
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
    );
  };
  renderDesktop = () => {
    const options_price = [
      { label: '0', value: 0 },
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 }
    ];
    return (
      <div className="quantity_container">
        <div className="msrp_row">
          <div className="msrp_text">MSRP:</div>
          <div className="msrp_price">$155.40</div>
        </div>
        <div className="row">
          <div className="msrp_text">Our price:</div>
          <div className="our_price">NZ$87.54</div>
        </div>
        <div className="row">
          <div className="msrp_text" />
          <div className="per_pounds_row">
            <span className="per_pounds">$19/lbs</span>
          </div>
        </div>
        <div className="row">
          <div className="msrp_text">You save:</div>
          <div className="per_pounds_row">
            <span className="saving"> NZ$67.86(44%)</span>
          </div>
        </div>
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
    );
  };
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };
  render() {
    const { windowWidth } = this.state;
    return (
      <div className="wrapped_qty_info">
        {windowWidth < 640 ? this.renderMobile() : this.renderDesktop()}
      </div>
    );
  }
}
