import React from 'react'
import Home from './components/layer/page/Home';

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/layer/RootLayout';
import Product from './components/layer/page/Product';
import SignUp from './components/layer/page/SignUp';
import Login from './components/Login';
import ProductDetails from './components/ProductDetails';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
      >
        <Route index element={<Home/>} ></Route>
        <Route path='/products' element={<Product/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/product/details' element={<ProductDetails/>} ></Route>
      </Route>
    )
  );

  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
