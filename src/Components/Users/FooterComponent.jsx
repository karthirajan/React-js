import React,{Component} from 'react';
import {Link} from 'react-router-dom'


class FooterComponent extends Component{
   render(){
       return(
           <div className='welcome'>
               <div className='container'>
                   <footer className='parent'>
                      <p className='footer'>Copyright &copy; 2022. All Rights Reserved.</p>
                   </footer>
               </div>
           </div>
       )
   }
}

export default FooterComponent;