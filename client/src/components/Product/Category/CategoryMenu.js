import React, { Component } from 'react';
class CategoryMenu extends Component {
  state = {
    activeTab: 1
  };
  componenDidMount() {
    this.setState({
      activeTab: 1
    });
  }
  changeTab = id => {
    this.setState({
      activeTab: id
    });
  };
  render() {
    const { activeTab } = this.state;
    const tabs = [
      {
        id: 1,
        name: 'Muscle Building',
        icon: 'muscle_icon.png'
      },
      {
        id: 2,
        name: 'Weight Management',
        icon: 'weight_lose_icon.png'
      },
      {
        id: 3,
        name: 'Energy & Endurance',
        icon: 'energy_icon.png'
      },
      {
        id: 4,
        name: 'BCAAs - Glutamine',
        icon: 'bcaa_icon.png'
      },
      {
        id: 5,
        name: 'Vitamin',
        icon: 'vitamin.png'
      },
      {
        id: 6,
        name: 'Special',
        icon: 'vitamin.png'
      }
    ];
    return (
      <div className="category__menu__wrapped">
        <div className="category__container">
          {tabs.map((tab, index) => {
            return (
              <div className="category__menu__item">
                <button
                  className={
                    activeTab === tab.id
                      ? 'btn-category-menu active'
                      : 'btn-category-menu'
                  }
                  onClick={() => this.changeTab(tab.id)}
                >
                  <div className="icon__category">
                    <img src={`/img/${tab.icon}`} />
                  </div>
                  <div className="category__info">{tab.name}</div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CategoryMenu;
