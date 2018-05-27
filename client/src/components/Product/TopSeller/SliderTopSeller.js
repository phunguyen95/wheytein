import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SliderTopSeller extends Component {
  state = {
    windowHeight: undefined,
    windowWidth: undefined
  };
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize = () =>
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  render() {
    let { windowWidth } = this.state;
    var settings = {
      infinite: true,
      speed: 1000,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      variableWidth: true
    };
    return (
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
    );
  }
}
