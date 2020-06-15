import React, { Component } from 'react'
import './subjects.css'
import kgp from './img/KGP.jfif'

 class Subjects extends Component {
    render() {
        return (
            <div class="sbj"  id="SUBJECTS" data-text="Subjects">
                 <div  style={{color:'white',zIndex:4,top:'9vh',position:'relative'}}><h1><big><big>Subjects</big></big></h1></div>
                 <br/><br/><br/>
               <div class="wrapper">
                   
        <div class="card">
            <input type="checkbox" id="card1" class="more" aria-hidden="true"></input>
            <div class="content">
                <div class="front" style={{backgroundImage:'url( https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSivEwZbRYkPV69JHWy6ZnGYLMAyLV-a1Jhl1_VolD-LV3iSxeZ&usqp=CAU)'}}>
                    <div class="inner">
                        <h2>CS60041:<br/> CRYPTOGRAPHY & NETWORK SECURITY</h2>
                        
                        <label for="card1" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                        <div class="info">
                            <span>6</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>participants</span>
                            </div>
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Credits</span>
                            </div>
                            <span>3</span>
                           
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Semester</span>
                            </div>
                            <span>9</span>
                           
                        </div>
                       
                        <div class="description">
                            <h4>Network Security & Cryptography </h4>
                            <p>Network Security & Cryptography is a concept to protect network and data transmission over wireless network. A network security system typically relies on layers of protection and consists of multiple components including networking monitoring and security software in addition to hardware and appliances.</p>
                        </div>
                        <div class="location">PROF. SOURAV MUKHOPADHYAY</div>
                        <div class="price"> <img src={kgp} alt="" style={{width:"70px"}}  /> </div>
                        <label for="card1" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                        
                        <label for="card1" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~debdeep/courses_iitkgp/Crypto/index.htm" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card1" class="button b" aria-hidden="true">
                        <label for="card1" class="b" aria-hidden="true">
                        <small><small>Participants</small></small>
                        </label></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <input type="checkbox" id="card2" class="more"></input>
            <div class="content">
                <div class="front" style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz-7aR755Q3MbjXfPf0593HGsvFM_ZDslUJPtxZ8jDsvBPVGRt&usqp=CAU)'}}>
                    <div class="inner">
                        <h2> CS41001: <br/> Theory of Computation</h2>
                       
                        <label for="card2" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <div class="info">
                            <span>6</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>participants</span>
                            </div>
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Credits</span>
                            </div>
                            <span>4</span>
                           
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Semester</span>
                            </div>
                            <span>7</span>
                           
                        </div>
                        <div class="description">
                            <h4>Theory of Computation</h4>
                            <p>
                            In theoretical computer science and mathematics, the theory of computation is the branch that deals with how efficiently problems can be solved on a model of computation, using an algorithm. The field is divided into three major branches: automata theory and formal languages, computability theory, and computational complexity theory, which are linked by the question: "What are the fundamental capabilities and limitations of computers?".</p>
                            
                        </div>
                        <div class="location">Prof. Somindu Chaya Ramanna</div>
                        <div class="price"> <img src={kgp} alt="" style={{width:"70px"}}  /> </div>
                        <label for="card2" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                        <label for="card1" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~somindu/toc-2019/toc.html" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card1" class="button b" aria-hidden="true">
                        <label for="card1" class="b" aria-hidden="true">
                        <small><small>Participants</small></small>
                        </label></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <input type="checkbox" id="card3" class="more"></input>
            <div class="content">
                <div class="front" style={{backgroundImage:'url(https://www.adweek.com/wp-content/uploads/2018/07/marketer-algorithm-content-2018.png)'}}>
                    <div class="inner">
                        <h2>CS31005<br/> Algorithms II</h2>                      
                        <label for="card3" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <div class="info">
                            <span>6</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>participants</span>
                            </div>
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Credits</span>
                            </div>
                            <span>4</span>
                           
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Semester</span>
                            </div>
                            <span>5</span>
                           
                        </div>
                        <div class="description">
                            <h4>Algorithm</h4>
                            <p>An algorithm is a well-defined procedure that allows a computer to solve a problem. Another way to describe an algorithm is a sequence of unambiguous instructions.</p>
                        </div>
                        <div class="location">Prof. Piyush Kanti Bhunre</div>
                        <div class="price"> <img src={kgp} alt="" style={{width:"70px"}}  /> </div>
                        <label for="card3" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                        <label for="card1" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~spp/algos2aut2015.html" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card1" class="button b" aria-hidden="true">
                        <label for="card1" class="b" aria-hidden="true">
                        <small><small>Participants</small></small>
                        </label></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <input type="checkbox" id="card4" class="more" aria-hidden="true"></input>
            <div class="content">
                <div class="front" style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0nwzSkoLQveI0l6iXVCaaY4n_dbtZ9BtReVe5ncscET6ocx3x&usqp=CAU)'}}>
                    <div class="inner">
                        <h2>CS31007:<br/> Computer Organization and Architecture</h2>
                        
                        <label for="card4" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <div class="info">
                            <span>6</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>participants</span>
                            </div>
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Credits</span>
                            </div>
                            <span>4</span>
                           
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Semester</span>
                            </div>
                            <span>6</span>
                           
                        </div>
                        <div class="description">
                            <h4>Computer Organization and Architecture</h4>
                            <p>Computer Organization and Architecture is the study of internal working, structuring and implementation of a computer system. Architecture in computer system, same as anywhere else, refers to the externally visual attributes of the system.</p>
                        </div>
                        <div class="location">Prof. K.Sreenivasa Rao</div>
                        <div class="price"> <img src={kgp} alt="" style={{width:"70px"}}  /> </div>
                        <label for="card4" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                        <label for="card1" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~debdeep/courses_iitkgp/COA2011/index.htm" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card1" class="button b" aria-hidden="true">
                        <label for="card1" class="b" aria-hidden="true">
                        <small><small>Participants</small></small>
                        </label></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <input type="checkbox" id="card5" class="more"></input>
            <div class="content">
                <div class="front" style={{backgroundImage:'url(https://d3i71xaburhd42.cloudfront.net/568b92d2b71f3e9314e54707c8318a525ffebbd9/3-Figure2-1.png)'}}>
                    <div class="inner">
                        <h2>CS21001: <br/>Discrete Structures</h2>
                       
                        <label for="card5" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <div class="info">
                            <span>6</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>participants</span>
                            </div>
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Credits</span>
                            </div>
                            <span>4</span>
                           
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Semester</span>
                            </div>
                            <span>4</span>
                           
                        </div>
                        <div class="description">
                        <h4>Discrete Structures</h4>

                            <p>
                            Discrete structures is study of mathematical structures that are fundamentally discrete (that is not continuous). This is usually the first mathematics course for computer science students; it helps them to start thinking about problems in a way computers can solve. Computers always deals with discrete objects and perform in discrete steps. Knowledge of discrete structures helps in analyzing algorithms, and understanding different areas of computer science like programming languages and cryptography.</p>
                        </div>
                        <div class="location">Prof. Abhijit Das</div>
                        <div class="price"><img src={kgp} alt="" style={{width:"70px"}}></img></div>
                        <label for="card5" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                        <label for="card1" class="button a" aria-hidden="true">
                        <small><a href="http://cse.iitkgp.ac.in/~abhij/course/theory/DS/Autumn19/" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card1" class="button b" aria-hidden="true">
                        <label for="card1" class="b" aria-hidden="true">
                        <small><small>Participants</small></small>
                        </label></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <input type="checkbox" id="card6" class="more"></input>
            <div class="content">
                <div class="front" style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxJeA8V4-ln3ytQjgFr_TkY3S6TezJiuy1MumhvH6AnmD9-dQ7&usqp=CAU)'}}>
                    <div class="inner">
                        <h2>CS19001: <br/>Programming & data structures Laboratory</h2>
                        
                        <label for="card6" class="button" aria-hidden="true">
                            Details
                        </label>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <div class="info">
                            <span>6</span>
                            <div class="icon">
                                <i class="fas fa-users"></i>
                                <span>participants</span>
                            </div>
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Credits</span>
                            </div>
                            <span>3</span>
                           
                        </div>
                        <div class="info">
                        <div class="icon">
                                
                                <span>Semester</span>
                            </div>
                            <span>2</span>
                           
                        </div>
                        <div class="description">
                            <h4> Programming & Data Structures Lab</h4>
                            <p>The Programming & Data Structures Lab is aimed to teach students the basic concepts of programming and data structures using the C programming language in Linux environment.</p>
                        </div>
                        <div class="location">Prof. Soumyajit Dey </div>
                        <div class="price"> <img src={kgp} alt="" style={{width:"70px"}}  /> </div>
                        <label for="card6" class="button return" aria-hidden="true">
                            <i class="fas fa-arrow-left"></i>
                        </label>
                         <label for="card1" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~dsamanta/courses/pds_lab/index.html" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card1" class="button b" aria-hidden="true">
                        <label for="card1" class="b" aria-hidden="true">
                        <small><small>Participants</small></small>
                        </label></label>
                    </div>
                </div>
            </div>
            </div>
    </div>

            </div>
        )
    }
}

export default Subjects
