import React from 'react'
import  "./Bookings.css"
import bg from "../images/bg1.jpg"
import avatar from "../images/avat.jpg"
import  { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import {toast } from  'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




	
  



function Bookings() {

	const [email, setEmail] = useState ("")
	const [password, setPassword] = useState ("")
  
	const handleLogin = async (e)=>{
	  e.preventDefault();
	  try{
		await signInWithEmailAndPassword(auth,email,password)
		console.log("Login Succesful")
		toast.success("Login Succesful")
		window.location.href="/Appointment"
  
	  }catch(error){
		console.log(error.message)
		toast.error('Invalid Credentials')
		
	  }
  
	}

  return (
    <div class="container">
		<div class="img">
			<img src={bg}/>
		</div>
		<div class="login-content">
			<form onSubmit={handleLogin} className="login-form" action="index.html">
				<img src={avatar}/>
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   	
           		   		<input type="text" class="input" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<input type="password" class="input" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
            	   </div>
				 
            	</div >
				<div class='signUp'>
					<a href='/SignUp'>SignUP here</a>
				   </div>
            	<input type="submit" class="btn" value="Login"/>
            </form>
        </div>
    </div>
  
  )
}

export default Bookings