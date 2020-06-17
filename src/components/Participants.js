
import './participants.css'
import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'
import {useAlert} from 'react-alert'


 class Participants extends Component {
    componentDidMount() {
     
    }
    
    
    
    render() {
        return (
            <React.Fragment>
          <tr id={this.props.name}>
            <td>{this.props.name}</td>
            <td>{this.props.rollno}</td>
            <td><button onClick={() => {
      confirmAlert({
        title: 'PLEASE CONFIRM',
        message: 'Are you sure to DEREGISTER this Student?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              alert('The Student with credentials \n Name:'+this.props.name+'\n Roll Number:'+this.props.rollno+'\n has been deregistered from the course');
              document.getElementById(this.props.name).style.display="none";
            }
          },
          {
            label: 'No',
            onClick:()=>{alert('kevvukeka')}
          }
        ]
      })
    }} style={{color:'red',fontWeight:'600'}}>DEREGISTER</button></td>      
          </tr>
          
      </React.Fragment>
        )
    }
}

export default Participants
