import React, { useState, useEffect } from 'react';
import {ToastContainer, toast, Zoom, Bounce} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GetCategory } from './Redux/reducers/categoryReducer';
// import Footer from './Layers/Footer/Footer';
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
// import AddComponents from './Pages/AddComponent';
import AddCategory from './Pages/AddCategory';
import UpdateCategory from './Pages/UpdateCategory';
import { Profile } from './Pages/Profile';
import Components from './Pages/Components';
// import AddComponents from './Pages/AddComponent';
import Dashboard from './Pages/dashboard';
import Error from './Pages/Error';
import ClientSharedLayout from './Layers/SharedLayouts/ClientSharedLayout';
import AdminSharedLayout from './Layers/SharedLayouts/AdminSharedLayout'
import Editprofile from './Pages/Editprofile'

import './index.css'
import './Assets/Styles/footer.css'
import './Assets/Styles/componentsPage.css'
import './Assets/Styles/nav.css'
import './Assets/Styles/links.css'
import './Assets/Styles/button.css'
import './Assets/Styles/icons.css'
import './Assets/Styles/list.css'
import './Assets/Styles/header.css'
import './Assets/Styles/card.css'
import './Assets/Styles/main-home.css'
import './Assets/Styles/signup.css'
import './Assets/Styles/admin.css'
import './Assets/Styles/profile.css'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCategory())
  });
  
  return <>
    <Router>
      <Routes>
        <Route path='/' element={<ClientSharedLayout />}>
          <Route index element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route  path='profile' element={<Profile />} />
          <Route  path='editprofile' element={<Editprofile />} />
          <Route path='components' element={<Components />} />
          <Route path='addCategory' element={<AddCategory />} />
          <Route path='components/updateCategory/:id' element={<UpdateCategory />} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='/dashboard' element={<AdminSharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </Router>
    <ToastContainer
          draggable={false}
          transition={Zoom}
          autoClose={8000}
        />
  </>;
}

export default App;
