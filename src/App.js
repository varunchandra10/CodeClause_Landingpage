import { BrowserRouter as Router} from 'react-router-dom';
import React, { useState } from 'react'
import './App.css';

import NavBar from './Components/Nav_Bar/NavBar'
import Body from './Components/Body/Body';
import About from './Components/About/about';

import Products from './Components/Productspage/Products';
import product from './Components/Productspage/product'
import More from './Components/More/More.jsx';
import ContactUs from './Components/Contact/contact';

function App() {
  const [productData] = useState(product);
  return (
    <>
    <NavBar />
    <div className="App">
      <Router>
        <Body />
        <About />
        <Products productData={productData} />
        <More/>
        <ContactUs />
      </Router>
    </div>
    </>
  );
}

export default App;
