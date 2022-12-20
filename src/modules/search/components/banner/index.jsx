import Back from '../../../../images/background-zip24.png'
import {SearchbarInput} from "../../../../Components/searchbar-input";

import './banner.css'
import {SearchResult} from "../search-result";
import {useState} from "react";

export const Banner = ({setData}) => {
 const [searchData,setSearchData] = useState(null)
 let backgroundStyle = {
  backgroundImage: `url(${Back})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
 }
const handleClick = ()=>{
 setData(searchData)
 setSearchData(null)
}
 return (
  <div className={"banner"} style={backgroundStyle}>
   <div className="container d-flex flex-column justify-content-center">
    <h2>Enter your <span>keyword</span></h2>
    <div className="col-md-12 d-flex justify-content-center">
     <SearchbarInput handleClick={handleClick} setSearchData={setSearchData}/>
    </div>
    {searchData !== null && searchData.length > 0 && (<div className="col-md-12 d-flex justify-content-center">
     <SearchResult data={searchData}/>
    </div>)}
   </div>
  </div>
 )
}