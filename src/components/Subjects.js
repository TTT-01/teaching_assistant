import React, { Component } from 'react'
import './subjects.css'
import kgp from './img/KGP.jfif'
import bg1 from './img/bulb.png'
import {scrollFunction} from './vanillajs'
import Participants1 from './Participants1'
import Participants2 from './Participants2'
import Participants3 from './Participants3'
import Participants4 from './Participants4'
import Participants5 from './Participants5'
import Participants6 from './Participants6'
import Popup from 'react-popup';
import { useAlert } from 'react-alert'
//import './participants.css'
import SweetAlert from 'react-bootstrap-sweetalert';



 class Subjects extends Component {
         
    componentDidMount() {
        scrollFunction();  
    }
    
    state={
        visible:"0",
        
    }
    


    constructor(props) {
        super(props);
    
        this.state = {
          alert: null
        };
      } 
    
      deleteThisGoal() {
        const getAlert = () => (
          <SweetAlert 
            success 
            
    
            title="Confirmation!" 
            onConfirm={() => this.hideAlert()}
          >
           All Participants from the course {this.sub} are added Successfully
          </SweetAlert>
        );
    
        this.setState({
          alert: getAlert()
        });
      }
    
      hideAlert() {
        console.log('Hiding alert...');
        this.setState({
          alert: null
        });
      }


    render() {
        const Subjects = () => {
            const alert = useAlert()};
        let mySpecialPopup = Popup.register({
            title: 'I am special',
            content: 'Since I am special you might need me again later. Save me!',
            buttons: {
                left: ['cancel'],
                right: ['ok']
            }
        });
        let list="";
        let sub="PLEASE SELECT THE COURSE!";
        let c1=1;
        let list1=<React.Fragment>
        <Participants1 name="Sukriti Sharma" gen="female" rollno="16CS30021"/>
        <Participants1 name="Ganesh Dani" gen="female"rollno="16CS30043"/>
        <Participants1 name="Amrita Palla"gen="male" rollno="16CS30025"/>
        <Participants1 name="Hira Keer"gen="female" rollno="16CS30018"/>
        <Participants1 name="Richa Wable"gen="male" rollno="16CS30022"/>
         <Participants1 name="Nishi Naidu"gen="male" rollno="16CS30011"   />
        
     </React.Fragment>;
  
        let list2=<React.Fragment>
        <Participants2 name="Anees Chahal" gen="male" rollno="17CS10021"/>
        <Participants2 name="Amrita Hegde" gen="female"rollno="17CS10024"/>
        <Participants2 name="Chinmay Naidu" gen="male"rollno="17CS10018"/>
        <Participants2 name="Urmi Sandal" gen="male"rollno="17CS10032"/>
        <Participants2 name="Rajesh Dev Mody" gen="female"rollno="17CS10011"/>
         <Participants2 name="Giaan Raj Mohabir" gen="male"rollno="17CS10033"   />
        
     </React.Fragment>;

        let list3= <React.Fragment>
        <Participants3 name="Manjari Tarun Sharma" gen="female" rollno="18CS1001"/>
        <Participants3 name="Drishti Usman"gen="male" rollno="18CS10003"/>
        <Participants3 name="Binoyya Din" gen="male"rollno="18CS10029"/>
        <Participants3 name="Mini Ibrahim Tiwari" gen="female"rollno="18CS10037"/>
        <Participants3 name="Radhe Mand"gen="male" rollno="18CS10041"/>
         <Participants3 name="Jatin Verma"gen="male" rollno="18CS10038"   />
        
     </React.Fragment>;

        let list4=
        <React.Fragment>
        <Participants4 name="Hemendra Lal Samuel" gen="male" rollno="18CS10021"/>
        <Participants4 name="Bhola Yadu Nangat"gen="male" rollno="18CS10019"/>
        <Participants4 name="Harpreet Raj Sethi" gen="female"rollno="18CS10031"/>
        <Participants4 name="Sona Deep Brar"gen="female"rollno="18CS10034"/>
        <Participants4 name="Shanti Prabhu"gen="male" rollno="18CS10005"/>
         <Participants4 name="Mahmood Chandra Krishna" gen="male"rollno="18CS10003"   />
         
     </React.Fragment>;

        let list5= <React.Fragment>
        <Participants5 name="Chandradeep Kade" gen="female" rollno="19CS10021"/>
        <Participants5 name="Surabh Surana"gen="female" rollno="19CS10013"/>
        <Participants5 name="Upasana Mody"gen="male" rollno="19CS10041"/>
        <Participants5 name="Sid Dad"gen="male" rollno="19CS10019"/>
        <Participants5 name="Sahil Chandra Dugar" gen="female"rollno="19CS10044"/>
         <Participants5 name="Kamlesh Mohanlal Thomas"gen="male" rollno="19CS10013"   />
         
     </React.Fragment>;

        let list6=<React.Fragment>
        <Participants6 name="Nikita Aayushman Rau" gen="male" rollno="20AE10021"/>
        <Participants6 name="Koushtubh Gera" gen="male" rollno="20AG10013"/>
        <Participants6 name="Kiran Tabeed Magar"gen="female" rollno="20BT10041"/>
        <Participants6 name="Faraz Kumar Kannan"gen="male" rollno="20CS10028"/>
        <Participants6 name="Avantika Minhas" gen="female"rollno="20EE30048"/>
         <Participants6 name="Pravin Ran Ratti"gen="male" rollno="20NA10032"   />
     </React.Fragment>;

       
        if(this.state.visible==="1"){
            sub="CS60041";
            
            list= list1;
            c1+=1;
            }
            else if(this.state.visible==="2"){
                sub="CS41001"
                list= list2;c1+=1;
                
                }
                else if(this.state.visible==="3"){
                    sub="CS31005"
                    list= list3;c1+=1;
                   
                    }
                    else if(this.state.visible==="4"){
                        sub="CS31007"
                        list= list4;c1+=1;
                        
                        }
                        else if(this.state.visible==="5"){
                            sub="CS21001"
                            list= list5;c1+=1;
                           
                            }
                             else if(this.state.visible==="6"){
                                 sub="CS19001"
                                list= list6;c1+=1;
                                
                                }
                                    else{
                                        sub=<div>PLEASE SELECT THE COURSE!</div>;
                                    }
        

        return (
            <div class="sbj"  id="SUBJECTS" data-text="Subjects">
               <img src={bg1} id="bgg1" alt=""></img>
                 <div  style={{color:'white',zIndex:4,top:'9vh'}}> <br/> <br/> <br/> <h1><big><big style={{textShadow:'1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue'}}>Subjects</big></big></h1>
                 <br/>
               <div class="wrapper" id="wrapper">
                   
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
                        <label for="card1" class="b" aria-hidden="true"><button onClick={()=>{this.setState({visible:"1"});document.getElementById("table").style.animation = "tble 4s 1"}}>
                        <a href="#PARTICIPANTS" style={{}}>Participants</a></button>  </label></label>
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
                        <label for="card2" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~somindu/toc-2019/toc.html" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card2" class="button b" aria-hidden="true">
                        <label for="card2" class="b" aria-hidden="true"><button onClick={()=>{this.setState({visible:"2"});document.getElementById("table").style.animation = "tble2 4s 1"}}>
                        <a href="#PARTICIPANTS" style={{}}>Participants</a></button>
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
                        <label for="card3" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~spp/algos2aut2015.html" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card3" class="button b" aria-hidden="true">
                        <label for="card3" class="b" aria-hidden="true"><button onClick={()=>{this.setState({visible:"3"});document.getElementById("table").style.animation = "tble3 4s 1"}}>
                        <a href="#PARTICIPANTS" style={{}}>Participants</a></button>
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
                        <label for="card4" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~debdeep/courses_iitkgp/COA2011/index.htm" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card4" class="button b" aria-hidden="true">
                        <label for="card4" class="b" aria-hidden="true"><button onClick={()=>{this.setState({visible:"4"});document.getElementById("table").style.animation = "tble4 4s 1"}}>
                        <a href="#PARTICIPANTS" style={{}}>Participants</a></button>
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
                        <label for="card5" class="button a" aria-hidden="true">
                        <small><a href="http://cse.iitkgp.ac.in/~abhij/course/theory/DS/Autumn19/" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card5" class="button b" aria-hidden="true">
                        <label for="card5" class="b" aria-hidden="true"><button onClick={()=>{this.setState({visible:"5"});document.getElementById("table").style.animation = "tble5 4s 1"}}>
                        <a href="#PARTICIPANTS" style={{}}>Participants</a></button></label></label>
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
                         <label for="card6" class="button a" aria-hidden="true">
                        <small><a href="https://cse.iitkgp.ac.in/~dsamanta/courses/pds_lab/index.html" target="_blank"><small>More Details</small></a></small>
                        </label>
                        <label for="card6" class="button b" aria-hidden="true">
                        <label for="card6" class="b" aria-hidden="true"><button onClick={()=>{this.setState({visible:"6"});document.getElementById("table").style.animation = "tble6 4s ease-out 1 "}}>
                        <a href="#PARTICIPANTS" style={{}}>Participants</a></button>
                        </label></label>
                    </div>
                </div>
            </div>
            </div>
    </div>

       </div>
         
    <div id="PARTICIPANTS" class="participants">
        <br/> <br/> <br/>
        <h1 style={{color:'white'}}><big>PARTICIPANTS</big></h1>
        <span> <big> Present Course: {sub} </big></span>
        <div style={{msOverflowX:'auto'}} class="tbl">
        <span class="flex-container">
                <button class="buttonz" onClick={()=>{this.setState({visible:"1"});document.getElementById("table").style.animation = "tble 1.5s 1"}}>CS60041</button> &nbsp; &nbsp;
                <button class="buttonz" onClick={()=>{this.setState({visible:"2"});document.getElementById("table").style.animation = "tble2 1.5s 1"}}>CS41001</button> &nbsp; &nbsp;
                <button class="buttonz" onClick={()=>{this.setState({visible:"3"});document.getElementById("table").style.animation = "tble3 1.5s 1"}}>CS31005</button> &nbsp; &nbsp;
                <button class="buttonz" onClick={()=>{this.setState({visible:"4"});document.getElementById("table").style.animation = "tble4 1.5s 1"}}>CS31007</button> &nbsp; &nbsp;
                <button class="buttonz" onClick={()=>{this.setState({visible:"5"});document.getElementById("table").style.animation = "tble5 1.5s 1"}}>CS21001</button> &nbsp; &nbsp;
                <button class="buttonz" onClick={()=>{this.setState({visible:"6"});document.getElementById("table").style.animation = "tble6 1.5s 1"}}>CS19001</button> &nbsp; &nbsp;
            </span>
        <table id="table">
           
          <tr>
            <th style={{color:'black'}}>Student Name</th>
            <th style={{color:'black'}}>Roll Number</th>
            <th></th>
          </tr>
         <span id="taab"></span>
         {list}
       
        </table>

        <div><br/>
                        <button onClick= {()=>{
                              this.deleteThisGoal();
                                       // alert('All Participants from the course '+sub+' are added Successfully')                                      
                                        }} class="button" style={{color:'black',zIndex:'5',cursor:'pointer',transform:'scale(1.01)'}}>ADD ALL PARTICPANTS
                        </button>
         </div>
         {this.state.alert}
        </div>
        
    </div>
            </div>
        )
    }
}




export default Subjects
