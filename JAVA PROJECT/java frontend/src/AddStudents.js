import './addstudent.css'
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function Createemp() {
    const [student, setstudent] = useState({});
    const[props,setprops]=useState([]);
    const [enquiry,setenquiry]=useState({});
    const[inputvalue,setinputvalue]=useState({});
    const { id } = useParams();
    const handle1=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        alert(inputvalue);
        setenquiry({...enquiry,[name]:value})
        fetch(`http://localhost:8084/api/enquiry/${inputvalue}`)
        .then((res) => res.json())
        .then((result) => {
            setenquiry(result);
            // console.log(result)
        });
    }
    let navigate = useNavigate();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setstudent(values => ({ ...values, [name]: value }))
        console.log(student);
    }

    const UpdateFollowUp=()=>{
        fetch("http://localhost:8084/api/follow_up/updateClosureId/"+enquiry.enquiry_Id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

    }

    const handleSubmit = (event) => {

        const sendData={
            ...enquiry,
            enquiry_id:enquiry.enquiry_Id,
            student_name:enquiry.student_Name,
            batch_id:student.batch_id,
            fees_paid:student.fees_paid,
            email:enquiry.email,
            contact_no:enquiry.contact_No,
            date_of_birth:enquiry.date_Of_Birth,
            course_id:enquiry.course_Id,
            total_fees:student.total_fees,
            payment_id:student.payment_id,
            gender:student.gender,
            photo:student.photo,
            qualification_id:enquiry.qualification,
            registration_date:student.registration_date
        }
        let demo = JSON.stringify(student);
        console.log(demo);
        fetch("http://localhost:8084/api/students/add_Student", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body:JSON.stringify(sendData)
        }).then(r => { console.log(r.json()) })
        event.preventDefault();
        console.log(student);
        UpdateFollowUp();
        navigate('/ListAllStudents');

    }
    return (
        <form onSubmit={handleSubmit}>
            <br /><label>Enquiry Id:</label>
            <input
                type="number"
                name="enquiry_id"
                onInput={(e)=>{setinputvalue(e.target.value)}}
                onChange={handleChange}
                onBlur={handle1}
                
            />
            <label>Student Name:</label>
            <input
                type="text"
                name="student_name"
                // value={enquiry.student_Name??""}
                defaultValue={enquiry.student_Name??""}
                onInput={handleChange}
            />
            <br /><label>Batch Id:</label>
            <input
                type="number"
                name="batch_id"
                onChange={handleChange}
            />
            <br /><label>Email:</label>
            <input
                type="email"
                name="email"
                defaultValue={enquiry.email}
                onChange={handleChange}
            />
            <br /><label>Fees Paid:</label>
            <input
                type="number"
                name="fees_paid"
                onChange={handleChange}
            />
            <br /><label>Location Id:</label>
            <input
                type="number"
                name="location_id"
                defaultValue={enquiry.location_id}
                onChange={handleChange}
            />
            <br /><label>Contact No:</label>
            <input
                type="text"
                name="contact_no"
                defaultValue={enquiry.contact_No??""}

                onChange={handleChange}
            />
            <br /><label>Date of Birth:</label>
            <input
                type="date"
                name="date_of_birth"
                defaultValue={enquiry.date_Of_Birth??""}

                onInput={handleChange}
            />
            <br /><label>Course Id:</label>
            <input
                type="number"
                name="course_id"
                defaultValue={enquiry.course_Id}
                onChange={handleChange}
            />
            <br /><label>Total Fees:</label>
            <input
                type="number"
                name="total_fees"
                onChange={handleChange}
            />
            <br /><label>Payment Id:</label>
            <input
                type="number"
                name="payment_id"
                onChange={handleChange}
            />
            <br /><label>Gender:</label>
            <div>
        <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={student.gender === 'male'}
            onChange={handleChange}
            className="gender-radio"
        />
        <label htmlFor="male">Male</label>

        <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={student.gender === 'female'}
            onChange={handleChange}
            className="gender-radio"
        />
        <label htmlFor="female">Female</label>
         </div>
            <br /><label>Photo:</label>
            <input
                type="file"
                name="photo"
                className="text-center" // Add this class to align the input at the center
                onChange={handleChange}
            />
            <br /><label>Qualification:</label>
            <input
                type="text"
                name="qualification_id"
                defaultValue={enquiry.qualification}
                onChange={handleChange}
            />
            <br /><label>Registration Date:</label>
            <input
                type="date"
                name="registration_date"
                onChange={handleChange}
            />
            <br></br>
            <input type="submit" />
        </form>
    );
}

