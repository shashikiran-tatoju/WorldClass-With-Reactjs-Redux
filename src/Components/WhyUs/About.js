import React,{Component,Fragment } from 'react';
import uniqueId from 'react-html-id';

const AboutWhyUsLi = (props) =>{
    return(
        <li className="worldClassWhyUs__LI color--white">
            <p className={props.imageClass}>{props.avlImage}</p>
            <p className="worldClassWhyUs__liValues">{props.WhyUsValue}</p>
            <p className="worldClassWhyUs__liText">{props.WhyUsText}</p>
        </li>
    )
}
class AboutWhyUs extends Component {
    constructor(){
        super();
        uniqueId.enableUniqueIds(this);
        this.state={
            AboutWhyUS:[
                {
                    id:this.nextUniqueId(),
                    AviImageClass:'worldClassWhyUs__avlImages',
                    avlImage:'ava image',
                    WhyUsValue:'15',
                    WhyUsText:"Available Properties in Austin's Greater CBD"},
                {
                    id:this.nextUniqueId(),
                    AviImageClass:'worldClassWhyUs__rentImages',
                    avlImage:'rent image', 
                    WhyUsValue:'250,000+',
                    WhyUsText:"Rentable square feet"} 
            ]
        }
    }
    render(){
        return(
            <Fragment > 
                <ul className="worldClassWhyUs__UL">
                    {
                        this.state.AboutWhyUS.map((aboutWhyUS)=>{
                            return(
                                <AboutWhyUsLi imageClass={aboutWhyUS.AviImageClass} 
                                avlImage={aboutWhyUS.avlImage}
                                WhyUsValue={aboutWhyUS.WhyUsValue} 
                                WhyUsText={aboutWhyUS.WhyUsText}
                                key ={aboutWhyUS.id}/>
                            )
                        })
                    }
                </ul>
            </Fragment>    
        )
    }
}
export default AboutWhyUs;