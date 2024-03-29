import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import Homepage from './pages/Homepage'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Register from './auth/Register'
import EmailVerify from './auth/EmailVerify'
import Login from './auth/Login'
import Profile from './pages/Profile'
import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'
import Dashboard from './admin/Dashboard'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import Product from './admin/Product'
import UpdateProduct from './admin/UpdateProduct'
import Shipping from './pages/Shipping'
import ConfirmOrder from './pages/ConfirmOrder'
import PaymentElement from './pages/PaymentElement'

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
                    <Route path='register' element={<Register/>} />
                    <Route path='email/confirmation/:token' element={<EmailVerify/>} />
                    <Route path='signin' element={<Login/>} />
                </Route>
                <Route path='/' element={<PrivateRoute/>} >
                  <Route path='profile' element={<Profile/>} />
                  <Route path='shipping' element={<Shipping/>} />
                  <Route path='confirm' element={<ConfirmOrder/>} />
                  <Route path='payment' element={<PaymentElement/>} />


                </Route>
                {/* admin route */}
                <Route path='admin/' element={<AdminRoute/>}>
                  <Route path='dashboard' element={<Dashboard/>}/>
                  <Route path='addcategory' element={<AddCategory/>}/>
                  <Route path='addproduct' element={<AddProduct/>}/>
                  <Route path='product' element={<Product/>}/>
                  <Route path='updateproduct/:productId' element={<UpdateProduct/>}/>
                  

                </Route>
                <Route path='/*' element={<NotFound/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default MyRoute