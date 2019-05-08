import React,{Fragment} from 'react';
const PageHeadings =(props)=>{
    return(
         <Fragment>
             <h1 className={props.pageHeadingClass}>{props.headingText} </h1>
             <p className={props.PageSubHeadingClass}>{props.subHeadingsText}</p>
         </Fragment>
    )
}
export default PageHeadings;