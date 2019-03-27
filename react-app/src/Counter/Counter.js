import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        counter : 0
    };
    handleIncrement = ()=> {
        this.setState({counter: this.state.counter+1});
    }
    handleDecrement = () => {
        this.setState({counter: this.state.counter-1});
    }
    render(){   
        return(
            <div>
                <button onClick= {this.handleIncrement} >Increment</button>
                <button onClick= {this.handleDecrement} >Decrement</button>
                {this.state.counter}
            </div>
        )
        
    }
}

export default Counter;

