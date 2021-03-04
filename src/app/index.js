import React from "react";
import ReactDOM from "react-dom";
import {hello, Somecomponent} from 'lib';

hello();
ReactDOM.render(<h3>React App <Somecomponent/></h3>, document.getElementById("root"));
