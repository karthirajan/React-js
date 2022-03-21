import React,{Component} from 'react';
import './style.css'

class UnControlledComponent extends Component{

   constructor(props){
     super(props);
     this.username = React.createRef();
     this.pass = React.createRef();
     this.submit = this.submit.bind(this);
     this.foc = this.foc.bind(this);
   }
   
   submit(event){
    // alert('You have clicked on submit button')
     event.preventDefault();
     console.log(this.username.current.value)
   }

   foc(){
     
    this.pass.current.focus();

   }
  

    render(){
      return(
        <div className='UnControlled'>
          <form onSubmit={this.submit}>
             <label>Username:</label>
             <input ref={this.username} type="text" name="username"></input>
             <label>Password:</label>
             <input ref={this.pass} type="password" name="password"></input>
             <button className="button" style={{backgroundColor:"green"}} value="submit" onClick={this.foc}>
                 Button
             </button>  
            </form>   
        </div>
      )
    }


  

}



export default UnControlledComponent;
  

  