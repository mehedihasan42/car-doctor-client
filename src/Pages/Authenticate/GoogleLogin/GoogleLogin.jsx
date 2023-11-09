import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const GoogleLogin = () => {

    const {googleLogin} = useContext(AuthContext)

    const handleLogin = () =>{
        googleLogin()
        .then(res=>res.json())
        .then(result=>console.log(result))
    }

    return (
        <div>
            <div className="divider"></div> 
            <button
            onClick={handleLogin}
             className='btn'><FcGoogle/></button>
        </div>
    );
};

export default GoogleLogin;