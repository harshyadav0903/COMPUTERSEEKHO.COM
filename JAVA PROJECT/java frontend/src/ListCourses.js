import React from "react"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import Qualification from "./Qualification";
import Duration from "./Duration";
import AgeGroup from "./AgeGroup";
export default function ListCourses()
{
  const [courses,setCourse]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:8084/api/course/ListAll")
    .then(res=>res.json())
    .then(result=>{setCourse(result);});
    console.log(courses)
    },[]);
    
    return (<div>
        <h4> <Link to="/Create">Create</Link></h4>
        <h2>Course Data....</h2>
        <table border={10}>
            <thead>
                <tr>
                    <th>course_Id</th>
                    <th>courseName</th>
                    <th>capacity</th>  
                    <th>duration</th>
                    <th>description</th>
                    <th>qualification</th>
                    <th>ageGroup</th>
                    <th>syllabus</th>
                    <th>is_Active</th>

                </tr>
            </thead>
            <tbody>
                {courses.map(cor=>(
                    <tr key={cor.courseId}>
                        <td>{cor.courseId}</td>
                        <td>{cor.courseName}</td>
                        <td>{cor.capacity}</td>
                        <Duration duration_id={cor.duration_id} />
                        <td>{cor.description}</td>
                        <Qualification qualification_id={cor.qualification_id} />
                        <AgeGroup age_Group_id={cor.age_Group_id} />
                        <td>{cor.syllabus}</td>
                        <td>
                          {(cor.is_active) ? (
                            <p>Active </p>
                          ) : (
                            <p>Inactive</p>
                          )
                        }</td>
                        <td> <Link to={'/UpdateCourse/'+cor.courseId}>update</Link></td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>)
}