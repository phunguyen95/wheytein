import React, { Component } from 'react';
import ProductTopSeller from '../Product/TopSeller/ProductTopSeller';
import SliderBanner from './Slider/SliderBanner';
import ShopService from '../Product/ShopService/ShopService';
import CategoryPage from '../Product/Category/CategoryPage';
export default class Layout extends Component {
  render() {
    return (
      <div className="">
        <SliderBanner />
        <ProductTopSeller />
        <ShopService />
        <CategoryPage />
      </div>
    );
  }
}
