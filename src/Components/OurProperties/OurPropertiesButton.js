import React,{Component} from 'react';
import uniqueId from 'react-html-id';
import { connect } from 'react-redux';

//import the actions 
import * as myAction from '../../Action/Action';

const OurPropertiesList = (props) =>{
    return( 
        <li className={props.liClassName} onClick={props.submitFunction} title={props.liTitle} id={props.liId}>
            <p className={props.bgImagesClass}>{props.bgText}</p>
            <p className='worldClassOurProperties__liText'>{props.text}</p>
        </li>  
    )
}
class OurProperties extends Component {
    constructor(){
        super();
        uniqueId.enableUniqueIds(this);
        // this.west6ThFunction=()=>{
        //     this.props.showWest6th();
        // }
        this.state={
            ourProperties:[
                {
                    id:this.nextUniqueId(),
                    liClassName:'worldClassOurProperties__LI1 color--white',
                    onClickFunction:this.west6ThFunction,
                    liTitle:'West6thDistrict',
                    liId:'West6th',
                    bgImagesClass:'worldClassOurProperties__images bg--image1',
                    bgText:'OurProperties images', 
                    text:'west 6th district'
                },
                {
                    id:this.nextUniqueId(),
                    liClassName:'worldClassOurProperties__LI color--white',
                    onClickFunction:this.showCongressAvenue,
                    liTitle:'CongressAvenueDistrict',
                    liId:'CongressAvenue',
                    bgImagesClass:'worldClassOurProperties__images bg--image2',
                    bgText:'OurProperties images', 
                    text:'congress avenue district'
                },
                {
                    id:this.nextUniqueId(),
                    liClassName:'worldClassOurProperties__LI color--white',
                    onClickFunction:this.showEntertainment,
                    liTitle:'EntertainmentDistrict',
                    liId:'Entertainment',
                    bgImagesClass:'worldClassOurProperties__images bg--image3',
                    bgText:'OurProperties images', 
                    text:'entertainment district'
                },
                {
                    id:this.nextUniqueId(),
                    liClassName:'worldClassOurProperties__LI color--white',
                    onClickFunction:this.showRedRiverMusic,
                    liTitle:'RedRiverMusicDistrict',
                    liId:'RedRiverMusic',
                    bgImagesClass:'worldClassOurProperties__images bg--image4',
                    bgText:'OurProperties images', 
                    text:'red river music district'
                },
                {
                    id:this.nextUniqueId(),
                    liClassName:'worldClassOurProperties__LI color--white',
                    onClickFunction:this.showConvention,
                    liTitle:'ConventionDistrict',
                    liId:'Convention',
                    bgImagesClass:'worldClassOurProperties__images bg--image5',
                    bgText:'OurProperties images', 
                    text:'convention district'
                },
                {
                    id:this.nextUniqueId(),
                    liClassName:'worldClassOurProperties__LI color--white',
                    onClickFunction:this.showEastAustin,
                    liTitle:'EastAustinDistrict',
                    liId:'EastAustin',
                    bgImagesClass:'worldClassOurProperties__images bg--image6',
                    bgText:'OurProperties images', 
                    text:'east austin district'
                },
            ]
        }
    }
    render(){
        return(
            <ul className="worldClassOurProperties__UL" id="webViewShow">
                {
                    this.state.ourProperties.map((ourProperties)=>{
                        return( 
                            <OurPropertiesList key={ourProperties.id}
                                liClassName={ourProperties.liClassName}
                                submitFunction={ourProperties.onClickFunction}
                                liTitle={ourProperties.liTitle}
                                liId={ourProperties.liId}
                                bgImagesClass={ourProperties.bgImagesClass}
                                bgText={ourProperties.bgText} 
                                text={ourProperties.text}>
                            </OurPropertiesList> 
                        )
                    })
                }
            </ul>
            
        )
    }
}
const mapDispatchToProps = (dispatch) => ({ 
    showWest6th: () => dispatch(myAction.showWest6thAction())  
})
export default connect(mapDispatchToProps)(OurProperties);