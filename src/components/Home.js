import React, { Component } from 'react'
import './home.css'
import bg0 from './img/bg.gif'
import book from './img/book.png'
import {scrollFunction} from './vanillajs'
import bg1 from './img/bulb.png'

export class Home extends Component {

    componentDidMount() {
        scrollFunction();
        
            const script = document.createElement("script");
            script.src = "https://kit.fontawesome.com/a076d05399.js";
            script.async = true;
            document.body.appendChild(script);

           
         
      }



    render() {
        return (
            <div>
                <div className="bg">
                      <div class="container0">
                        <div class="cntr0" style={{fontFamily:'Lucida Bright'}}>
                        <div class="overlay0"><h1 class="text0" style={{color:'white'}}><big>I am a dedicated</big></h1></div>

                          @<big style={{color: 'red', fontFamily: 'Herculanum'}}>T</big>eaching <big style={{color:' rgb(255, 67, 20)', fontFamily: 'Herculanum'}}>A</big>ssistant!
                          <br></br>
                        <small class="cntr1" style={{fontFamily:'Comic Sans M;, cursive, sans-serif, Curlz MT'}}> <small><small> <big style={{color:'red'}}>T</big>otally <big style={{color: 'red'}}>A</big>wesome</small></small></small>
                        </div>
                     </div>

                     <h1 class="text1"><big class="text10" >Teach </big><big class="text11" > Love </big><big class="text12" >Inspire</big></h1>

                     <img src={book} alt="" class="book"  />
                     <img src={bg0} alt="" class="bg0"  />
                     <img src={bg1} id="bg1" alt=""></img>
                 </div>
                 <a  id="gotopbtn" href="#" style={{fontSize:35 }}><i  class='far'>&#xf35b;</i></a>
                    <h4 class="gtbh">SCROLL TO TOP</h4>
            </div>
        )
    }
}

export default Home
