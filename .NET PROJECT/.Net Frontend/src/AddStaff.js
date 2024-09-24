import { useNavigate } from 'react-router-dom';
// import SignUpValidation from './SignUpValidation';
import { useEffect, useState } from 'react';


export default function AddStaff() {
  let navigate=useNavigate();

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    staff_id:'',
    designation_id:'',
    Qualification_id:'',
    Experience:'',
    Contact_No:'',
    age_Group_id:'',
    duration_id:'',
    role_id:''

    
  });
  const [errors, setErrors] = useState({});
  const[staffrole, setStaffRole]=useState([]);
  const[designationRole,setDesignationRole]=useState([])
  const[qualification,setQualification]=useState([])
  const[agegroup,setAgeGroup]=useState([])
  const[duration,setDuration]=useState([])
  const[location,setLocation]=useState([])
  const[rolesrc,setRole]=useState([])

  useEffect(()=>{
    fetch("https://localhost:7020/api/Role")
    .then(res=>res.json())
    .then((result)=>{console.log(result);setRole((result));});
}, []);

  useEffect(()=>{
    fetch("https://localhost:7020/api/Location")
    .then(res=>res.json())
    .then((result)=>{console.log(result);setLocation((result));});
}, []);

  

  useEffect(()=>{
    fetch("https://localhost:7020/api/CourseDuration")
    .then(res=>res.json())
    .then((result)=>{console.log(result);setDuration((result));});
}, []);

  useEffect(()=>{
    fetch("https://localhost:7020/api/AgeGroup")
    .then(res=>res.json())
    .then((result)=>{console.log(result);setAgeGroup((result));});
}, []);


 useEffect(()=>{
    fetch("https://localhost:7020/api/Qualification")
    .then(res=>res.json())
    .then((result)=>{console.log(result);setQualification(result);});
}, []);
  
  useEffect(()=>{
    fetch("https://localhost:7020/api/Designation")
    .then(res=>res.json())
    .then((result)=>{console.log(result);setDesignationRole(result);});
}, []);

  useEffect(()=>{
    fetch("https://localhost:7020/api/Role")
    .then(res=>res.json())
    .then((result)=>{console.log(result);setStaffRole(result.demo);});
}, []);

  

  const handleInput = (event) => {
    
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    console.log(values);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // setErrors(SignUpValidation(values));
    console.log(JSON.stringify(values));

    // if (errors.name === "" && errors.email === "" && errors.password === "") {
      fetch("https://localhost:7020/api/Staff", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then((data) => {
          console.log(data); 
        })
        .catch((error) => {
          console.error('There was a problem with the fetch operation:', error);
        });
        alert("Inserted");
        navigate("/AdminDashboard");

    // }
   
  };

  return (
    <div>
      <h4>Registration Of New Staff</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={handleInput} /><br/>
        {/* {errors.name && <span>{errors.name}</span>} */}

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" onChange={handleInput} /><br/>
        {/* {errors.email && <span>{errors.email}</span>} */}

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" onChange={handleInput} /><br/>
        {/* {errors.password && <span>{errors.password}</span>} */}

        {/* <label htmlFor="staff_id">staff_id:</label>
        <select name="staff_id" onChange={handleInput}>
        <option> selectOption</option>
            {staffrole?.map(emp=>(
              
                <option value={emp.staff_id}> {emp.role}</option>
            ))} 
        </select><br></br> */}
        
        
        <label htmlFor="designation_id">designationId:</label>
        <select name="designationId" onChange={handleInput}>
        <option> selectOption</option>
            {designationRole.map(emp=>(
                <option value={emp.designationId}> {emp.designationName}</option>
            ))} 
        </select><br/>


        
        <label htmlFor="role_id">role_id:</label>
        <select name="roleId" onChange={handleInput}>
        <option> selectOption</option>
            {rolesrc.map(emp=>(
                <option value={emp.role_Id}> {emp.roleName}</option>
            ))} 
        </select><br/>



        <label htmlFor="Qualification_id">Qualification_id:</label>
        <select name="qualificationId" onChange={handleInput}>
        <option> selectOption</option>
            {qualification?.map(emp=>(
                <option value={emp.qualification_id}> {emp.qualificationName}</option>
            ))} 
        </select> <br/>

        <label htmlFor="Experience">Experience:</label>
        <input type="text" name="experience" onChange={handleInput} /><br/>

        <label htmlFor="Contact_No">Contact_No:</label>
        <input type="text" name="contactNo" onChange={handleInput} /><br/>

      

        <button type='submit'>create</button>

        
       
      </form>
    </div>
  );
}