import React,{Component } from 'react';
import uniqueId from 'react-html-id';

//import the images from image floder 
import SpareFoot from '../../assets/images/spareFoot.png';
import Heineken from '../../assets/images/heineken.png';
import ViceLogoBW from '../../assets/images/vice-logo-bw.png';
import BeatsTextLogoBW from '../../assets/images/beats-text-logo-bw.png';

const RightContent =(props) =>{
    return(
        <li className={props.liClassName}>
            <img className={props.imageClass} src={props.imageSrc} alt={props.altrName} />
        </li>
    )
}
class PastTenantsRightContent extends Component{
    constructor(){
        super();
        uniqueId.enableUniqueIds(this);
        this.state={
            rightContent:[
                {
                    id:this.nextUniqueId(),
                    liClassName:'worldClasspastTenants__rightLi1',
                    imageClass:'worldClasspastTenants__rightImages',
                    imageSrc:SpareFoot,
                    altrName:'SpareFoot'
                },
                {
                    id:this.nextUniqueId(),
                    liClassName:'worldClasspastTenants__rightLi2',
                    imageClass:'worldClasspastTenants__rightImages',
                    imageSrc:Heineken,
                    altrName:'Heineken'
                },
                {
                    id:this.nextUniqueId(),
                    liClassName:'worldClasspastTenants__rightLi1',
                    imageClass:'worldClasspastTenants__rightImage2',
                    imageSrc:ViceLogoBW,
                    altrName:'ViceLogoBW'
                },
                {
                    id:this.nextUniqueId(),
                    liClassName:'worldClasspastTenants__rightLi2',
                    imageClass:'worldClasspastTenants__rightImage2',
                    imageSrc:BeatsTextLogoBW,
                    altrName:'BeatsTextLogoBW'
                }                
            ]
        }
    }
    render(){
        return(
            <ul className='worldClasspastTenants__rightUL float--right mrg--rgt25px'>
                {
                    this.state.rightContent.map((rightContent)=>{
                        return(
                            <RightContent key={rightContent.id}
                                liClassName={rightContent.liClassName}
                                imageClass={rightContent.imageClass}
                                imageSrc={rightContent.imageSrc} 
                                altrName={rightContent.altrName}/>
                        )
                    })
                }
            </ul>
        )
    }
}
export default PastTenantsRightContent;