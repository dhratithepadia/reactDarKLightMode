import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Login = () => {
    const navigate = useNavigate() 
const [email,setEmail] = useState('')
const [pass, setPass] = useState('');

const handleLogin = (e)=>{
    e.preventDefault();
    let logUser = localStorage.getItem("user")
    if(email === logUser){
        navigate('/Home')
    }else{
        alert("Please Enter correct userName:-(")
    }
}
  return (
    <div>
        <h1>Login</h1>
        <form  onSubmit={handleLogin}>
  <div className="imgcontainer">
    <img src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png" alt="Avatar" className="avatar"/>
  </div>

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" 
    value={email}
    onChange={(e)=>{
        setEmail(e.target.value)
    }} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" 
    value={pass}
    onChange={(e)=>{
        setPass(e.target.value)
    }}
    required/>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div className="container">
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>

</form>
</div>
  )
}

export default Login