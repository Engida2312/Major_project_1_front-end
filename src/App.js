import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Layers/Nav/Navbar';
import Button from './Componets/button';
import Input from './Componets/input';
import SearchBar from './Componets/search-bar';
import Components from './Pages/Components';
import AddComponents from './Pages/AddComponent';
import './Assets/Styles/componentsPage.css';

function App() {

 
 
  return (
      <Router>
         <>
          <Navbar />
          <Routes>
            <Route  path='/components' element={<Components/>} />
            <Route  path='/addComponent' element={<AddComponents/>} />
          </Routes>
        </>
      </Router>
   
  );
}

export default App;
