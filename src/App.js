import React, { Component,Fragment } from 'react'; 
import './App.scss';

//import the Provider from react-redux.
import { Provider } from 'react-redux';
import {createStore } from 'redux';
import rootReducer from './Reducer/index';

//importing the components 
import Header from './Components/header/Header';
import Banner from './Components/Banner/Banner';
import SXSW from './Components/SXSW/index';
import WhyUs from './Components/WhyUs/index';
import PastTenants from './Components/PastTenants/index';
import OurProperties from './Components/OurProperties/index';
import ContactUs from './Components/ContactUs/index';
import Footer from './Components/Footer/Footer';
 
const store =createStore(rootReducer);

class App extends Component {
  render() {
    return (
       <Provider store={store}>
         <Fragment>
            <Header />
            <Banner />
            <SXSW />
            <WhyUs />
            <PastTenants />
            <OurProperties /> 
            <ContactUs />
            <Footer />
         </Fragment>
       </Provider>
    );
  }
}

export default App;
