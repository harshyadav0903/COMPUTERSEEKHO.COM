import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom"
export function Coursedel() {
    const [course, setcourse] = useState({});
    const { id } = useParams()
    const navigate= useNavigate();
    useEffect(() => {
        fetch("https://localhost:7020/api/Course/" + id)
            .then(res => res.json())
            .then((result) => { setcourse(result); }
            );
    }, {});
    const handeldel = (event) => {
        fetch("https://localhost:7020/api/Course/" + id, {
            method: 'Delete'
        })
            .then(res => res)
            .then((result) => {
                console.log(result)
            }); 
            navigate('/');
    }


    return (

        <div>
            <h1 style={{ color:'red' }}>R you sure</h1>
            <label>Id:</label>
            {course.courseId}<br />
            <label>name:</label>
            {course.courseName}<br />
            <form onSubmit={handeldel}>
                <input type="submit" />
            </form>
        </div>

    );
}
export default Coursedel;