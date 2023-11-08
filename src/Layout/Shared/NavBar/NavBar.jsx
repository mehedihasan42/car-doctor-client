import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const NavBar = () => {

  const {user,logOut} = useContext(AuthContext)

  const handleLogOut = () =>{
    logOut()
    .then(()=>{
      localStorage.removeItem('carDoctor-access-toekn')
    })
    .then(result=>console.log(result))
  }

    const navItem=<>
    <Link className='btn btn-ghost' to='/'>Home</Link>
    <Link className='btn btn-ghost' to='/bookings'>My Bookings</Link>
    </>
    return (
        <div className="navbar bg-base-100 mb-8">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {navItem}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img to='/' src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user? <button className='btn' onClick={handleLogOut}>Logout</button>: <Link to='/login' className="btn">Login</Link>
          } 
        </div>
      </div>
    );
};

export default NavBar;