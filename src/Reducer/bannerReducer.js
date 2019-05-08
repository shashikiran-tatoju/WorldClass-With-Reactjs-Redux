import Rio4Th from '../assets/images/4th&Rio.jpg';
import Rio6Th from '../assets/images/6th&Rio.jpg';

const intialState={ 
    ourPropertieButtonContent:[
        {
            heading:'west 6th district',
            imgSrc:Rio4Th,
        },
        {
            imgSrc2:Rio6Th
        }
    ]       
}
const BannerReducer=(state=intialState,action)=>{
    const newState={...state};
      
    return newState;
}
export default BannerReducer;