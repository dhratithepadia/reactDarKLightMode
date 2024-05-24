import React from 'react'
import './style.css'
import useTheme from '../contexts/theme'

const Home = () => {

  const {themeMode,darkTheme,lightTheme} = useTheme();
  const onChange = ()=>{
    if(themeMode === 'dark'){
      lightTheme()
    }else{
      darkTheme()
    }
  }
  return (
    <>
    <div>
      <div class="topnav">
        <a class="active" href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <span class="form-check form-switch">
          <input class="form-check-input dark" 
          type="checkbox" 
          role="switch" 
          id="flexSwitchCheckDefault"
          onChange={onChange}
          checked={themeMode ==='dark'}
          />
        </span>
      <div class="login-container">
        <button>Login</button>
      </div>
      </div>
    </div>
    <h1>You  are at Home page</h1>
    </>
  )
}

export default Home