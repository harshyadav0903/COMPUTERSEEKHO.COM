// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Validation from './LoginValidation';

// const LoginPage = () => {
//     const [formData, setFormData] = useState({});
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const [isloggedin, setIsLoggedin] = useState(false);


//     // if gets the data from the localstorage of browser sets the loggin session for it
//     useEffect(() => {
//         const storedUser = localStorage.getItem("token_info");
//         if (storedUser) {
//             setIsLoggedin(true);
//             navigate('/home');
//         }
//     }, [navigate]);

// // set the token in local storage
//     const LocalStorage = () => {
//         const user = { formData };
//         localStorage.setItem("token_info", JSON.stringify(user));
//         setIsLoggedin(true);
//     };

//     // sets the value of the onchange event that user puts in the email and password feild

//     const handleChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setFormData(values => ({ ...values, [name]: value }))
//     };

//     // as per the response from the backend api and value of role user will be prompted to the their dashboards.
//     const handleRoleNavigation = (role) => {
//         if (role === 1) 
//         {
//             LocalStorage();
//             navigate('/dashboard');
//         }
//         else if (role === 2) 
//         {
//             LocalStorage();
//             navigate('/fdashbord');
//         }
//         else 
//         {
//             alert('Invalid username or password');
//         }
//     };

//     // on click on logout user session from the local storage is getting deleted and user gets out of the dashboard
//     const handleLogout = () => {
//         localStorage.removeItem("token_info");
//         setIsLoggedin(false);
//         //navigate('/home');
//     };

//     // handle submit submits the user input to the backend APi

//    const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors(Validation(formData));

//     try {
//         const response = await fetch('http://localhost:8080/api/staff/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
//         });

//         if (response.ok) {
//             const loggedInStaff = await response.json();

//             // Access staff details from the response
//             const { role_id, staff_id} = loggedInStaff;
//             console.log(loggedInStaff);
//             const roleid=(loggedInStaff.role_id)
//             console.log(roleid);

//             // Assuming you have a function to handle navigation based on role
//             handleRoleNavigation(roleid);

//             // You can also store staff details in the state or context for further use
//             // For example, using React context and useContext hook
//             // updateStaffContext({ role_id, staff_id, /* other staff properties */ });
//         } else {
//             throw new Error('Failed to authenticate');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('Failed to authenticate. Please try again.');
//     }
// };




//     return (
//         <div className="login-container">
//             {isloggedin ? (
//                 <>
//                     <h1>User already logged in. Redirecting...</h1>
//                     <button onClick={handleLogout}></button>
//                 </>
//             ) :
//                 (
//                     <>
//                         <h4>LoginPage</h4>
//                         <form onSubmit={handleSubmit}>
//                             <label htmlFor="email">Email</label>
//                             <input type="text" name="email" onChange={handleChange} />
//                             {errors.email && <span>{errors.email}</span>}

//                             <label htmlFor="password">Password</label>
//                             <input type="password" name="password" onChange={handleChange} />
//                             {errors.password && <span>{errors.password}</span>}

//                             <label htmlFor="Button">Login</label>
//                             <button type="submit">LogIn</button>

//                             <p></p>
//                             <p></p>
//                         </form>
//                     </>
//                 )}

//         </div>
//     );
// };

// export default LoginPage;


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
    const handleRoleNavigation = (role, name) => {
        if (role === 1) {
            setLocalStorage();
            navigate(`/AdminDashboard/${ name }`);
        } else if (role === 2) {
            setLocalStorage();
            navigate(`/Dashboard/${ name }`);
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
            const response = await fetch('http://localhost:8084/api/staff/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const loggedInStaff = await response.json();

                // Access staff details from the response
                const { role_id, name } = loggedInStaff;
                alert(loggedInStaff);
                alert(role_id);
                alert(name);

                setName(name);
                console.log(name);
                console.log(loggedInStaff);


                handleRoleNavigation(role_id, name);
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
                        <input type="text" name="email" onChange={handleChange} />
                        {errors.email && <span>{errors.email}</span>}

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={handleChange} />
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
