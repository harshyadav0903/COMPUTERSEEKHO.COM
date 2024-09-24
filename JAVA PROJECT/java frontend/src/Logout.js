import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
    let navigate = useNavigate();
    const [isloggedin, setIsLoggedin] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("token_info");
        setIsLoggedin(false);
        alert("logging out")
        navigate('/login');
    };
    return (
        <div>
            <button type="submit" onClick={handleLogout}>Are You sure to Logout?</button>

        </div>

    )

}