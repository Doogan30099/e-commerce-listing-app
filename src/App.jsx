import React from 'react'
import './App.css'
import ProductList from './assets/components/ProductList.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductItem from './assets/components/ProductItem.jsx';


function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/ProductItem/:productId" element={<ProductItem />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
