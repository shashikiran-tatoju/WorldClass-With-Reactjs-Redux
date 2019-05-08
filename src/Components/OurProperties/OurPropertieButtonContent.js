import React,{Component } from 'react';
import {connect } from 'react-redux';

//import the components 
import OurPropertieButtonInnerContent from './OurPropertiesButtonInnerContent'; 


class OurPropertiesButtonContent extends Component { 
    constructor(){
        super(); 
        this.state={
            OPBContent:[
                {
                    Heading4th:'4th & rio grande - lzr',
                    subHeading4th:'venue SF: 15,200 SF',
                    contentText:'Former home of live music venue La Zona Rosa',
                    content4th1:'Prefect space to host entertainment events',
                    content4th2:'Features a fenced-in patio',
                    content4th3:'Beautifully remodeled interior',
                    content4th4:'Former Host to:Prince, Norah Jones, Gary Clark, Jr.Willie Nelson, Chainsmokers, Lana Del Rey, Spoon, Afrojack, Kaskade,Krewella, DEV, T-Pain, Silver Sun Pickups, Cedric the Entertainer, Josh Abbott Band',
                },
                {
                    Heading4th:'6th & rio Grande-rio',
                    subHeading4th:'Venue SF: 13,292 SF',
                    contentText:'Three-story entertainment venue with rooftop space and full-size pool', 
                    content4th3:'Ideal host for corporate parties and musical premieres',
                    content4th4:'Former host to: Snoop Dogg, A$Ap Rocky, Grand Master Flash, G Eazy, 50 Cent, Cee Lo Green, Ludacris, Tiesto, Skrillex',
                }
            ]
           
        }
    }
    render(){
        return(
            <div className="webview__worldClassPropertie">
                <div className="worldClassWest6th" id="west6thDistrict"> 
                    <h2 className="worldClassWest6th__heading color--black">{this.props.headingTitle}</h2>
                    <OurPropertieButtonInnerContent headingTitle={this.props.headingTitle}
                        imageSrc={this.props.imageSrc}
                        Heading4th={this.state.OPBContent[0].Heading4th}
                        subHeading4th={this.state.OPBContent[0].subHeading4th}
                        contentText={this.state.OPBContent[0].contentText}
                        content4th1={this.state.OPBContent[0].content4th1}
                        content4th2={this.state.OPBContent[0].content4th2}
                        content4th3={this.state.OPBContent[0].content4th3}
                        content4th4={this.state.OPBContent[0].content4th4}>
                    </OurPropertieButtonInnerContent> 
                    <OurPropertieButtonInnerContent imageSrc={this.props.imageSrc2}
                        Heading4th={this.state.OPBContent[1].Heading4th}
                        subHeading4th={this.state.OPBContent[1].subHeading4th}
                        contentText={this.state.OPBContent[1].contentText} 
                        content4th3={this.state.OPBContent[1].content4th3}
                        content4th4={this.state.OPBContent[1].content4th4}>
                    </OurPropertieButtonInnerContent> 
                </div> 
            </div>
        )
    }
}
const mapStateToProps=(state)=>({ 
    headingTitle:state.bannerReducer.ourPropertieButtonContent[0].heading,
    imageSrc:state.bannerReducer.ourPropertieButtonContent[0].imgSrc,
    imageSrc2:state.bannerReducer.ourPropertieButtonContent[1].imgSrc2
});
export default connect(mapStateToProps) (OurPropertiesButtonContent);