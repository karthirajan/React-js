import React, {Component} from 'react';
//import './Counter.css'

class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
        this.incrementMethod = this.incrementMethod.bind(this);
        this.decrementMethod = this.decrementMethod.bind(this);
    }

   render(){
       const reset ={
           backgroundColor: 'red',
           padding: 10,
           margin: 10
       }
       return (
           <div className='Counter'>
               <h1>Counter</h1>
               <CounterButton incrementMethod={this.incrementMethod} decrementMethod={this.decrementMethod}/>
               <CounterButton no={5} incrementMethod={this.incrementMethod} decrementMethod={this.decrementMethod}/>
               <CounterButton no={10} incrementMethod={this.incrementMethod} decrementMethod={this.decrementMethod}/>
               <span>{this.state.counter}</span>
               <br></br>
               <button style={reset} onClick={this.reset}>Reset</button>
           </div>
       )
   }

   incrementMethod(no){
       this.setState({
           counter: this.state.counter + no
       })
   }

   decrementMethod(no){
    this.setState({
        counter: this.state.counter - no
    })
}

   reset=()=>{
       this.setState({
           counter: 0
       })
   }
}

class CounterButton extends Component{

    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render(){
        const color = {
            backgroundColor: 'green',
            padding: 15,
            margin: 15
        }
        return(
            <div className='CounterButton'>
                <button className='button' style={color} onClick={this.increment}>+{this.props.no}</button>
                <button className='button' style={color} onClick={this.decrement}>-{this.props.no}</button>
            </div>
        )
    }


    increment(){
      this.setState({
          counter : this.state.counter + this.props.no
      })
      this.props.incrementMethod(this.props.no);
    }

    decrement(){
        this.setState({
            counter : this.state.counter - this.props.no
        })
        this.props.decrementMethod(this.props.no);
      }

}

CounterButton.defaultProps = {
    no: 1
}

export default Counter;