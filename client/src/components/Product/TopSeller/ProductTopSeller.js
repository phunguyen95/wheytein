import React, { Component } from 'react';
import SectionHeading from './SectionHeading';
import SliderTopSeller from './SliderTopSeller';
export default class ProductTopSeller extends Component {
  render() {
    return (
      <div className="category">
        <div className="wrapped__top__seller">
          <SectionHeading />
          <div className="wrapped_slider_top_seller">
            <SliderTopSeller />
          </div>
        </div>
      </div>
    );
  }
}
