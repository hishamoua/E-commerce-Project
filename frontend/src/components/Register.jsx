import { Header } from "./Header"
import { useState, useEffect } from "react"
import { Link , useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../slices/usersApiSlice";
import { setCredentials } from '../slices/authSlice.js';
import  { Loader }  from "./Loader";
import { toast } from 'react-toastify';




export const Register = () => {

 const [name,setName] = useState('')
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');
 const [confirmPassword,setConfirmPassword] = useState('');

 const dispatch = useDispatch();
 const navigate = useNavigate();

 const [register, { isLoading }] = useRegisterMutation();
 

 const { userInfo } = useSelector((state) => state.auth);

 const { search } = useLocation();
 const sp = new URLSearchParams(search);
 const redirect = sp.get('redirect') || '/';


 useEffect( () => {
   if (userInfo) {
    navigate(redirect);
  }
  },[ userInfo, redirect, navigate ])


 const submitHandler = async (e) => {
  e.preventDefault();
  if(password !== confirmPassword) {
   toast.error('password do not match');
   return;
  }
  else {
   try {
     const res = await register({ name,email,password }).unwrap();
     dispatch(setCredentials({ ...res }));
     navigate(redirect);
   } catch (error) {
     
     toast.error(error.data.message || error.error);
     
   }
  }
 }

  return (
    <>
    <Header />
    <form onSubmit={submitHandler}>
    <h1 className="form-title">Roots</h1>
    <p className="compte">CREATE YOUR ACCOUNT</p>
     <div>
        <input type="text" className="email" placeholder="NAME" value={name}
        onChange={(e) => setName(e.target.value)}/>
     </div>
     <div>
        <input type="email" className="email" placeholder="EMAIL" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
     </div>
     <div>
        <input type="password" className="email" placeholder="PASSWORD" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div>
        <input type="password" className="email" placeholder="CONFIRM PASSWORD" value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}/>
      </div>
      <button className="inscription connect" type="submit" disabled={isLoading}>
       REGISTER
       </button>
      { isLoading && <Loader /> }
      <Link to={ redirect ? `/login?redirect=${redirect}` : '/login' }>
       Alreadey have an account?
      </Link>
    </form>
    </>
  )
}

