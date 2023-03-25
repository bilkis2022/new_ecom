import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/Authcontext'

const Private = ({ children }) => {

    const { state} = useAuthContext();
    if(state.authenticated) return <Navigate to='/' />;
  return children
}

export default Private