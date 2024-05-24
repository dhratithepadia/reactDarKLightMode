import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Regis = () => {
    const navigate = useNavigate() 
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem("user", email)
        alert("You are Registered, Hurahh!!")
        navigate("/Login")
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input 
    type="text" 
    placeholder="Enter Email" 
    name="email"
    value={email}
    onChange={(e)=>{
        setEmail(e.target.value)
    }}
    required/>

    <label for="psw"><b>Password</b></label>
    <input 
    type="password" 
    placeholder="Enter Password" 
    name="pass"  
    id='pass'
    value={pass}
    onChange={(e)=>{
        setPass(e.target.value)
    }}
    required />

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <hr/>

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" className="registerbtn">Register</button>
  </div>

  <div className="container signin">
    <p>Already have an account? <a href="/Login">Login in</a>.</p>
  </div>
</form>
    </div>
  )
}

export default Regis