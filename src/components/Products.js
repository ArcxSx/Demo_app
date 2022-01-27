import React from 'react';
import "./Products.css";

function Products() {
  return (
      <div className="products">
          <div className="row">
              <h1>Products</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="row">
              <div className="products__container">
                  <div className="products_box">
                      <div className="product">
                        <div className="product__card">
                            <div className="icon">
                                <img src='https://runo.in/images/field-crm-i.svg' alt=''/>
                            </div>
                            <h4>Lorem ipsum</h4>
                        </div>
                      </div>
                      <div className="product">
                        <div className="product__card">
                            <div className="icon">
                                <img src='https://runo.in/images/field-crm-i.svg' alt=''/>
                            </div>
                            <h4>Lorem ipsum</h4>
                        </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className="superlead__row">
              <div className="superlead__img">
                  <img src='https://runo.in/images/superlead-i.svg' alt=''/>
              </div>
              <div className="superlead__heading">
                <h1>Are you ready to ‘superlead’ your business?</h1>
                <p>Fill up the form below and one of our experts shall connect with you shortly.</p>
              </div>
          </div>
      </div>
  );
}

export default Products;
