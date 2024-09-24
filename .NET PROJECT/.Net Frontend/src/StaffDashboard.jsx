import React from "react";
import { Link } from "react-router-dom";
import ListFollowUp from "./ListFollowUp";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Dashboard() {

    const [isloggedin, setIsLoggedin] = useState(false);
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const navigate = useNavigate();
    const { name, staffId } = useParams();
    useEffect(() => {
        const storedUser = localStorage.getItem("token_info");
        if (!storedUser) {
            setIsLoggedin(false);
            navigate('/login');
        }
    }, [navigate]);
    return (
        <div className="dashboard">
            <div className="main-content">
                <h2>Welcome,{name} to Staff Dashboard</h2>
                <div className="button-container">
                    <button className="dashboard-button"><Link to={`/enquiry/${name}/${staffId}`}>Add Enquiry</Link></button>
                    <button className="dashboard-button"><Link to="/Student">Student</Link></button>
                    {/* <button className="dashboard-button"><Link to="/BatchTab">Batch</Link></button> */}
                    <button className="dashboard-button"><Link to="/ListAllFUP">Follow Up</Link></button>
                    <button className="dashboard-button"><Link to="/logout">logout </Link></button>
                </div>
            </div>
            <ListFollowUp name={name} />
        </div>
    );
}

export default Dashboard;
