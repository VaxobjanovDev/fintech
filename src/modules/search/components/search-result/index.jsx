import './search-result.css'
import {Link} from "react-router-dom";

export const SearchResult = ({data}) => {
 return (
  <div className="container">
   <div className={"result"}>
    <div className="col-md-12 d-flex justify-content-center flex-column">
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
      {data !== null
       && data.length > 0 && data?.map((item) => (
        <Link key={item.id} to={"/company/" + item.id} state={item.id}>
         <div className={"row hover"}>
          <div className="col-sm-4 d-flex align-items-center">
           <h5>{item.name}</h5>
          </div>
          <div className="col-sm-4 d-flex align-items-center">
           <h5>{item.industries}</h5>
          </div>
          <div className="col-sm-4 d-flex align-items-center">
           <h5>{item.headquarters}</h5>
          </div>
         </div>
        </Link>
       ))}
     </div>
    </div>
   </div>
  </div>
 )
}