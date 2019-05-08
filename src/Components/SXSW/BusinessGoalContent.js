import React,{Component } from 'react';
import uniqueId from 'react-html-id';

//import the components 
import PageHeading from '../PageHeadings'; 
import Button from '../button';

//import the images
import FindNewBusinessOpp from '../../assets/images/findNewBusinessOpp.png';
import ConnectWithExistingCli from '../../assets/images/connectWithExistingCli.png';
import SeekEmploymentContract from '../../assets/images/findNewBusinessOpp.png';
import SeekInvestors from '../../assets/images/findNewBusinessOpp.png';
import HireTalentedPeople from '../../assets/images/hireTalentedPeople.png';
import LaunchNewProd from '../../assets/images/launchNewProd.png';
import InvestNewCompanies from '../../assets/images/investNewCompanies.png';
 


const BusinessGoalsList= (props) => {
    return(
        <li className="worldClassBUSGoals__Li pdg--lft0px">
            <img className="worldClassBUSGoals__images" src={props.BUSGoalsImages} alt="World Class Business" />
            <p className="worldClassBUSGoals__text">{props.BUSGoalsText}</p>
            <p className="worldClassBUSGoals__liValue">{props.BUSGoalsValue}</p>
        </li>
    )
} 


class BusinessGoalContent extends Component{
    constructor(){
        super();
        uniqueId.enableUniqueIds(this);
        this.state={
            PageHeading:[
                {
                    pageHeadingClass:'worldClassBUSGoals__heading color--black',
                    headingText:'Business goals for attending SXSW'
                }
            ],
            businessGoals:[
                 {id:this.nextUniqueId(),imgSrc:FindNewBusinessOpp,text:'Find New Business Opportunities',values:'64%'},
                 {id:this.nextUniqueId(),imgSrc:ConnectWithExistingCli,text:'Connect with Existing Clients',values:'46%'},
                 {id:this.nextUniqueId(),imgSrc:SeekEmploymentContract,text:'Seek Employment/ Contract Work',values:'16%'}, 
                 {id:this.nextUniqueId(),imgSrc:SeekInvestors,text:'Seek Investors',values:'12%'}, 
                 {id:this.nextUniqueId(),imgSrc:HireTalentedPeople,text:'Hire Talented People',values:'10%'}, 
                 {id:this.nextUniqueId(),imgSrc:LaunchNewProd,text:'Launch a New Product or Service',values:'10%'}, 
                 {id:this.nextUniqueId(),imgSrc:InvestNewCompanies,text:'Invest in New Companies',values:'5%'} 
            ],
            Button:[
                {
                    SwsxButton:'worldClassBUSGoals__grayButton color--white bgColor--black',
                    SXSWwebsite:'SXSW website'
                },
                {   
                    Viewourproperties:'worldClassBUSGoals__yellowButton color--black',
                    veiwOurButton:'View our properties'
                }
             ]
        }
    }
    render(){
        return(
            <div className="worldClassBUSGoals bgColor--gray">
                <PageHeading pageHeadingClass={this.state.PageHeading[0].pageHeadingClass} 
                            headingText={this.state.PageHeading[0].headingText} >
                </PageHeading> 
                <ul className="worldClassBUSGoals__UL">
                    {
                        this.state.businessGoals.map((BusinessGoals)=>{
                            return(
                                <BusinessGoalsList BUSGoalsImages={BusinessGoals.imgSrc}
                                                    BUSGoalsText={BusinessGoals.text}
                                                    BUSGoalsValue={BusinessGoals.values}
                                                    key={BusinessGoals.id} >
                                </BusinessGoalsList>
                            )
                            
                        })
                    }
                </ul> 
                <ul className='worldClassBUSGoals__buttonsUL'>
                    <li className='worldClassBUSGoals__buttonsLi'>
                        <Button classButton={this.state.Button[0].SwsxButton} buttonTitle={this.state.Button[0].SXSWwebsite}></Button>
                    </li>
                    <li className="worldClassBUSGoals__buttonsLi">
                        <Button classButton={this.state.Button[1].Viewourproperties} buttonTitle={this.state.Button[1].veiwOurButton} ></Button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default BusinessGoalContent;