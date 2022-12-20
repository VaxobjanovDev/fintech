import './searchbar-input.css'
export const ErrorMessageBox = ({children})=>{
 return(
  <p className={"error-message"}>
   {children}
  </p>
 )
}