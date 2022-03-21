import React, {Component} from 'react';
import { Navigate } from 'react-router-dom';
import Authentication from './Authentication';

class AuthenticatedRoute extends Component{
    render(){
       if(Authentication.isUserLoggedIn()){
           return {...this.props.children}
       }else{
           return <Navigate to="/"></Navigate>
       }
    }
}

export default AuthenticatedRoute;

