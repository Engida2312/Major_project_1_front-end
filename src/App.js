import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Components from './Page/Components';
import './Assets/Styles/componentsPage.css'
import './index.css'
import './Assets/Styles/nav.css'
import './Assets/Styles/links.css'
import './Assets/Styles/button.css'
import './Assets/Styles/icons.css'
import './Assets/Styles/list.css'
import './Assets/Styles/header.css'
import './Assets/Styles/signup.css'


function App() {
  return (
    <Router>
      <Routes>
         <Route  path='/signup' element={<Signup/>} />
          <Route  path='/' element={<Home/>} />
          <Route  path='/components' element={<Components/>} />
      </Routes>
    </Router>
  );
}

export default App;
