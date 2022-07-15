import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {signIn} from '../../Controllers/Redux/authSlice';
import './login.css'


function Login() {
    const dispatch = useDispatch();

    const [formInput, setFormInput] = useState({
        name:"",
        password:""
    })

    function inputChange(e){
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
        })
    }

    function submit(e){
        dispatch(signIn(formInput));
        e.preventDefault();
    }
  return (
       <div className='bg-login'>
        <form className='login-panel'>
            <h2>Login:</h2>
            <div className='login-space'>
                <input name='name' placeholder='Name' onChange={inputChange} value={formInput.name} />
            </div>            
            <div className='login-space'>
                <input name='password' type='password' placeholder='Password' onChange={inputChange} value={formInput.password} />
            </div>
            <button type='submit' className='btn btn-primary' onClick={submit}>Login</button>
        </form>
    </div>
    
  )
}

export default Login