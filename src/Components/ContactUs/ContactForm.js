import React, { Component } from 'react';
import uniqueId from 'react-html-id';


const ErrorParas =(props)=>{
    return(
        <p className={props.errorClassName} id={props.errorId}>{props.errorText}</p>
    )
}
export default class ContactForm extends Component {
    constructor(){
        super();
        uniqueId.enableUniqueIds(this);
        this.state={
            errorParas:[
                {
                    id:this.nextUniqueId(),
                    errorClassName:'errorMessage',
                    errorId:'errName',
                    errorText:'Please enter the name'
                },
                {
                    id:this.nextUniqueId(),
                    errorClassName:'errorMessage',
                    errorId:'errPhoneNumber',
                    errorText:'Please enter the phone number'
                },
                {
                    id:this.nextUniqueId(),
                    errorClassName:'errorMessage',
                    errorId:'errEmail',
                    errorText:'Please enter the email'
                },
                {
                    id:this.nextUniqueId(),
                    errorClassName:'errorMessage',
                    errorId:'errPropertieeName',
                    errorText:'Please enter the propertie name'
                },
                {
                    id:this.nextUniqueId(),
                    errorClassName:'errorMessage',
                    errorId:'errMessage',
                    errorText:'Please enter the message'
                },
                {
                    id:this.nextUniqueId(),
                    errorClassName:'sucessMessage',
                    errorId:'sucessMessage',
                    errorText:''
                },
            ]
        }
    }
  render() {
    return (
       <form className="worldClassContactUs__form">
            <div className="worldClassContactUs__inputDiv">
                <input className="worldClassContactUs__inputs1 mrg--lft0px" id="txtName" type="text" placeholder="Name" autoComplete="off" />
                <input className="worldClassContactUs__inputs" type="text" id="txtPhoneNumber" placeholder="Phone" autoComplete="off"  />
            </div>
            <div className="worldClassContactUs__inputDiv">
                <input className="worldClassContactUs__inputs1 mrg--lft0px" id="txtEmail" type="text" placeholder="Email" autoComplete="off" />
                <input className="worldClassContactUs__inputs" id="txtPropertyName" type="text" placeholder="Property Name" autoComplete="off" />
            </div>
            <div className="worldClassContactUs__inputDiv">
                <textarea className="worldClassContactUs__inputs1 inputMessage--properties" id="txtMessage" placeholder="Message" autoComplete="off" ></textarea> 
            </div>
            {
                this.state.errorParas.map((errorParas)=>{
                    return(
                        <ErrorParas key={errorParas.id}
                            errorClassName={errorParas.errorClassName}
                            errorId={errorParas.errorId} 
                            errorText={errorParas.errorText}/>
                    )  
                })
            }
            <input className="worldClassContactUs__button color--black"  type="button" value="Submit" />                    
       </form>
    )
  }
}
