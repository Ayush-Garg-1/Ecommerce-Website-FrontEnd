import React from 'react';
import './style/style.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Home';
import ProductsPage from './ProductsPage';
import About from './About';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import Footer from "./Component/Footer";
import SingleProduct from "./SingleProduct";
import Cart from './Cart';
import LoginPage from './LoginPage';
import BottomMenu from './BottomMenu';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <BottomMenu/>
    <Routes>
    <Route path='/' element = { <Home/> } />
    <Route path='/about' element = { <About/> } />
    <Route path='/products' element = { <ProductsPage/> } />
    <Route path='/contact' element={ <Contact/> } />
    <Route path='/singleproduct/:id' element = { <SingleProduct/> } />
    <Route path='/cart' element = { <Cart/> } />
    <Route path='/login' element={<LoginPage/>} />
    <Route path='*' element = { <ErrorPage/> } />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
