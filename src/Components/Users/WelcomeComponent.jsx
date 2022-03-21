import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import HelloService from '../API/HelloService';
import Authentication from './Authentication';


class WelcomeComponent extends Component{

   constructor(props){
       super(props);
       this.state = {
           message: ''
       }
       this.getMessage = this.getMessage.bind(this);
   }

   getMessage(){

      let username =  Authentication.getLoggedUser();
      HelloService.retriveMessage()
      .then((response) => {
          this.setState({message: response.data.message})
      })
      .catch((error) => {
          this.setState({message: error.response.data.message})
      })

   }

   render(){
       return(
           <div className='welcome'>
               <div className='container'>
                   <div className="row mt-5 justify-content-center">
                       Welcome {this.props.params.name}.
                       <div> You can view the users list by click <Link to='/users'>here</Link></div>
                       <button className='mt-3 btn btn-success btn-sm col-lg-3'
                        onClick={this.getMessage}
                       >Get Message
                       </button>
                       <div className='mt-3'>{this.state.message}</div>
                   </div>
               </div>
           </div>
       )
   }
}

export default WelcomeComponent;