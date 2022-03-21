import React,{Component} from 'react';
import './style.css'

class MountingComponent extends Component{

   constructor(props){
       super(props);
       this.state = {
           color: 'red' 
       }       
   }

//   static getDerivedStateFromProps(props,state){
//         return {
//             color: props.fav
//         }
//    }

    render(){
      return(
        <div className='First'>
             My Favouriate Color is {this.state.color}            
        </div>
      )
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({color: 'Yellow'})
        },5000)
    }
}



export default MountingComponent;
  

  