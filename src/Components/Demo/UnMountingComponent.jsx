import React,{Component} from 'react';
import './style.css'

class UnMountingComponent extends Component{

   constructor(props){
       super(props);
       this.state = {
           show : true 
       }       
   }

   deleteHeader=()=>{
       this.setState({
           show: false
       })
   }

    render(){
      let header;
      if(this.state.show){
          header = <HeaderComponent/>;
      }
      return(
        <div className='First'>  
             {header}       
             <button className='button' onClick={this.deleteHeader}>Delete Header</button>           
        </div>
      )
    }

}

class HeaderComponent extends Component{

    componentWillUnmount(){
        alert('Do you want to delete header?');
    }

    render(){
    return <h2>Header</h2>
    }
}


export default UnMountingComponent;
  

  