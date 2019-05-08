import React,{Component } from 'react';

//import the components 
import PageHeading from '../PageHeadings';
import PastTenantsLeftContent from './PastTenantsLeftContent';
import PastTenantsRightContent from './PastTenantsRightContent';

//import the scss files
import '../../assets/css/PastTenants.scss';

class PastTenants extends Component{
    constructor(){
        super();
        this.state={
            PageHeading:[
                {
                    pageHeadingClass:'worldClasspastTenants__heading color--black',
                    headingText:'Past Tenants'
                }
                
            ]
        }
    }
    render(){
        return(
        <div className="worldClasspastTenants bgColor--gray">
            <PageHeading pageHeadingClass={this.state.PageHeading[0].pageHeadingClass}
                 headingText={this.state.PageHeading[0].headingText}/>
            <PastTenantsLeftContent />
            <PastTenantsRightContent />
        </div>
        )    
    }
}  
export default PastTenants; 