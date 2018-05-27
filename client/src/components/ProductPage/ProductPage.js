import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

import Layout from '../Layout/Layout';
import ProductsPage from './Products/ProductsPage';
import ListCategoryProduct from './ListCategoryProduct';
class ProductPage extends Component {
    
            
    render() {  
         const {breadcrumbs,history} = this.props;
        return (
            <div className="wrapped__product__page">
                <div className="page__divider">
                    <ListCategoryProduct/>
                    <ProductsPage/>                    
                </div>
            </div>
        )
    }
}
export default (ProductPage);
