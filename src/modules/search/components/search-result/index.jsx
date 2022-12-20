import './search-result.css'
import {Link} from "react-router-dom";

export const SearchResult = ({data}) => {
 console.log(data)
 return (
  <div className={"result"}>
   <div className="row">
    <div className="col-sm-4 d-flex align-items-center">
     <h3>Company</h3>
    </div>
    <div className="col-sm-4 d-flex align-items-center">
     <h3>Category</h3>
    </div>
    <div className="col-sm-4 d-flex align-items-center ">
     <h3>Location</h3>
    </div>
   </div>
   <div className="data-wrap">
    {data!==null
     && data.length>0 && data?.map((item) => (
      <Link to={"/company/" + item.id} state={item.id}>
       <div className={"row hover"}>
        <div className="col-md-4 d-flex align-items-center">
         <h5>{item.name}</h5>
        </div>
        <div className="col-md-4 d-flex align-items-center">
         <h5>{item.industries}</h5>
        </div>
        <div className="col-md-4 d-flex align-items-center">
         <h5>{item.headquarters}</h5>
        </div>
       </div>
      </Link>
     ))}
   </div>
  </div>
 )
}