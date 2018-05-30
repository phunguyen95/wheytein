import React, { Component } from 'react';
import SeeMoreRelatedProducts from './SeeMoreRelatedProduct';
import Slider from 'react-slick';

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
  renderMobile = () => {
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
  };
  renderDesktop = () => {
    return (
      <div className="related-product-wrapped">
        <div className="product-overview-more slider_related_hader">
          <p className="description_text">Related Products</p>
        </div>
        {this.displaySlider()}
      </div>
    );
  };
  displaySlider = () => {
    var settings = {
      infinite: true,
      speed: 1000,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      variableWidth: true
    };
    return (
      <div className="wrapped_slider_related_products">
        <Slider {...settings}>
          <div className="top__seller__List">
            <div className="top_seller__wrapped">
              <div className="top__seller_item">
                <img src="/img/products/iso_surge.jpg" />
              </div>
            </div>
          </div>
          <div className="top__seller__List">
            <div className="top_seller__wrapped">
              <div className="top__seller_item">
                <img src="/img/products/iso_surge.jpg" />
                <div className="caption__info">
                  <div className="caption__info__wrapped">
                    <div className="product__title">
                      <h4>Mutant Iso Surge 5lbs</h4>
                    </div>
                    <div className="product__price">
                      <span>$110</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top__seller__List">
            <div className="top_seller__wrapped">
              <div className="top__seller_item">
                <img src="/img/products/iso_surge.jpg" />
              </div>
            </div>
          </div>
          <div className="top__seller__List">
            <div className="top_seller__wrapped">
              <div className="top__seller_item">
                <img src="/img/products/iso_surge.jpg" />
              </div>
            </div>
          </div>
          <div className="top__seller__List">
            <div className="top_seller__wrapped">
              <div className="top__seller_item">
                <img src="/img/products/iso_surge.jpg" />
              </div>
            </div>
          </div>
          <div className="top__seller__List">
            <div className="top_seller__wrapped">
              <div className="top__seller_item">
                <img src="/img/products/iso_surge.jpg" />
              </div>
            </div>
          </div>
          <div className="top__seller__List">
            <div className="top_seller__wrapped">
              <div className="top__seller_item">
                <img src="/img/products/iso_surge.jpg" />
              </div>
            </div>
          </div>
          <div className="top__seller__List">
            <div className="top_seller__wrapped">
              <div className="top__seller_item">
                <img src="/img/products/iso_surge.jpg" />
              </div>
            </div>
          </div>
          <div className="top__seller__List">
            <div className="top_seller__wrapped">
              <div className="top__seller_item">
                <img src="/img/products/iso_surge.jpg" />
              </div>
            </div>
          </div>
          <div className="top__seller__List">
            <div className="top_seller__wrapped">
              <div className="top__seller_item">
                <img src="/img/products/iso_surge.jpg" />
              </div>
            </div>
          </div>
          <div className="top__seller__List">
            <div className="top_seller__wrapped">
              <div className="top__seller_item">
                <img src="/img/products/iso_surge.jpg" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  };
  render() {
    const { windowWidth } = this.props;
    return (
      <div className="">
        {windowWidth < 1000 ? this.renderMobile() : this.renderDesktop()}
      </div>
    );
  }
}
