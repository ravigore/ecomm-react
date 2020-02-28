import React, {Component} from 'react'
import product from '../product.jpg'
// import product from '../images/greps.png'

export default class ProductCard extends Component {
  render() {
    return (
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pl-1">
            <div className="card card-border mb-2">
              <div className="pt-5 pl-5 pr-5 ">
              <img className="card-img-top" src={product} width="" alt="Vans"/>
              </div>
              <div className="card-img-overlay d-flex justify-content-end">
                <a href="/#" className="card-link text-danger like">
                  <i className="fa fa-heart"></i>
                </a>
              </div>
              <div className="card-body">
                <h5 className="card-title">Fruit</h5>
                <h6 className="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
                <p className="card-text">
                  Fresh Apple Fresh Apple Fresh Apple Apple Fresh Apple Apple Fresh Apple... </p>
                <div className="options d-flex flex-fill">
                   <select className="custom-select-sm mr-1">
                      <option defaultValue >Qty</option>
                      <option value="1">10</option>
                      <option value="2">20</option>
                      <option value="3">30</option>
                  </select>
                <h5 className="price text-success ml-2">Rs. 125.99/-</h5>
                </div>
                <div className="d-flex align-items-center">
                  <button className="btn-sm mt-3"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                  <button className="btn-sm btn-danger mt-3 ml-2"><i className="fa fa-check"></i> Buy Now</button>
                </div>
              </div>
            </div>
           </div>
    )
  }
}
