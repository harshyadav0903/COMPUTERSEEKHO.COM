import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ListCompany() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8084/api/Company/ListAll")
            .then((response) => response.json())
            .then((data) => {
                setCompanies(data);
            });
    }, []);

    return (
        <div className="table-container table-responsive">
            <h2>Company Data...</h2>
            <h4> <Link to="/addCompany">addCompany</Link></h4>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Company ID</th>
                        <th>Company Name</th>
                        <th>Logo</th>
                        <th>Location</th>
                        <th>Total Placement</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map((company) => (
                        <tr key={company.company_Id}>
                            <td>{company.company_Id}</td>
                            <td>{company.company_Name}</td>
                            <td>
                                <img
                                    src={company.logo}
                                    alt="Company Logo"
                                    style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: 'auto' }}
                                />
                            </td>
                            <td>{company.location}</td>
                            <td>{company.total_Placement}</td>
                            <td><Link to={`/deletecompany/${company.company_Id}`}>Delete</Link></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}