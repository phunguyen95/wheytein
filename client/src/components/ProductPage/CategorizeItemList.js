import React from 'react';
import { Link } from 'react-router-dom';
class CategorizeItemList extends React.Component {
  state = {
    muscleBuilding: false,
    wheyProtein: false
  };
  showWheyProtein = status => {
    let result = null;
    if (status === true) {
      result = (
        <ul className="sub_category__items">
          <li className="sub2 ">
            <Link to="/products/muscle-building/protein/isolate">
              <span>Whey Protein Isolate</span>
            </Link>
          </li>
          <li className="sub2">
            <Link to="/products/muscle-building/protein/hydrolized">
              <span>Whey Hydrolized</span>
            </Link>
          </li>
          <li className="sub2">
            <Link to="/products/muscle-building/protein/whey-blend">
              <span>Whey Blend</span>
            </Link>
          </li>
        </ul>
      );
    }
    return result;
  };
  showTootleMuscleBuilding = status => {
    let result = null;
    if (status === true) {
      result = (
        <ul className="sub_category__items">
          <li className="sub1">
            <Link to="/products/muscle-building/protein">
              <span>Whey protein</span>
            </Link>
            <span onClick={this.toogleWheyProtein} class="sign">
              <img src="/img/arrow-down.png" alt="no image founded" />
            </span>
            {this.showWheyProtein(this.state.wheyProtein)}
          </li>
          <li className="sub1">
            <Link to="/products/casein">
              <span>Casein</span>
            </Link>
          </li>
          <li className="sub1">
            <Link to="/products/protein-bar">
              <span>Protein Bar</span>
            </Link>
          </li>
        </ul>
      );
    }
    return result;
  };
  toogleWheyProtein = e => {
    this.setState({
      wheyProtein: !this.state.wheyProtein
    });
  };
  toogleMuscleBuilding = e => {
    this.setState({
      muscleBuilding: !this.state.muscleBuilding
    });
  };
  render() {
    const { muscleBuilding } = this.state;
    return (
      <div className="category__list__wrapped">
        <div className="category__list__container">
          <div className="heading__section">
            <h5>CATEGORIES</h5>
          </div>
          <ul className="category__items">
            <li className="has-sub ">
              <Link to="/products/muscle-building/">Muscle Building</Link>
              <span onClick={this.toogleMuscleBuilding} class="sign">
                <img src="/img/arrow-down.png" alt="no image founded" />
              </span>
              {this.showTootleMuscleBuilding(muscleBuilding)}
            </li>
            <li className="has-sub ">
              <Link to="/products/muscle-building/">Muscle Building</Link>
            </li>
            <li className="category_item">Muscle Building</li>
            <li className="category_item">Muscle Building</li>
            <li className="category_item">Muscle Building</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CategorizeItemList;
