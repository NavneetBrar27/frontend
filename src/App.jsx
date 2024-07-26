import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, {useState} from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
// create toggle mode
import { createContext } from 'react';
export const ThemeContext = createContext(null)

// App components
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import Products from './Components/Products';
import ProductForm from "./Components/ProductForm";
import NotFound from './Components/Notfound';

function App() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () =>{
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className='App' id={theme}>
      <Header />
      
      <Routes>
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/' element={<Navigate to='/Products' />} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
