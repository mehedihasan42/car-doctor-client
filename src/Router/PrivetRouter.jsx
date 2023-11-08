import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({children}) => {

    const {user,loader} = useContext(AuthContext)
    const location = useLocation()

    if(loader){
        return <span className="loading loading-ring loading-lg"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRouter;