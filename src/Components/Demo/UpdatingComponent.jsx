import React,{Component} from 'react';
import './style.css'

class UpdatingComponent extends Component{

   constructor(props){
       super(props);
       this.state = {
           color: 'red' 
       }     
       this.changeColor = this.changeColor.bind(this);  
   }

//    static getDerivedStateFromProps(props,state){
//          return {
//              color: props.fav
//          }
//     }

    // shouldComponentUpdate(){
    //     return true;
    // }

     changeColor(){
         this.setState({
             color: 'Blue'
         })
     }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({color: 'white'})
        },5000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
         document.getElementById('div1').innerHTML = 
         "Before update the color was :" + prevState.color;
    }

    componentDidUpdate(){
        document.getElementById('div2').innerHTML =
        "After update the color was :" + this.state.color;
    }

    render(){
      return(
        <div className='First'>
             My Favouriate Color is {this.state.color}  
             <br></br>
             <button className='button' onClick={this.changeColor}>Change Color</button>
             <div id='div1'></div> 
             <div id='div2'></div>      
        </div>
      )
    }

    
}



export default UpdatingComponent;
  

  