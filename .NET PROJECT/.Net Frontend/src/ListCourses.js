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
    fetch("https://localhost:7020/api/Course")
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
                    <tr key={cor.course_Id}>
                        <td>{cor.course_Id}</td>
                        <td>{cor.course_Name}</td>
                        <td>{cor.capacity}</td>
                        <Duration duration_id={cor.duration_Id} />
                        <td>{cor.description}</td>
                        <Qualification qualification_id={cor.qualification_id} />
                        <AgeGroup age_Group_id={cor.age_Group_ID} />
                        <td>{cor.syllabus}</td>
                        <td>
                          {(cor.isActive) ? (
                            <p>Active </p>
                          ) : (
                            <p>Inactive</p>
                          )
                        }</td>
                        <td>{cor.fees}</td>
                        <td> <Link to={'/UpdateCourse/'+cor.course_Id}>update</Link></td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>)
}