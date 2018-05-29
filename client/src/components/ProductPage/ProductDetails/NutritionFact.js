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

  render() {
    const { seeMoreNutritionFact } = this.state;
    return (
      <div className="product-overview-more" onClick={this.seeMore}>
        <p className="description_text">Nutrition Fact</p>
        {!seeMoreNutritionFact ? (
          <i class="fa fa-plus inline-view-more" />
        ) : (
          <i className="fa fa-minus inline-view-more" />
        )}
        {this.displaySeeMore(seeMoreNutritionFact)}
      </div>
    );
  }
}
