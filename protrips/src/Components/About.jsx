import {useFormik} from "formik";
import {useState} from "react";
import "../App.css";


const initialValues={
  name : "",
  lastname : "",
  gmail : "",
  phone : "",
}

const onSubmit = (values)=>{console.log(values)}

const validate = (values)=>{
  let invalid={}
  if(!values.name){
    invalid.name="Please enter your First Name."
  }
  else if(values.name===values.lastname){
    invalid.name="Both the name and lastname should not be same."
  }
  if(!values.lastname){
    invalid.lastname="Please enter your last name."
  }
  else if(values.name===values.lastname){
    invalid.lastname="Both the name and lastname should not be same."
  }
  if(!values.gmail){
    invalid.gmail="Please enter your Email."
  }
  else if(!values.gmail.includes("@")){
    invalid.gmail="Please include @ in your Email."
  }
  if(!values.phone){
    invalid.phone="Please enter your contact."
  }else if(String(values.phone).length!==10){
    invalid.phone="Invalid Contact"
  }
  return invalid
}

function About(){
const [state,setstate]=useState(false)

const record=()=>{
  setstate(true)
}
const forminputs = useFormik({
  initialValues,
  onSubmit,
  validate,
})


  return(
    <form onSubmit={forminputs.handleSubmit}>
      {state && Object.keys(forminputs.touched).length===4 && Object.keys(forminputs.errors).length===0? <div className="result">Registration Successfull!</div>:null}
      <div>
      <input type="text"  id="name" name="name" placeholder="First Name" onChange={forminputs.handleChange} value={forminputs.values.name} onBlur={forminputs.handleBlur}/>
      {forminputs.touched.name && forminputs.errors.name? <p className="find">{forminputs.errors.name}</p>: null}
      </div>
      <div>
      <input type="text" id="lastname" name="lastname" placeholder="Last Name" onChange={forminputs.handleChange} value={forminputs.values.lastname} onBlur={forminputs.handleBlur}/>
      { forminputs.touched.lastname && forminputs.errors.lastname? <p className="find">{forminputs.errors.lastname}</p>: null}
      </div>
      <div>
      <input type="email" id="gmail" name="gmail"  placeholder="Email" onChange={forminputs.handleChange} value={forminputs.values.gmail} onBlur={forminputs.handleBlur}/>
      { forminputs.touched.gmail && forminputs.errors.gmail? <p className="find">{forminputs.errors.gmail}</p>: null}
      </div>
      <div>
      <input type="number" id="phone" name="phone" placeholder="Contact" onChange={forminputs.handleChange} value={forminputs.values.phone} onBlur={forminputs.handleBlur}/>
      {forminputs.touched.phone && forminputs.errors.phone? <p className="find">{forminputs.errors.phone}</p>: null}
      </div>
      <button type="submit" onClick={record} className="submit">Submit</button>
    </form>
  )
}
export default About