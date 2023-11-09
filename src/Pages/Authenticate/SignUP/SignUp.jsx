import React, { useContext } from 'react';
import img from '../../../assets/images/login/login.svg'
import { BsFacebook } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

  const {createUser} = useContext(AuthContext)
  let navigate = useNavigate();
  const location = useLocation()
  const form = location.state?.from?.pathname || '/'

    const handleSubmit = event =>{
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(reselt=>{
          console.log(reselt)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
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
        <h2 className='text-[#444444] font-bold text-3xl text-center'>Sign Up</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
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
       <p className='text-center text-[#737373]'>Have an account? <Link to='/login' className='text-[#FF3811]'>Sign In</Link></p>
    </div>
  </div>
</div>
    );
};

export default SignUp;