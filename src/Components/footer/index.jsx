import {NavLink} from "./list";
import {firstRow, fourthRow, secondRow, thirdRow} from "./data";
import './footer.css'
import {SocialMedia} from "./social";
import Logo from '../../images/FIT_Logo.png'
import {Copyright} from "./copyright";

export const Footer = () => {
 return (
  <div className={"footer"}>
    <div className="navigation">
     <div className="container">
      <div className="logo-footer">
       <img src={Logo} alt=""/>
      </div>
      <div className="row">
       <div className="col-sm-6 col-md-2">
        <ul className={"nav-list"}>
         <li className={"nav-list-item"}>
          <h3>Solutions</h3>
         </li>
         {firstRow.map((link) => (
          <NavLink path={link.path} key={link.id}>
           {link.title}
          </NavLink>
         ))}
        </ul>
       </div>
       <div className="col-sm-6 col-md-2">
        <ul className={"nav-list"}>
         <li className={"nav-list-item"}>
          <h3>News</h3>
         </li>
         {secondRow.map((link) => (
          <NavLink path={link.path} key={link.id}>
           {link.title}
          </NavLink>
         ))}
        </ul>
       </div>
       <div className="col-sm-6 col-md-2">
        <ul className={"nav-list"}>
         <li className={"nav-list-item"}>
          <h3>Research</h3>
         </li>
         {thirdRow.map((link) => (
          <NavLink path={link.path} key={link.id}>
           {link.title}
          </NavLink>
         ))}
        </ul>
       </div>
       <div className="col-sm-6 col-md-2">
        <ul className={"nav-list"}>
         <li className={"nav-list-item"}>
          <h3>Resources</h3>
         </li>
         {fourthRow.map((link) => (
          <NavLink path={link.path} key={link.id}>
           {link.title}
          </NavLink>
         ))}
        </ul>
       </div>
       <div className="col-sm-6 col-md-4 d-flex justify-content-end">
        <SocialMedia/>
       </div>
      </div>
     </div>
    </div>
   <Copyright/>
  </div>
 )
}