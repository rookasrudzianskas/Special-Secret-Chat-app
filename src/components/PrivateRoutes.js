import React from 'react'
import { Redirect, Route } from "react-router-dom";
import {useProfile} from "../context/profile.context";


const PrivateRoutes = ({ children, ...routeProps }) => {

    const profile = useProfile()

    if(!profile) {
        return <Redirect to="/signin" />
    }
    return (
        <Route {...routeProps}>
            {children}
        </Route>
    );
};

export default PrivateRoutes;