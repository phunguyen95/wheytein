import React, { Component } from 'react';
import CategoryCollapse from './CategoryCollapse';
import CategorizeItemList from './CategorizeItemList'

export default class ListCategoryProduct extends Component {
  state = {
    toogleDropdown: false,
    windowHeight: undefined,
    windowWidth: undefined
  };
  handleOnClick = e => {
    e.preventDefault();
    this.setState({
      toogleDropdown: !this.state.toogleDropdown
    });
  };
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  handleResize = () => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
    if (window.innerWidth >= 1124) {
      this.setState({
        toogleDropdown: true
      });
    } else {
      this.setState({
        toogleDropdown: false
      });
    }
  };

  render() {
    const { toogleDropdown, windowWidth } = this.state;

    return (
      <div className="list__category__wrapped">
      <div className="list__collapse_first">        
      <CategorizeItemList/>
      </div>
        <div className="list__collapse">        
          <div className="wrapped__button__colappse">
            <button
              className="btn__list__colappse"
              onClick={e => this.handleOnClick(e)}
            >
              SEARCH FOR
            </button>
          </div>
          <CategoryCollapse toogleDropdown={toogleDropdown} />
        </div>
      </div>
    );
  }
}
