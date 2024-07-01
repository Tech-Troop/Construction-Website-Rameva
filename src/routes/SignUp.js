import React, {useState} from 'react'
import  "./Bookings.css"
import bg from "../images/bg1.jpg"
import avatar from "../images/avat.jpg"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth} from '../config/firebase'
import 'react-toastify/dist/ReactToastify.css'
import {toast } from  'react-toastify'







  

function Bookings() {
  const [email, setEmail] = useState ("")
  const [password, setPassword] = useState ("")
  const[Username, setUsername] = useState("")
  



const handleSignup = async(e)=>{
  e.preventDefault();

  try{
   await createUserWithEmailAndPassword(auth,email,password)
    const user = auth.currentUser;
    console.log(user)

  

    console.log("User is registered succesfully")
    toast.success('User registered Succesfully')

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
			<form onSubmit={handleSignup} action="index.html">
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
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
                 
           		   <div class="div">
           		   	
           		   		<input type="text" class="input" placeholder='Username'  onChange={(e)=>setUsername(e.target.value)}/>
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
					<a href='/Bookings'>Login</a>
				   </div>
            	<input type="submit" class="btn" value="SignUp"/>
            </form>
        </div>
    </div>
  
  )
}

export default Bookings