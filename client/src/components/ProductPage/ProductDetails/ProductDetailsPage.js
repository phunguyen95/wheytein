import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ProductDetails from './ProductDetails';
import ProductDetailsImage from './ProductImage'
import ProductDetailsRightColumn from './ProductDetailsRightColumn'
export default class ProductDetailsPage extends Component {
    state={
        windowHeight: undefined,
        windowWidth: undefined 
    }
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
      }
      handleResize = () =>
        this.setState({
          windowHeight: window.innerHeight,
          windowWidth: window.innerWidth
        });
    renderDesktop=()=>{
        return(
            <div className="wrapped__body__section">
            <div className="breadcrumb__brand">
                <Link to="/brands/Optinum Nutrition"><span>Optinum Nutrition</span></Link>
            </div>
            <section className="wrapped_product__section">
                <div className="product__section">
                  <ProductDetailsImage/>   
                    <ProductDetails/>                       
                    <ProductDetailsRightColumn/>
                </div>
            </section>
        </div>
        )
    }
    renderMobile=()=>{
        return(
            <div className="wrapped__body__section">
            <div className="breadcrumb__brand">
                <Link to="/brands/Optinum Nutrition"><span>Optinum Nutrition</span></Link>
            </div>
            <section className="wrapped_product__section">
                <div className="product__section">
                  <ProductDetailsImage/>   
                    <ProductDetails component={<ProductDetailsRightColumn/>}/>                       
                </div>
            </section>
        </div>
        )
    }
    render() {
        const {windowWidth} = this.state;
        return (
            <div className="body-section">
                {windowWidth<640 ? this.renderMobile() : this.renderDesktop()}
            </div>
        )
    }
}
