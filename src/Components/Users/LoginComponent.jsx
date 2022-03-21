import React,{Component} from 'react';
import '../../Bootstrap.css'
import Authentication from './Authentication';

class LoginComponent extends Component{

   constructor(props){
       super(props);
       this.state = {
           username: 'karthi',
           password: '',
           hasLoginPassed: false,
           hasLoginFailed: false
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleLogin = this.handleLogin.bind(this);
   } 

   handleChange(event){

      this.setState({
          [event.target.name]: event.target.value
      })
   }

   handleLogin(){
    //    if(this.state.username === 'karthi' && this.state.password === 'rajan'){
    //        Authentication.storeRegisteredUser(this.state.username);
    //        this.props.navigate(`/welcome/${this.state.username}`)
    //        console.log('valid credentials');
    //        this.setState({hasLoginFailed: false})
    //        this.setState({hasLoginPassed: true})
    //    }else{
    //        console.log('invalid credentials');
    //        this.setState({hasLoginFailed: true})
    //        this.setState({hasLoginPassed: false})
    //    }

    // Authentication.executeBasicAuthService(this.state.username, this.state.password)
    // .then(() => {
    //     Authentication.storeRegisteredUser(this.state.username, this.state.password);
    //         this.props.navigate(`/welcome/${this.state.username}`)
    //         console.log('valid credentials');
    //         this.setState({hasLoginFailed: false})
    //         this.setState({hasLoginPassed: true})
    // }).catch(() => {
    //     console.log('invalid credentials');
    //         this.setState({hasLoginFailed: true})
    //         this.setState({hasLoginPassed: false})
    // })


    Authentication.executeJWTAuthService(this.state.username, this.state.password)
    .then((response) => {
         console.log(response.data.token)
          Authentication.storeJWTRegisteredUser(this.state.username, response.data.token);
             this.props.navigate(`/welcome/${this.state.username}`)
             console.log('valid credentials');
             this.setState({hasLoginFailed: false})
             this.setState({hasLoginPassed: true})
        }).catch(() => {
            console.log('invalid credentials');
                this.setState({hasLoginFailed: true})
                this.setState({hasLoginPassed: false})
        })


   }

   render(){
       return(
           <div className='container'>
               <div className="row mt-5 justify-content-center">
                   <div className="col-lg-4">
                       {/*<LoginFailed hasLoginFailed={this.state.hasLoginFailed}/>
                       <LoginPassed hasLoginPassed={this.state.hasLoginPassed}/>*/}
                      {this.state.hasLoginPassed && <div className='alert alert-success'>Login Successful</div>}
                      {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
                       <div className="card">
                           <div className="card-body">
                               <h3>Login Users App</h3>
                               <p><small className='text-muted'>Registered users login with credentials</small></p>
                               <div className='row mt-3'>
                                   <input type="text" 
                                   name='username' 
                                   value={this.state.username} 
                                   onChange={this.handleChange}
                                   className='form form-control form-control-sm' 
                                   placeholder='Enter username'>
                                   </input>
                                </div> 
                                <div className='row mt-3'>
                                   <input type="password"
                                    name='password'
                                    value={this.state.password} 
                                    onChange={this.handleChange}
                                    className='form form-control form-control-sm' 
                                    placeholder='Enter password'></input>
                                </div>
                                <div className='row mt-3'>
                                   <button type="submit" onClick={this.handleLogin} className='btn btn-sm btn-success'>Login</button>
                                </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       )
   }
}

// function LoginFailed(props){
//   if(props.hasLoginFailed){
//    return <div className='alert alert-warning'>Invalid Credentials</div>
//   }

//   return null;

// }

// function LoginPassed(props){
//     if(props.hasLoginPassed){
//     return <div className='alert alert-success'>Login Successful</div>
//     }
//     return null;
// }

export default LoginComponent;