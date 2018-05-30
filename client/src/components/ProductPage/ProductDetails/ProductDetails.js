import React, { Component } from 'react';
import Slider from 'react-slick';
import SelectOptionGroups from '../Products/SelectOptionGroups';
import ProductDescription from './ProductDescription';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
export default class ProductDetails extends Component {
  state = {
    flavours: '',
    windowWidth: undefined,
    windowHeight: undefined,
    sizeSelected: 1,
    quantity: 0
  };
  handleSelect = e => {
    this.setState({
      sizeSelected: e.target.id
    });
  };
  onChange = e => {
    this.setState({
      [e.target.name]: [e.target.value]
    });
  };
  renderDesktop = () => {
    const options = [
      { label: 'Double Chocolate', value: 'Double Chocolate' },
      { label: 'Triple Chocolate', value: 'Triple Chocolate' },
      { label: 'Double Chocolate', value: 'Double Chocolate' },
      { label: 'Double Chocolate', value: 'Double Chocolate' },
      { label: 'Double Chocolate', value: 'Double Chocolate' },
      { label: 'Double Chocolate', value: 'Double Chocolate' }
    ];
    const disabled = 'true';

    const { sizeSelected } = this.state;
    return (
      <div>
        <div className="">
          <div className="product-flag-container">
            <div className="flag-best-seller">Best Seller</div>
          </div>
          <div className="product_title_text">
            <strong>
              Optimum Nutrition, Gold Standard, 100% Whey, French Vanilla Crème,
              5 lbs (2.27 kg)
            </strong>
          </div>
          <div className="vendor">
            By <Link to="/brands/Optinum-Nutrition">Optinum Nutrition </Link>
          </div>
        </div>
        <div className="status">
          <div className="stock-status">
            Status: <span>In Stock</span>
          </div>
        </div>
        <div className="product__info">
          <div className="wrapped_flavoured_info">
            <div className="flavours__text">
              <span>Flavours:</span>
            </div>
            <div className="filter__select">
              <SelectOptionGroups
                value={this.state.flavours}
                name="flavours"
                onChange={this.onChange}
                options={options}
              />
            </div>
          </div>
          <div className="wrapped__size__info">
            <span>
              Size: <storng>5 lbs</storng>
            </span>
            <div className="size__container">
              <div
                id="1"
                className={classnames('size_item', {
                  active_size: sizeSelected == 1
                })}
                onClick={this.handleSelect}
              >
                5 lbs
              </div>
              <div
                id="2"
                className={classnames('size_item', {
                  active_size: sizeSelected == 2
                })}
                onClick={this.handleSelect}
              >
                2 lbs
              </div>
              <div className="size_item">1 lbs</div>
              <div className="size_item">1 lbs</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  renderMobile = () => {
    const { component } = this.props;
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000
    };
    const options = [
      { label: 'Double Chocolate', value: 'Double Chocolate' },
      { label: 'Triple Chocolate', value: 'Triple Chocolate' },
      { label: 'Double Chocolate', value: 'Double Chocolate' },
      { label: 'Double Chocolate', value: 'Double Chocolate' },
      { label: 'Double Chocolate', value: 'Double Chocolate' },
      { label: 'Double Chocolate', value: 'Double Chocolate' }
    ];

    return (
      <div>
        <div className="product_title_text">
          <strong>
            Optimum Nutrition, Gold Standard, 100% Whey, French Vanilla Crème, 5
            lbs (2.27 kg)
          </strong>
        </div>
        <div className="product__slider__images">
          <Slider {...settings}>
            <div className="product_slider_image">
              <img src="/img/products/gold_slider.jpg" />
            </div>
            <div className="product_slider_image">
              <img src="/img/products/gold_slider_1.jpg" />
            </div>
          </Slider>
        </div>
        <div className="product__info">
          <div className="product__price">
            <span>NZ $99 </span>
            <div>
              <span className="per_pounds">NZ $19/lbs</span>
            </div>
          </div>
          <div className="wrapped_flavoured_info">
            <div className="flavours__text">
              <span>Flavours:</span>
            </div>
            <div className="filter__select">
              <SelectOptionGroups
                value={this.state.flavours}
                name="flavours"
                onChange={this.onChange}
                options={options}
              />
            </div>
          </div>
          <div className="wrapped__size__info">
            <span>
              Size: <storng>5 lbs</storng>
            </span>
            <div className="size__container">
              <div
                data-url="https://nz.iherb.com/pr/Optimum-Nutrition-Gold-Standard-100-Whey-French-Vanilla-Cr-me-2-lbs-909-g/27499"
                className="size_item"
              >
                5 lbs
              </div>
              <div className="size_item">2 lbs</div>
              <div className="size_item">1 lbs</div>
              <div className="size_item">1 lbs</div>
            </div>
          </div>
          {component ? component : null}
          <ProductDescription />
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
  handleResize = () =>
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  render() {
    const { windowWidth } = this.state;
    return (
      <section className="wrapped__details__section">
        {windowWidth < 640 ? this.renderMobile() : this.renderDesktop()}
      </section>
    );
  }
}
