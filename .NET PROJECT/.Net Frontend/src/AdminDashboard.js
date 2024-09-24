

import React from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";


function AdminDashboard() {
    
    const [isloggedin, setIsLoggedin] = useState(false);
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    // useHistory hook to access the history object for navigation
    const navigate = useNavigate();

    // useEffect to check if the user is not logged in, then navigate to the login page
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
                <h2>Welcome  to Admin Dashboard</h2>
                <div className="button-container">
                    <button style={{ backgroundColor: 'white', color: 'white' }} className="dashboard-button"><Link to="/PlacementTab"> Placement Data</Link></button>
                    {/* <button className="dashboard-button"><Link to="/AddStaff">Add Staff</Link></button> */}
                    <button style={{ backgroundColor: 'white', color: 'white' }} className="dashboard-button"><Link to="/Staff">Staff</Link></button>
                    <button style={{ backgroundColor: 'white', color: 'white' }} className="dashboard-button"><Link to="/Student">Show Student</Link></button>
                    {/* <button className="dashboard-button"><Link to="/CompanyTab">Company</Link></button> */}
                    <button style={{ backgroundColor: 'white', color: 'white' }} className="dashboard-button"><Link to="/ListPayment">Payment</Link></button>
                    <button style={{ backgroundColor: 'white', color: 'white' }} className="dashboard-button"><Link to="/PRNGenerator">Generate PRN</Link></button>
                    <button style={{ backgroundColor: 'white', color: 'white' }} className="dashboard-button"><Link to="/NotificationTab">Notifications</Link></button>
                    <button style={{ backgroundColor: 'white', color: 'white' }} className="dashboard-button"><Link to="/Maintain">Table Maintainance</Link></button>
                    <button style={{ backgroundColor: 'white', color: 'white' }} className="dashboard-button"><Link to="/logout">logout </Link></button>
                </div>
            </div>
            <div className="view-all">
            </div>
            {/* <ListFollowUp /> */}
          {/* <PagingComponent /> */}
        </div>
    );
}

export default AdminDashboard;