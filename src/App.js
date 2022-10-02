import React from "react";
import {Navigate, Route, Routes} from "react-router-dom"

import MasterLayout from "./layouts/admin/MasterLayout";
import Home from "./components/frontend/Home";
import Login from "./components/frontend/auth/Login";
import AdminPrivateRoute from "./AdminPrivateRoute";
import axios from "axios";
import Page403 from "./errors/Page403";
import Page404 from "./errors/Page404";
import Register from "./components/frontend/auth/Register";



axios.defaults.baseURL ="http://localhost/my-shop/public";
axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>  
      <Route path="/403" element={<Page403 />}/>   
      <Route path="/404" element={<Page404 />}/>   
      {/* <Route path="/login" element={ <Login />}/>
      <Route path="/Register" element={ <Register />}/>  */}

      <Route path="/login" element={localStorage.getItem('auth_token') ? <Navigate to='/' /> : <Login />}></Route>
      <Route path="/register" element={localStorage.getItem('auth_token') ? <Navigate to='/' /> : <Register />}></Route>

      <Route path="/admin/*" element={<AdminPrivateRoute />}/>

     
      
    </Routes>
  );
}

export default App;
