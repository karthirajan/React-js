import React,{Component} from 'react';
import './style.css'

class FirstComponent extends Component{

   constructor(){
       super();
       this.state = {
           count : 0 
       }
        this.increment = this.increment.bind(this);
   }

   increment(){
      this.setState({
          count : this.state.count + this.props.inc
      })
   }

    render(){
      return(
        <div className='First'>
             <button className="button" style={{backgroundColor:"green"}} onClick={this.increment}>
                 Button
             </button>
             <span className='count'>{this.state.count}</span>
             
        </div>
      )
    }


  

}



export default FirstComponent;
  

  