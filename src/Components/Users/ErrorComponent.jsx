import React,{Component} from 'react';
import {Link} from 'react-router-dom'


class ErrorComponent extends Component{
   render(){
       return(
           <div className='welcome'>
               <div className='container'>
                   <div className="row mt-5 justify-content-center">
                      <h2>404 page not found!!!</h2>
                   </div>
               </div>
           </div>
       )
   }
}

export default ErrorComponent;