import React, { Suspense, lazy } from 'react'; //Importing suspense for lazy loading
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import NotFound from './components/NotFound.jsx';
import "./App.css"

//Lazy loading different pages to improve performance
const ProductList = lazy(() => import('./components/ProductList.jsx'));
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Suspense fallback={<div>Loading...</div>}> {/* Suspense is used to show fallback content while lazy components load */}
        <Routes> {/*Router wraps the whole application to enable routing*/}
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;