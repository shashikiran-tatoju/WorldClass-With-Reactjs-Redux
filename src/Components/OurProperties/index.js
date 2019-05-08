import React,{Component } from 'react';  

//import components
import PageHeading from '../PageHeadings';
import Button from '../button';
import OurPropertiesButtons from './OurPropertiesButton';  
import OurPropertieButtonContent from './OurPropertieButtonContent'; 

//import the scss files
import '../../assets/css/OurProperties.scss';

class OurProperties extends Component{
    constructor(){
        super();
        this.state={
            PageHeading:[
                    {
                        pageHeadingClass:'worldClassOurProperties__heading color--black',
                        headingText:"Our Properties in Downtown Austin",
                        PageSubHeadingClass:'worldClassOurProperties__Text color--black',
                        subHeadingsText:'Please Contact us for Properties Brochure,Floorplans and Availability'
                    }
            ],
            Button:[
                {
                    buttonClass:'worldClassOurProperties__button color--black',
                    buttonTitle:'View Brochure',
                }
            ]
        }
    }
    render(){
        return(
            <div className="worldClassOurProperties bgColor--white">
                <PageHeading pageHeadingClass={this.state.PageHeading[0].pageHeadingClass}
                    headingText={this.state.PageHeading[0].headingText}
                    PageSubHeadingClass={this.state.PageHeading[0].PageSubHeadingClass}
                    subHeadingsText={this.state.PageHeading[0].subHeadingsText}>
                </PageHeading>
                <Button classButton={this.state.Button[0].buttonClass} buttonTitle={this.state.Button[0].buttonTitle}/>
                <OurPropertiesButtons />  
                <OurPropertieButtonContent /> 
            </div>
        )
    }
} 
export default OurProperties;