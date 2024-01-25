import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import Homepage from './pages/Homepage'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

const MyRoute = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Layouts/>}>
                    <Route index element={<Homepage/>} />
                    <Route path='productdetails/:productId' element={<ProductDetails/>} />
                    <Route path='cart' element={<Cart/>} />
                    <Route path='products' element={<Products/>} />



                </Route>
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default MyRoute