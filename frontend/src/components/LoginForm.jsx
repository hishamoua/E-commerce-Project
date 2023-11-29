import { useState, useEffect } from "react";
import { Link , useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import  styled from "styled-components";
import  { Loader }  from "./Loader";
import { Header } from "./Header.jsx";
import  { useLoginMutation } from '../slices/usersApiSlice.js';
import { setCredentials } from '../slices/authSlice.js';
import { toast } from 'react-toastify';

const StyledLink  = styled(Link)`
color:#713f12;
`;

export const LoginForm = () => {

  const [email,setEmail] = useState('');

  const [password,setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

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

    try {
      const res = await login({ email,password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (error) {
      console.log(error);
      toast.error(error.data.message || error.error);
      
    }
}
   
  return (
    <>
    <Header />
    <form onSubmit={submitHandler}>
      <h1 className="form-title">Roots</h1>
      <p className="compte">ACCESS YOUR ACCOUNT</p>
      <div>
        <input type="email" className="email" placeholder="EMAIL" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        <input type="password" className="pwd" placeholder="PASSWORD" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="pwd">
          <StyledLink>
            Forget Password
          </StyledLink>
        </div>
      </div>
      <button type="submit" className="connect btn connectBtn" disabled={isLoading}>LOGIN</button>
      { isLoading && <Loader /> }
      <div>
        <p className="creation">NEED TO CREATE AN ACCOUNT ?</p>
        <StyledLink to={ redirect ? `/register?redirect=${redirect}` : '/register' } >
          <button className="inscription connect">REGISTER</button>
        </StyledLink>
      </div>
    </form>

    </>
  );
};