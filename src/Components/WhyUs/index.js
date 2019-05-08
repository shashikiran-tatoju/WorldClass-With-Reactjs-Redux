import React,{Component} from 'react';

//import the components 
import PageHeadings from '../PageHeadings';
import AboutWhyUs from '../WhyUs/About';

//import the scss File
import '../../assets/css/WhyUs.scss';

class WhyUs extends Component {
    constructor(){
        super();
        this.state={
            pageHeadings:[
                {
                    pageHeadingClass:'worldClassWhyUs__heading color--black',
                    pageHeading:'Why Us',   
                    subHeadingClass:'worldClassWhyUs__Text color--black',
                    subHeading:'World Class Property Company is the largest private commercial real owner in Austin, Texas. We own the premier event venue, retail, office, and parking properties in downtown, east Austin, and along South Congress. We have done over 100 events and pop-up activations for large corporations and global brands in Austin. Texas.'
                }
            ]
        }
    }
    render(){
        return(
            <div className="worldClassWhyUs">
                <PageHeadings pageHeadingClass={this.state.pageHeadings[0].pageHeadingClass}
                    headingText={this.state.pageHeadings[0].pageHeading}
                    PageSubHeadingClass={this.state.pageHeadings[0].subHeadingClass} 
                    subHeadingsText={this.state.pageHeadings[0].subHeading}>
                </PageHeadings>
                <AboutWhyUs />
            </div>
        )
    }
}
export default WhyUs;
