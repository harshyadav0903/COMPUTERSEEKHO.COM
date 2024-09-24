

import React, { useEffect, useState } from 'react';

export default function PRNIDGenerator() {
    const [studentData, setStudentData] = useState([]);
    const [courseIdMap, setCourseIdMap] = useState({});

    useEffect(() => {
        fetch("http://localhost:8084/api/students/allStudents")
            .then(res => res.json())
            .then(data => {
                setStudentData(data);

                const mapping = {};
                data.forEach(student => {
                    mapping[student.student_id] = student.course_id;
                });
                setCourseIdMap(mapping);
            })
            .catch(error => {
                console.error('Error fetching student data:', error);
            });
    }, []);

    const sendStudentIdsToBackend = (event) => {
        event.preventDefault();

        const courseId = '';

        studentData.forEach(student => {
            const studentId = student.student_id;
            const mappedCourseId = courseIdMap[studentId] || courseId;

            fetch(`http://localhost:8084/api/prn/create/${mappedCourseId}/${studentId}`, {
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