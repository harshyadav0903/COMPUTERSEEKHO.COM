import React from "react";
import { Link } from "react-router-dom";

function Maintain() {
    return (
        <div className="maintain table">
            <div className="main-content">
                <h2>Admin Dashboard</h2>
                <div className="button-container">
                    <button className="dashboard-button"><Link to="/ListCourses">course</Link></button>
                    <button className="dashboard-button"><Link to="/CompaniesDetails">company</Link></button>
                    
                </div>
                <br></br>
               <Link to="/admindashboard">back</Link>
            </div>
            {/* <PagingComponent /> */}
        </div>
    );
}
export default Maintain;