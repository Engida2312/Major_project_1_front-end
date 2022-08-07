import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Layers/Nav/Navbar';
import Button from './Componets/button';
import Input from './Componets/input';
import SearchBar from './Componets/search-bar';
import Components from './Page/Components';
import './Assets/Styles/componentsPage.css'

function App() {
  return (
    <Router>
       <>
      <Navbar />
    <Routes>
      <Route  path='/components' element={<Components/>} />
    </Routes>
    </>
    </Router>
   
  );
}

export default App;
