import Back from '../../../../images/background-zip24.png'
import {SearchbarInput} from "../../../../Components/searchbar-input";

import './banner.css'

export const Banner = ({setData})=>{
 let backgroundStyle = {
  backgroundImage:`url(${Back})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover"
 }

 return(
  <div className={"banner"} style={backgroundStyle}>
   <div className="container d-flex flex-column justify-content-center">
    <h2>Enter your <span>keyword</span></h2>
    <div className="col-md-12 d-flex justify-content-center">
     <SearchbarInput setData={setData} />
    </div>
   </div>
  </div>
 )
}