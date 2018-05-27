import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SliderBanner extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000
    };
    return (
      <div className="wrapped_slider_baner">
        <Slider {...settings}>
          <div className="featured_item">
            <div
              className="featured_image"
              style={{
                background: `url(../img/slideshow_3.jpg)`
              }}
            />
          </div>
          <div className="featured_item">
            <div
              className="featured_image"
              style={{
                background: `url(../img/slideshow_4.jpg)`
              }}
            />
          </div>
          <div className="featured_item">
            <div
              className="featured_image"
              style={{
                background: `url(../img/slideshow_3.jpg)`
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
