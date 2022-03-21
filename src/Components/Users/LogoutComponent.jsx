import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Authentication from './Authentication';


class LogoutComponent extends Component{

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        Authentication.removeRegisteredUser();
        this.props.navigate('/');
    }

   render(){
       return(
           <div className='welcome'>
               <div className='container'>
                   <div className="row mt-5 justify-content-center">
                      <h2>You have been Logged Out...</h2>
                      <button className='col-lg-4 btn btn-warning btn-sm' onClick={this.logout}>Logout</button>
                   </div>
               </div>
           </div>
       )
   }
}

export default LogoutComponent;