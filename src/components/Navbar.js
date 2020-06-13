import React, { Component } from 'react'
import './navbar.css'
import {navbar} from './vanillajs'
import favicon from './img/favicon.jpg'

export class Navbar extends Component {

       componentDidMount(){
           navbar();
       }

    render() {
        return (
            <div>
                <div className="nav0">
                    <img className="favicon"  src={favicon} alt=""/>
                     <nav class="nav">
                      <a href="#" class="nav-item is-active" active-color="orange">Home</a>
                      <a href="#" class="nav-item" active-color="green">Subjects</a>
                      <a href="#" class="nav-item" active-color="blue">Participants</a>
                     
                      <span class="nav-indicator"></span>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar
