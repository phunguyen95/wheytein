import React, { Component } from 'react';
import NutritionFactSeeMore from './NutritionFactSeeMore';
export default class NutritionFact extends Component {
  state = {
    seeMoreNutritionFact: false
  };
  seeMore = () => {
    this.setState({
      seeMoreNutritionFact: !this.state.seeMoreNutritionFact
    });
  };
  displaySeeMore = seeMore => {
    let result = null;
    seeMore ? (result = <NutritionFactSeeMore />) : (result = null);
    return result;
  };
  renderMobile = () => {
    const { seeMoreNutritionFact } = this.state;
    console.log('vo day');
    const windowWidth = this.props.windowWidth;
    return (
      <div className="product-overview-more" onClick={this.seeMore}>
        <p className=" description_text">Nutrition Fact</p>
        {!seeMoreNutritionFact ? (
          <i class="fa fa-plus inline-view-more" />
        ) : (
          <i className="fa fa-minus inline-view-more" />
        )}
        {this.displaySeeMore(seeMoreNutritionFact)}
      </div>
    );
  };
  renderDesktop = () => {
    const { seeMoreNutritionFact } = this.state;
    return <div>{this.displaySeeMore(true)}</div>;
  };
  render() {
    const { seeMoreNutritionFact } = this.state;
    const windowWidth = this.props.windowWidth;
    console.log(windowWidth);
    return (
      <div>
        {windowWidth < 640 ? this.renderMobile() : this.renderDesktop()}
      </div>
    );
  }
}
