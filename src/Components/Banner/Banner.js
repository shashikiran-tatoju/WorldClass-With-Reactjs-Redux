import React,{Component } from 'react';
import '../../assets/css/Banner.scss';
import YellowButton from '../button';

//connect the component to global store by using import connect fro react-redux.
import { connect } from 'react-redux';

class Banner extends Component {
    constructor(){
        super();
        this.state={
            classButton:'worldClass__yellowButton color--black',
            buttonTitle:'View our properties'
        }
    } 
    render(){
        return(
            <div className="worldClass__banner">
                <div className="worldClass__bannerTextDiv">
                    <p className="worldClass__worldText color--white"> World Class presents the best real estate offerings for the SXSW Festival</p>
                    <p className="worldClass__bannerDate color--white">March 8 - 17, 2019</p> 
                    <YellowButton classButton={this.state.classButton} 
                    buttonTitle={this.state.buttonTitle} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (globaState) =>({
    todayDate:globaState.todayDate,
    xyx:globaState.xyx
})
export default connect(mapStateToProps)(Banner);
