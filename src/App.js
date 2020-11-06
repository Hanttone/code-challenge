import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Product from './Component/Product'


function App() {

const [products, setProducts] = useState([]);

useEffect(() => {
  fetchData()
}, []);

  return (
    <AppWrapper>
      <GlobalStyles></GlobalStyles>
      <h1>RECOMMENDED PRODUCTS
      </h1>
      <ProductsWrapper>
        {products.map(product => 
        <Product image={product["product-photo"]} 
        label={product.label} 
        shortDescription={product["short-description"]} 
        sale={product.sale}></Product>)}
      </ProductsWrapper>

    </AppWrapper>
  );

  
  function fetchData() {
    fetch('https://run.mocky.io/v3/60c5b7f8-fe73-4e9b-8626-e2c806b173c2').then(
        result => result.json()).then(
            data => setProducts(data.products))
  }
}

export default App;


const AppWrapper = styled.div`
width: 80%;
height: 100vh;
margin-left: 10%;
margin-right: 10%;

h1 {
  text-align: center;
  font-size: 3rem;
  padding: 2%;
  font-family: sans-serif;

  @media (max-width: 960px) {
    font-size: 2.3rem;
    margin-bottom: 5vh;
  }
}
`;

const ProductsWrapper = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: space-around;
gap: 1.5rem;
`;

