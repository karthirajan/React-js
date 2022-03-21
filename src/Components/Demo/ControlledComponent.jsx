import React,{Component} from 'react';
import './style.css'

class ControlledComponent extends Component{

   constructor(props){
     super(props);
     this.state = {
         username: 'java',
         password: '',
         hasLoginFailed: false,
         hasLoginSuccess: false
     }
    // this.handlePasswordChange = this.handlePasswordChange.bind(this);
    // this.handleUserChange = this.handleUserChange.bind(this);

     this.handleChange = this.handleChange.bind(this);
     this.handleLogin = this.handleLogin.bind(this);
     

   }
   
  

   handleChange(event){

       //console.log(event.target.value)

       this.setState({
           [event.target.name] : event.target.value
       })

   }

   submit = (event) => {
         event.preventDefault();
   }
  
   handleLogin(){
      // console.log(`username is ${this.state.username} and password is ${this.state.password}`)
      if(this.state.username === 'karthi' && this.state.password === 'rajan'){
               console.log('success');
               this.setState({ hasLoginFailed: false })
               this.setState({ hasLoginSuccess: true })
      }else{
        this.setState({ hasLoginFailed: true })
        this.setState({ hasLoginSuccess: false })
      }
   }
  

    render(){
      return(   
          
        <div className='Controlled'>
            <LoginHandling hasLoginSuccess={this.state.hasLoginSuccess} hasLoginFailed={this.state.hasLoginFailed}/>
            {/*<LoginSuccess hasLoginSuccess={this.state.hasLoginSuccess}/>
            <LoginFailed hasLoginFailed={this.state.hasLoginFailed}/>*/}
          <form onSubmit={this.submit}>
             <label>Username:</label>
             <input  type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
             <label>Password:</label>
             <input  type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
             <button className="button" style={{backgroundColor:"green"}} value="submit" onClick={this.handleLogin}>
                 Button
             </button>  
            </form>   
        </div>
        
      )
    }
}

function LoginSuccess(props){
    if(props.hasLoginSuccess){
    return <div>Login Success</div>
    }
    return null
}

function LoginFailed(props){
    if(props.hasLoginFailed){
    return <div>Invalid Credentials</div>
    }
    return null
}

function LoginHandling(props){
   if(props.hasLoginSuccess || props.hasLoginFailed) { 
   return (props.hasLoginSuccess)?<div>Login Success</div>:<div>Invalid Credentials</div>
   }
   return null
}



export default ControlledComponent;
  

  