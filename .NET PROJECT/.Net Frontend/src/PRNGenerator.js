import React, { useEffect, useState } from 'react';

export default function PRNIDGenerator() {
    const [studentData, setStudentData] = useState([]);
    const [courseIdMap, setCourseIdMap] = useState({});

    useEffect(() => {
        fetch("https://localhost:7020/api/Student/allstudents")
            .then(res => res.json())
            .then(data => {
                setStudentData(data);
                console.log(data);

                // Create a mapping of studentId to courseId
                const mapping = {};
                data.forEach(student => {
                    mapping[student.student_id] = student.course_id;

                });
                console.log(mapping);
                setCourseIdMap(mapping);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });
    },[]);

    const sendStudentIdsToBackend = (event) => {
        event.preventDefault();

  
        const courseId = '';

        studentData.forEach(student => {
            const studentId = student.student_id;
            const mappedCourseId = courseIdMap[studentId] || courseId;
            alert(mappedCourseId);

            fetch(`https://localhost:7020/api/Prn/generate-prn/${studentId}/${mappedCourseId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify({ studentId: studentId })
            })
                .then(response => response.text())
                .then(data => {
                    console.log("done");
                })
                .catch(error => {
                    console.error(`Error for studentId ${studentId}:`, error);
                });
        });
    };

    return (
        <div>
            <form onSubmit={sendStudentIdsToBackend}>
                <label htmlFor="submit">Submit</label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}