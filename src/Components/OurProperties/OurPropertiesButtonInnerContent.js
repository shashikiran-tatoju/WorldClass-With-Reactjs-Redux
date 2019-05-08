import React,{Fragment} from 'react';

const ParaContent =(props)=>{ 
    return(
        <p className="worldClassWest6th__4thHtext">{props.content4th}</p>
    )
}
const ourPropertieButtonInnerContent =(props)=>{
    return(
        <Fragment>
            <ul className="worldClassWest6th__4thUL">
                <li className='worldClassWest6th__4thLI'>
                    <img className="worldClassWest6th__4thImage" src={props.imageSrc} alt="4th and Rio"/>
                </li>
                <li className="worldClassWest6th__4thLI2"> 
                    <p className="worldClassWest6th__4thHeding">{props.Heading4th}</p>
                    <p className="worldClassWest6th__4thSubHeading">{props.subHeading4th}</p>
                    <p className="worldClassWest6th__4thText1">{props.contentText}</p>
                    <ParaContent content4th={props.content4th1}/>
                    <ParaContent content4th={props.content4th2}/>
                    <ParaContent content4th={props.content4th3}/>
                    <ParaContent content4th={props.content4th4}/>
                    <button className="worldClassWest6th__button color--black mrg--tp10px">Contact us</button>
                </li>
            </ul>
        </Fragment>
        
    )
}
export default ourPropertieButtonInnerContent;