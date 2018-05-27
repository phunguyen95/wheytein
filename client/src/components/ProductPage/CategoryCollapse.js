import React, { Component } from 'react';
import classnames from 'classnames';
import SelectListGroup from './SelectListCategory';
export default class CategoryCollapse extends Component {
  state = {
    others: false
  };
  onChange = e => {
    console.log('vo day');
    this.setState({
      [e.target.name]: e.target.checked
    });
  };
  render() {
    const { toogleDropdown } = this.props;

    return (
      <div
        className={classnames('wrapped_list__collapse', {
          none: !toogleDropdown
        })}
      >
        <div className="heading__section">
          <h5>BRAND</h5>
        </div>

        <SelectListGroup
          name="others"
          checked={this.state.others}
          onChange={this.onChange}
          input="Others"
        />
        <SelectListGroup
          name="others"
          checked={this.state.others}
          onChange={this.onChange}
          input="Others"
        />
        <SelectListGroup
          name="others"
          checked={this.state.others}
          onChange={this.onChange}
          input="Others"
        />
        <SelectListGroup
          name="others"
          checked={this.state.others}
          onChange={this.onChange}
          input="Others"
        />
        <SelectListGroup
          name="others"
          checked={this.state.others}
          onChange={this.onChange}
          input="Others"
        />
        <SelectListGroup
          name="others"
          checked={this.state.others}
          onChange={this.onChange}
          input="Others"
        />
        <SelectListGroup
          name="others"
          checked={this.state.others}
          onChange={this.onChange}
          input="Others"
        />
        <SelectListGroup
          name="others"
          checked={this.state.others}
          onChange={this.onChange}
          input="Others"
        />
      </div>
    );
  }
}
