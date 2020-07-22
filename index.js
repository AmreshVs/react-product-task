import React, { useState } from 'react';
import { render } from 'react-dom';

import Product from './components/product';
import SearchBox from './components/searchBox';
import Filter from './components/filter';
import './style.css';

const App = () => {
  let { arrayOfProducts } = require('./json/index.json');

  let [productsData, setProductsData] = useState(arrayOfProducts);

  const handleSearch = (e) => {
    let searchValue = e.target.value;
    if(searchValue.length > 0){
      let searchData = [...productsData];
      let check = searchData.filter((item) => {
        let expression = new RegExp(searchValue, 'i');
        let regTest = (item.name).match(expression);
        return regTest !== null && regTest.length > 0 ? true : false;
      });
      setProductsData(check);
    }
    else{
      setProductsData(arrayOfProducts);
    }
  }

  const handleFilter = (min, max) => {
    console.log('filter', min, max);
    let searchData = [...productsData];
    let check = searchData.filter((item) => {
      return item.price >= min && item.price <= max;
    });
    setProductsData(check);
  }

  const handleClear = () => {
    setProductsData(arrayOfProducts);
  }
  
  return (
    <>
      <div className="header">
        <h1>Amazon</h1>
        <SearchBox handleSearch={handleSearch} />
      </div>
      <div>
        <Filter handleFilter={handleFilter} handleClear={handleClear} />
      </div>
      <div className="products">
        {productsData.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </div>
    </>
  );
}

render(<App />, document.getElementById('root'));
