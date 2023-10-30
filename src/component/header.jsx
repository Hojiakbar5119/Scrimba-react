import React from "react";
import './header.css'
import logo from './img/Vite.png'

class Hello extends React.Component{

    render(){
        return(
            <div>
                <header>
                <img src={logo} alt="" />
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                </header>
                <h1>My awesome website in React</h1>
                <h1>I love React</h1>
                <ol>
                    <li>It's composable</li>
                    <li>It's declarative</li>
                    <li>It's a heriable skills</li>
                    <li>It's a heriable skills</li>
                </ol>
                <small>@ abdulhakimov The allrigth reserved</small>
            </div>
        )
    }
}

export default Hello