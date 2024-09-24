import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function Deletecompany() {
    const [company, setcompany] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://localhost:7020/api/Company/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setcompany(result);
            });
    }, [id]);

    const handleDelete = (event) => {
        event.preventDefault();

        fetch(`https://localhost:7020/api/Company/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.status === 200) {
                    console.log('Company deleted successfully.');
                    navigate('/CompaniesDetails'); // Move this line inside the .then block
                } else {
                    console.log('Failed to delete company.');
                }
            })
            .catch((error) => {
                console.error('Error deleting company:', error);
            });
            navigate='/CompaniesDetails'
    };

    return (
        <div>
            <h1 style={{ color: 'blue' }}>Are you sure you want to delete the complete record of given company?</h1>

            <form onSubmit={handleDelete}>
                <button type="submit" className="btn btn-danger">Delete</button>
            </form>
        </div>
    );
}

export default Deletecompany;
