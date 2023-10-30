import React from "react";
import logo from './img/Vite.png'
import './navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div>
             <img src={logo} alt="" />
             <h1>ReactFacts</h1>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Navbar