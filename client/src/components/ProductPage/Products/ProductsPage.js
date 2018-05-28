import React, { Component } from 'react';
import SelectOptionGroups from './SelectOptionGroups';
import ProductItems from './ProductItems';
export default class ProductsPage extends Component {
  state = {
    status: ''
  };
  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };
  render() {
    const options = [
      { label: 'Latest', value: 0 },
      { label: 'Most Popilar', value: 1 },
      { label: 'Highest Price', value: 2 },
      { label: 'Lowest Price', value: 3 }
    ];
    return (
      <div className="product__wrapped">
        <div className="wrapped__sort_by">
          <div className="sort__by__container">
            <div className="filter__text">
              <h4>Refine by</h4>
            </div>
            <div className="filter__select">
              <SelectOptionGroups
                value={this.state.status}
                name="status"
                onChange={this.onChange}
                options={options}
              />
            </div>
          </div>
        </div>
        <div className="wrapped__list__products">
          <div className="heading_info">
            <h3>All products</h3>
          </div>
          <div className="list__products__container">
            <ProductItems perPage={10} />
          </div>
        </div>
      </div>
    );
  }
}
