import React, { Component } from 'react';
import SeeMoreRelatedProducts from './SeeMoreRelatedProduct';
export default class RelatedProducts extends Component {
  state = {
    seeMoreRelatedProducts: false
  };
  seeMore = () => {
    this.setState({
      seeMoreRelatedProducts: !this.state.seeMoreRelatedProducts
    });
  };
  displaySeeMore = seeMore => {
    let result = null;
    seeMore ? (result = <SeeMoreRelatedProducts />) : (result = null);
    return result;
  };

  render() {
    const { seeMoreRelatedProducts } = this.state;
    return (
      <div className="product-overview-more">
        <p onClick={this.seeMore} className="description_text">
          Related Products
        </p>
        {!seeMoreRelatedProducts ? (
          <i class="fa fa-plus inline-view-more" />
        ) : (
          <i className="fa fa-minus inline-view-more" />
        )}
        {this.displaySeeMore(seeMoreRelatedProducts)}
      </div>
    );
  }
}
