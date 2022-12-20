import SearchIcon from '@mui/icons-material/Search';
import * as yup from 'yup';
import {useEffect, useState} from "react";
import {getCompoanyList} from "../../api";
import './searchbar-input.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {ErrorMessageBox} from "./error-message";

export const SearchbarInput = ({handleClick,setSearchData}) => {
 const [searchValue, setSearchValue] = useState("")

 let INITIALVALUE = {
  inputValue: ""
 }

 let validateValue = yup.object().shape({
  inputValue: yup.string().required("Iltimos kompaniya nomini kiriting!"),
 });

 const handleSearch = (values) => {
  setSearchValue(values.inputValue)
 }

 const handleSearchTerm = async () => {
  if (searchValue) {
   const data = await getCompoanyList(searchValue)
   try {
    setSearchData(data?.data?.payload?.content)
   } catch (e) {
    console.log(e)
   }
  }
  else setSearchData(null)
 }

 useEffect(() => {
  const getData = setTimeout(() => {
   handleSearchTerm()
  }, 500)
  return () => clearTimeout(getData)
 }, [searchValue])

 return (
  <div className={"input-wrapper"}>
   <div className="icon">
    <SearchIcon/>
   </div>
   <Formik initialValues={INITIALVALUE} onSubmit={handleSearch} validationSchema={validateValue}>
    {(values) => (
     <Form>
      <Field type={"text"} name={"inputValue"} placeholder={"Fintech"}>
       {
        ({
          field
         }) => {
         const {name, value} = field
         setSearchValue(value)
         return (
          <input name={name} {...field}/>
         )
        }
       }
      </Field>
      <ErrorMessage name="inputValue"
                    render={msg => <ErrorMessageBox>{msg}</ErrorMessageBox>}/>
      <button type={"button"} onClick={handleClick}>Search</button>
     </Form>
    )}
   </Formik>
  </div>
 )
}