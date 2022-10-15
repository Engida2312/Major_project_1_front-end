import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GetCategory } from './Redux/reducers/categoryReducer';
import { GetComponent } from './Redux/reducers/componentReducer';
import Footer from './Layers/Footer/Footer';
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Components from './Pages/Components';
import AddCategory from './Pages/AddCategory';
import UpdateCategory from './Pages/UpdateCategory';
import Landing from './Pages/landingPage';
import Dashboard from './Pages/dashboard';
import Error from './Pages/Error';
import ClientSharedLayout from './Layers/SharedLayouts/ClientSharedLayout';
import AdminSharedLayout from './Layers/SharedLayouts/AdminSharedLayout'

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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCategory())
    dispatch(GetComponent())

  },[]);
  return <>
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<ClientSharedLayout />}>
          <Route index element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='components' element={<Components />} />
          <Route path='addCategory' element={<AddCategory />} />
          <Route path='components/updateCategory/:id' element={<UpdateCategory />} />
          <Route path='components/AddComponent' element={<Landing />} />
          <Route path='*' element={<Error />} />
        </Route>
        <Route path='/dashboard' element={<AdminSharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
      {/* <Footer/> */}
    </Router>

  </>;
}

export default App;
