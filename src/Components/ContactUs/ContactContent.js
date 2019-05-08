 import React, { Component} from 'react'
 import uniqueId from 'react-html-id';
 
 
 const ContactContentLI = (props)=>{
     return(
         <li className="worldClassContactUs__LI color--white">
            <p className={props.bgClassName} >{props.bgContent}</p>
            <p className="worldClassContactUs__text0">{props.text0}</p>
            <a className="worldClassContactUs__text1" href={props.href} title={props.contactNumberTitle}>{props.contactDetails}</a>
        </li>
     )
    
 }
 export default class ContactContent extends Component {
     constructor(){
         super();
        uniqueId.enableUniqueIds(this);
         this.state={
            contactContent:[
                {
                    id:this.nextUniqueId(),
                    bgClassName:"worldClassContactUs__bgIcons bg--icon1",
                    bgContent:'call us image',
                    text0:'Call Us',
                    href:'#Contact',
                    contactNumberTitle:'Contact Number',
                    contactDetails:'512.808.1111'
                },
                {
                    id:this.nextUniqueId(),
                    bgClassName:"worldClassContactUs__bgIcons bg--icon2",
                    bgContent:'mail us image',
                    text0:'Mail Us',
                    href:'http://www.worldclass247.com/',
                    contactNumberTitle:'About World class',
                    contactDetails:'info@worldclassproperty.com'
                },
                {
                    id:this.nextUniqueId(),
                    bgClassName:"worldClassContactUs__bgIcons bg--icon3",
                    bgContent:'website link',
                    text0:'Corporate Website',
                    href:'http://www.worldclassproperty.com/',
                    contactNumberTitle:'World class website',
                    contactDetails:'www.worldclassproperty.com'
                },
            ]
            
         }
     }
   render() {
     return ( 
         <ul className="worldClassContactUs__UL"> 
            {
                this.state.contactContent.map((contactContent)=>{
                    return(
                        <ContactContentLI key={contactContent.id}
                        bgClassName={contactContent.bgClassName}
                        bgContent={contactContent.bgContent}
                        text0={contactContent.text0}
                        href={contactContent.href}
                        contactNumberTitle={contactContent.contactNumberTitle}
                        contactDetails={contactContent.contactDetails}/>
                    )
                })
            }
         </ul>
     )
   }
 }
 