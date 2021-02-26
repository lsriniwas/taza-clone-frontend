import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
    const {isAuth,isLoading}=useSelector(state=>state.authReducer)
    return !isLoading && isAuth?(
        <div>
            {children}
        </div>
    ):(
        <div>
           <Redirect to="/"/>
        </div>
    )
}
