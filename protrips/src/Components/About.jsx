import {useFormik} from "formik";
import {useState} from "react";
import "../App.css";


const initialValues={
  firstname : "",
  lastname : "",
  email : "",
  phone : "",
}

const onSubmit = (values)=>{console.log(values)}

const validate = (values)=>{
  let invalid={}
  if(!values.firstname){
    invalid.firstname="Please enter your First Name."
  }
  if(!values.lastname){
    invalid.lastname="Please enter your last name."
  }
  if(!values.email){
    invalid.email="Please enter your Email."
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
      <input type="text"  id="firstname" name="firstname" placeholder="First Name" onChange={forminputs.handleChange} value={forminputs.values.firstname} onBlur={forminputs.handleBlur}/>
      {forminputs.touched.firstname && forminputs.errors.firstname? <p className="find">{forminputs.errors.firstname}</p>: null}
      </div>
      <div>
      <input type="text" id="lastname" name="lastname" placeholder="Last Name" onChange={forminputs.handleChange} value={forminputs.values.lastname} onBlur={forminputs.handleBlur}/>
      { forminputs.touched.lastname && forminputs.errors.lastname? <p className="find">{forminputs.errors.lastname}</p>: null}
      </div>
      <div>
      <input type="email" id="email" name="email"  placeholder="Email" onChange={forminputs.handleChange} value={forminputs.values.email} onBlur={forminputs.handleBlur}/>
      { forminputs.touched.email && forminputs.errors.email? <p className="find">{forminputs.errors.email}</p>: null}
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