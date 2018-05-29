import React, { Component } from 'react';
import classnames from 'classnames';
export default class ProductDetailsImage extends Component {
  state = {
    summaryImage: true,
    activeThumbnail: true
  };
  changeSummaryImage = () => {
    this.setState({
      summaryImage: !this.state.summaryImage,
      activeThumbnail: !this.state.activeThumbnail
    });
  };

  render() {
    const { summaryImage, activeThumbnail } = this.state;
    return (
      <div className="product-detail-image-wrapped">
        <div className="product-detail-image">
          {summaryImage ? (
            <img src="/img/products/gold_slider.jpg" alt="no image founded" />
          ) : (
            <img src="/img/products/gold_slider_1.jpg" alt="no image founded" />
          )}
        </div>
        <div className="image-thumbnai">
          <img
            src="/img/products/gold_slider.jpg"
            alt="no image founded"
            onClick={this.changeSummaryImage}
            className={classnames('thumbnail_image', {
              image_active: activeThumbnail
            })}
          />
          <img
            src="/img/products/gold_slider_1.jpg"
            alt="no image founded"
            onClick={this.changeSummaryImage}
            className={classnames('thumbnail_image', {
              image_active: !activeThumbnail
            })}
          />
        </div>
      </div>
    );
  }
}
