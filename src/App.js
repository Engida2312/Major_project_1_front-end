import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Layers/Nav/Navbar';
import Footer from './Layers/Footer/Footer';
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Components from './Page/Components';
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
  return <>
    <Router>
      {/* <Navbar/> */}
      <Routes>
         <Route path='/' element={<ClientSharedLayout />}>
            <Route index element={<Home />} />
            <Route  path='signup' element={<Signup/>} />
            <Route  path='login' element={<Login />} />
            <Route  path='components' element={<Components/>} />
            <Route path='*' element={<Error/>} />
          </Route>
          <Route path='/dashboard' element={<AdminSharedLayout/>}>
              <Route index element={<Dashboard/>} />
              <Route  path='login' element={<Login  />} />
          </Route>          
      </Routes>
      {/* <Footer/> */}
    </Router>
    
  </>;
}

export default App;
