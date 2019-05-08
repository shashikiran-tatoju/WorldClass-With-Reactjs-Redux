import React,{Component } from 'react';
import '../../assets/css/Header.scss'; 
import uniqueId from 'react-html-id';

const HeaderLinks=(props)=>{
    return(
        <li className="worldClass__headerLI">
            <a className="worldClass__headerLinks" href={props.linksHref} title={props.linksTitle}>{props.linksContent}</a>
        </li>
    )
}
class Header extends Component {
    constructor(){
        super(); 
        uniqueId.enableUniqueIds(this);
        this.state={
            headerLinks:[
                {id:this.nextUniqueId(),link:"SXSW",href:"#SXSW",title:"SXSW"},
                {id:this.nextUniqueId(),link:"WHY ATTEND",href:"#WHYATTEND",title:"WHY ATTEND"},
                {id:this.nextUniqueId(),link:"WHY US",href:"#WHYUS",title:"WHY US"},
                {id:this.nextUniqueId(),link:"PAST TENANTS",href:"#PASTTENANTS",title:"PAST TENANTS"},
                {id:this.nextUniqueId(),link:"OUR PROPERTIES",href:"#OURPROPERTIES",title:"OUR PROPERTIES"},
                {id:this.nextUniqueId(),link:"CONTACT US",href:"#CONTACTUS",title:"CONTACT US"},
            ]
        }
    }
    render(){
        return(
            <div className="worldClass__header bgColor--gray">
                <a className="worldClass__logo" href="#Logo " title="Logo">Logo</a>
                <ul className="worldClass__headerUL">
                    {
                        this.state.headerLinks.map((headerLinks)=>{
                            return(
                                <HeaderLinks  linksHref={headerLinks.href} 
                                    linksTitle={headerLinks.title}
                                    linksContent={headerLinks.link}
                                    key={headerLinks.id} >
                                </HeaderLinks>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
} 
export default Header;