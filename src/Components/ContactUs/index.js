import React,{Component } from 'react';

//import the components 
import ContactContent from './ContactContent'; 
import ContactForm from './ContactForm';

//import the scss file
import '../../assets/css/ContactUs.scss';

class ContactUs extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }
    render(){
        return(
            <div className="worldClassContactUs bgColor--2f2f2f" id="contactUs">
                <h1 className="worldClassContactUs__heading color--white">Contact Us</h1>
                <ContactContent />
                <ContactForm />
            </div>
        )
    }
}
export default ContactUs;