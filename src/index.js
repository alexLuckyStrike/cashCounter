import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter/Counter";
import Addition from "./Addition/Addition";
import Plus from "./Plus/Plus";


ReactDOM.render(
    <Counter/>,
    document.querySelector('.first')
);


ReactDOM.render(
    <Addition/>,
    document.querySelector('.second')
);


ReactDOM.render(
    <Plus/>,
    document.querySelector('.third')
);