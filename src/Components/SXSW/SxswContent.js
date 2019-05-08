 import React,{Component,Fragment } from 'react';
 import uniqueId from 'react-html-id';

const SxswListing =(props)=>{
    return(
        <li className="worldClassSxsw__LI color--white">
            <p className='worldClassSxsw__liValue'>{props.listingNumber}</p>
            <p className="worldClassSxsw__liText">{props.listingText}</p>
        </li>
    )
    
 }
 class SxswContent extends Component {
     constructor(){
         super();
         uniqueId.enableUniqueIds(this);
         this.state={
            listingText:[
                {id:this.nextUniqueId(),listValue:'432,500',listText:'PARTICIPANTS'},
                {id:this.nextUniqueId(),listValue:'100',listText:'COUNTRIES REPRESENTED in 2018'},
                {id:this.nextUniqueId(),listValue:'10',listText:'DAY EVENT SPAN'},
                {id:this.nextUniqueId(),listValue:'5',listText:'DAYS FOR INTERACTIVE'},
                {id:this.nextUniqueId(),listValue:'5',listText:'DAYS FOR MUSIC'},
                {id:this.nextUniqueId(),listValue:'5',listText:'DAYS FOR FILM'}
            ],
           
         }
     }
     render(){
         return(
            <Fragment>
                <ul className="worldClassSxsw__UL">
                    {
                        this.state.listingText.map((sxswListingText)=>{
                            return(
                                <SxswListing listingNumber={sxswListingText.listValue}
                                        listingText={sxswListingText.listText}
                                        key={sxswListingText.id}>
                                </SxswListing>
                            )  
                        })
                    }
                </ul>
            </Fragment>
         )
     }
 }
 export default SxswContent;