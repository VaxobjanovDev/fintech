import {Banner} from "./components/banner";
import {useState} from "react";
import {Subheader} from "../../Components/subheader";
import {Cards} from "./components/cards";

export const SearchModule = ()=>{
 const [data,setData] = useState("");
 return(
  <>
   <Subheader/>
   <Banner  setData={setData}/>
   {data && <Cards data={data}/>}
  </>
 )
}