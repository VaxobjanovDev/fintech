export const NavLink = ({children,path}) => {
 return (
  <li className="nav-list-item">
   <a href={path} className="nav-link">
    {children}
   </a>
  </li>
 )
}