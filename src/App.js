import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Layers/Nav/Navbar';
import Footer from './Layers/Footer/Footer';
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Components from './Page/Components';

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


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
         <Route  path='/signup' element={<Signup/>} />
         <Route  path='/login' element={<Login />} />
          <Route  path='/' element={<Home/>} />
          <Route  path='/components' element={<Components/>} />
      </Routes>
      <Footer/>
      
    </Router>
  );
}

export default App;
