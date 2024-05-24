import './App.css';
import {Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Regis from './Components/Regis';
import { ThemeProvider } from './contexts/theme';
import { useEffect, useState } from 'react';


function App() {
  const [themeMode,setThemeMode] = useState('light')

  const darkTheme = ()=>{
    setThemeMode('dark')
  }
  const lightTheme = ()=>{
    setThemeMode('light')
  }

useEffect(()=>{
  document.body.className = themeMode;
},[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className="App">
      <Routes>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<Regis/>}/>
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
