import React ,{ Component } from 'react';

//import the Compnents
import PageHeadings from '../PageHeadings';
import SxswContent from './SxswContent';
import BusinessGoalsContent from './BusinessGoalContent'; 

//import the css
import '../../assets/css/Sxsw.scss';

class SXSW extends Component {
    constructor(){
        super();
        this.state={
            PageHeadings:[
                {
                    pageHeadingClass:'worldClassSxsw__heading color--black',
                    headingText:"About SXSW",
                    PageSubHeadingClass:'worldClassSxsw__southText color--black',
                    subHeadingsText:'South By Southwest dedicates itself to helping creative people achieve their goals. Founded in 1987 in Austin, Texas, SXSW is best known for its conference and festivals that celebrate the convergence of the interactive, flim, and music industries. An essential desination for global professionals, the event features sessions, showcases, screenings, exhibitions, and a variety of networking opportunities.'
                }
            ]
        }
    }
    render(){
        return(
            <div className="worldClassSxsw">
                <PageHeadings pageHeadingClass={this.state.PageHeadings[0].pageHeadingClass}
                            headingText={this.state.PageHeadings[0].headingText}
                            PageSubHeadingClass={this.state.PageHeadings[0].PageSubHeadingClass}
                            subHeadingsText={this.state.PageHeadings[0].subHeadingsText}>
                </PageHeadings>
                <SxswContent />
                <BusinessGoalsContent/>
                
            </div>
        )
    }
}
export default SXSW;