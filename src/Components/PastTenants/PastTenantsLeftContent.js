import React,{Component } from 'react';
import uniqueId from 'react-html-id';

//import the images 
import Samsung from '../../assets/images/samsung.png';
import Sony from '../../assets/images/sony.png';
import AppleMusic from '../../assets/images/appleMusic.png';
import Myspace from '../../assets/images/myspace.png';
import ThePatron from '../../assets/images/thePatron.png';
import Marlboro from '../../assets/images/marlboro.png';
import BrownDistributing from '../../assets/images/brownDistributing.png';
import UniversityTexas from '../../assets/images/universityTexas.png';


const LeftContent =(props)=>{
    return(
        <li className="worldClasspastTenants__leftLi">
            <img className={props.imageClass} src={props.imageSrc} alt={props.altName} />
        </li>
    )
}
class PastTenantsLeftContent extends Component {
    constructor(){
        super();
        uniqueId.enableUniqueIds(this);
        this.state={
            leftContent:[
                {id:this.nextUniqueId(),imageClass:'worldClasspastTenants__leftImages1 hgt--30px',imageSrc:Samsung,altName:'Samsung'},
                {id:this.nextUniqueId(),imageClass:'worldClasspastTenants__leftImages2 hgt--20px',imageSrc:Sony,altName:'Sony'},
                {id:this.nextUniqueId(),imageClass:'worldClasspastTenants__leftImages2 hgt--20px',imageSrc:AppleMusic,altName:'AppleMusic'},
                {id:this.nextUniqueId(),imageClass:'worldClasspastTenants__leftImages2 hgt--20px',imageSrc:Myspace,altName:'Myspace'},
                {id:this.nextUniqueId(),imageClass:'worldClasspastTenants__leftImages3 hgt--50px',imageSrc:ThePatron,altName:'ThePatron'},
                {id:this.nextUniqueId(),imageClass:'worldClasspastTenants__leftImages3 hgt--50px',imageSrc:Marlboro,altName:'Marlboro'},
                {id:this.nextUniqueId(),imageClass:'worldClasspastTenants__leftImages3 hgt--50px',imageSrc:BrownDistributing,altName:'BrownDistributing'},
                {id:this.nextUniqueId(),imageClass:'worldClasspastTenants__leftImages3 hgt--50px',imageSrc:UniversityTexas,altName:'UniversityTexas'},
                
            ]

        }
    }
    render(){
        return(
            <ul className="worldClassPastTenants__leftUL float--left mrg--lft25px">
                {
                    this.state.leftContent.map((leftContent)=>{
                        return(
                            <LeftContent key={leftContent.id}
                            imageClass={leftContent.imageClass}
                            imageSrc={leftContent.imageSrc}
                            altName={leftContent.altName}>  
                            </LeftContent>
                        )
                    })
                }
            </ul>
        )
    }
}
export default PastTenantsLeftContent;