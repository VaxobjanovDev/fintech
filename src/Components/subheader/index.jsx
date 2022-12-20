import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './subheader.css'

export const Subheader = ()=>{
 return(
  <div className={"subheader-wrapper"}>
   <div className="container">
    <h3><HomeIcon/> <ArrowForwardIosIcon className={"icon-size"}/> Search</h3>
   </div>
  </div>
 )
}