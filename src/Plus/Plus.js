import React from "react";


class Plus extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            start:0
        };
        this.add = this.add.bind(this)
    }
    add(){
        this.setState({
            start:this.state.start + 4278
        })
    }

    componentDidMount() {
        setInterval(this.add,1000)
    }
    render(){
        return(
            <h2>{this.state.start}(руб.)</h2>
        );
    }
}


export default Plus;