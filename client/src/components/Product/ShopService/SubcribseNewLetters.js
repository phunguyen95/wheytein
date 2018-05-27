import React, { Component } from 'react';

class SubcribseNewLetters extends Component {
  state = {
    email: ''
  };
  handleEmail = e => {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  };
  render() {
    return (
      <div className="wrapped__subcribse">
        <div className="subscription__container">
          <div className="heading_subcription">
            <p>
              Subcribse for{' '}
              <span className="special_offer_text">Special Offer</span>
            </p>
          </div>
          <div className="body_subcription">
            <input
              className="input__email"
              placeholder="Enter your email address"
              value={this.state.email}
              onChange={e => this.handleEmail(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SubcribseNewLetters;
