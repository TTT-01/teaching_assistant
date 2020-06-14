import React, { Component } from 'react'
import './home.css'
import bg0 from './img/bg2.gif'
import bgvd from './video/bg.mp4'
import book from './img/book.png'
import {scrollFunction} from './vanillajs'
import bg1 from './img/bulb.png'



const screenfull = require('screenfull');

export class Home extends Component {

 componentDidMount() {
    
    scrollFunction();  
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.async = true;
    document.body.appendChild(script)

        if (screenfull.isEnabled) {
          screenfull.on('change', () => {
            console.log('Am I fullscreen?', screenfull.isFullscreen ? 'Yes' : 'No');
          });
        };
    }
            
          
    render() {
        return (
            <div>
                <div className="bg">
                      <div class="container0">
                        <div class="cntr0" style={{fontFamily:'Lucida Bright'}}>
                        <div class="overlay0"><h1 class="text0" style={{color:'white',textShadow:'1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue'}}><big>I am a dedicated  </big></h1><big>👨‍🎓</big></div>

                          @<big style={{color: 'red', fontFamily: 'Herculanum'}}>T</big>eaching <big style={{color:' rgb(255, 67, 20)', fontFamily: 'Herculanum'}}>A</big>ssistant!
                          <br></br>
                        <small class="cntr1" style={{fontFamily:'Curlz MT'}}> <small><small> <big style={{color:'red'}}>T</big>otally <big style={{color: 'red'}}>A</big>wesome</small></small></small>
                        </div>
                     </div>

                     <h1 class="text1" style={{textShadow:'0px 2px 0px red'}}><big class="text10" >Teach </big><big class="text11" > Love </big><big class="text12" >Inspire</big></h1>

                     <img src={book} alt="" class="book"  />
                     <img src={bg0} alt="" class="bg0"  />
                     <video 
                      autoPlay
                       loop
                        muted
                        style={{
                            position:"absolute",
                            width:"100%",
                            left:"50%",
                            top: "50%",
                            height:"100%",
                            objectFit:"cover",
                            transform:"translate(-50%,-50%)",
                            zIndex:"-0",
                            opacity:"0"
                        }}  >
                         <source src={bgvd} type="video/mp4" class="bgvd" />
                     </video>
                     <img src={bg1} id="bg1" alt=""></img>
                 </div>
                 <a  id="gotopbtn" href="#" style={{fontSize:35 }}><i  class='far'>&#xf35b;</i></a>
                    <h4 class="gtbh">SCROLL TO TOP</h4>
                    <button onClick={ () => {
                                   if (screenfull.isEnabled) {
                                     screenfull.toggle();
                                   }
                                 }}>Toggle fullscreen</button>
               
            </div>
        )
    }
}

export default Home
