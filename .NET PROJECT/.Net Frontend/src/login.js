
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';

const Login = () => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [isloggedin, setIsLoggedin] = useState(false);
    const [name, setName] = useState('');

    const navigate = useNavigate();

    // Check local storage for existing user 
    useEffect(() => {
        const storedUser = localStorage.getItem("token_info");
        if (storedUser) {
            setIsLoggedin(true);
            navigate('/home');
        }
    }, [navigate]);

    // Set user session in local storage
    const setLocalStorage = () => {
        const user = { ...formData };
        localStorage.setItem("token_info", JSON.stringify(user));
        setIsLoggedin(true);
    };

    // Handle input change
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(prevValues => ({ ...prevValues, [name]: value }));
    };

    // Handle navigation based on user role
    const handleRoleNavigation = (role, name,staffId) => {
        if (role === 1) {
            setLocalStorage();
            navigate("/AdminDashboard");
        } else if (role === 2) {
            setLocalStorage();
            navigate(`/Dashboard/${ name }/${ staffId }`);
        } else {
            alert('Invalid username or password');
        }
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("token_info");
        setIsLoggedin(false);
    };

    useEffect(() => {
        // Access the updated name value here
        console.log('Updated Name:', name);
    }, [name]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(Validation(formData));

        try {
            const response = await fetch('https://localhost:7020/api/Staff/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const loggedInStaff = await response.json();

                // Access staff details from the response
                const { roleId, name ,staffId} = loggedInStaff;
                // alert(loggedInStaff);
                 alert(roleId);
                 alert(name);
                 alert(staffId)

                 setName(name);
                // console.log(name);
                console.log(loggedInStaff);


                handleRoleNavigation(roleId, name,staffId);
            }
            else {
                throw new Error('Failed to authenticate');
            }
        }
        catch (error) {
            console.error('Error:', error);
            alert('Failed to authenticate. Please try again.');
        }
    };

    return (
        <div className="login-container">
            {isloggedin ? (
                <>
                    <h1>User already logged in. Redirecting...</h1>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <h4>LoginPage</h4>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="Email" onChange={handleChange} />
                        {errors.email && <span>{errors.email}</span>}

                        <label htmlFor="password">Password</label>
                        <input type="password" name="Password" onChange={handleChange} />
                        {errors.password && <span>{errors.password}</span>}

                        <label htmlFor="Button">Login</label>
                        <button type="submit">LogIn</button>

                        <p></p>
                        <p></p>
                    </form>
                </>
            )}
        </div>
    );
};

export default Login;
