import React, { Component } from 'react';
import CategoryHeading from './CategoryHeading';
import CategoryMenu from './CategoryMenu';
import CategoryProducts from './CategoryProducts'
export default class CategoryPage extends Component {
    render() {
        return (
            <div className="category__wrapped">
                <CategoryHeading/>
                <CategoryMenu/>
                <CategoryProducts/>
            </div>
        )
    }
}
