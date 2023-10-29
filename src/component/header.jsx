import React from "react";
import './header.css'
import logo from './img/Vite.png'

class Hello extends React.Component{

    render(){
        return(
            <div>
                <img src={logo} alt="" />
                <h1>My awesome website in React</h1>
                <h1>I love React</h1>
                <ol>
                    <li>It's composable</li>
                    <li>It's declarative</li>
                    <li>It's a heriable skills</li>
                    <li>It's a heriable skills</li>
                </ol>
            </div>
        )
    }
}

export default Hello