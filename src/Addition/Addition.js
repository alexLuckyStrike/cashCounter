import React from "react";


class Addition extends React.Component{
    constructor(props){
        super(props);
        this.state={
            account:0
        };
        this.timertick=this.timertick.bind(this);
}

timertick(){
        this.setState({
           account:this.state.account+2056
        });
}

componentDidMount() {

       setInterval(this.timertick,1000);
}

render(){
        return(
            <h2>{this.state.account}(руб.)</h2>
        );
}

}

export default Addition;