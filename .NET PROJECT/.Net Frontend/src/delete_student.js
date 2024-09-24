import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

 function DeleteStudent() {
    const [student, setStudent] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://localhost:7020/api/Student/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setStudent(result);
            });
    }, [id]);

    const handleDelete = (event) => {
        event.preventDefault();

        fetch(`https://localhost:7020/api/Student/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.status === 200) {
                    console.log('Student deleted successfully.');
                    navigate('/');
                } else {
                    console.log('Failed to delete student.');
                }
            })
            .catch((error) => {
                console.error('Error deleting student:', error);
            });
            navigate('/ListAllStudents')
    };

    return (
        <div>
            <h1 style={{ color: 'blue' }}>Are you sure you want to delete the complete record?</h1>

            <form onSubmit={handleDelete}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
        </div>
    );
}

export default DeleteStudent;
