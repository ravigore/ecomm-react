import React, {Component} from 'react'
import ProductCard from './ProductCard';
import FilterProduct from './FilterProduct';

export default class ProductDetails extends Component {
  render() {
    let rows = []
    for (let i = 0; i < 18; i++) {
      rows.push(<ProductCard key={i}/>)
    }
    return (
      <div className="col-12 row">
        <div className="col-2 filter-margin">
          <FilterProduct/>
        </div>
        <div className="col-10 product-margin row">
            {rows}
        </div>
      </div>
    )
  }
}
