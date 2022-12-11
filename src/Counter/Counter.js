import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sum:0
        };
        this.counter = this.counter.bind(this);
    }
    counter(){
        this.setState({
            sum: this.state.sum + 1157
        });
    }

    componentDidMount() {
        setInterval(this.counter,1000);
    }

    render(){
        return(
            <h2>{this.state.sum}(руб.)</h2>
        );
    }
}

export default Counter;