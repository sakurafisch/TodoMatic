import React from "react";
import ReactDOM from "react-dom";
import {speak} from "./freedom";
import {App} from './App'

console.log("Hello, world!")
speak("This is an Todo App Demo")



ReactDOM.render(<App />, document.getElementById('root'))
