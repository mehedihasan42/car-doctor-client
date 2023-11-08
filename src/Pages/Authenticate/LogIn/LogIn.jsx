import React, { useContext } from 'react';
import img from '../../../assets/images/login/login.svg'
import { BsFacebook } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const LogIn = () => {

  const {login} = useContext(AuthContext)
  let navigate = useNavigate();
  const location = useLocation()
  const form = location.state?.from?.pathname || '/'

   const handleSubmit = event =>{
     event.preventDefault()
     const from = event.target;
     const email = from.email.value;
     const password = from.password.value;
     console.log(email,password)

     login(email,password)
     .then(result=>{
      console.log(result)

      const user = result.user;
      const loggedUser = {
        email:user.email
      }

      fetch('http://localhost:5000/jwt',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(loggedUser)
      })
      .then(res=>res.json())
      .then(result=>{
        console.log(result)
        localStorage.setItem('carDoctor-access-toekn',result.token)
      })

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(form, { replace: true })

    })
   }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left mr-8">
     <img src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm border-2 border-b-slate-800 bg-base-100">
      <form className="card-body" onSubmit={handleSubmit}>
        <h2 className='text-[#444444] font-bold text-3xl text-center'>Login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FF3811]">Login</button>
        </div>
      </form>
        <p className='text-[#444444] text-center'>Or Sign in with</p>
       <div className='flex justify-center text-2xl space-x-3 my-4'>
       <BsFacebook/>
        <BiLogoLinkedinSquare/>
        <FcGoogle/>
       </div>
       <p className='text-center text-[#737373]'>Have an account? <Link to='/signUp' className='text-[#FF3811]'>Sign In</Link></p>
    </div>
  </div>
</div>
    );
};

export default LogIn;