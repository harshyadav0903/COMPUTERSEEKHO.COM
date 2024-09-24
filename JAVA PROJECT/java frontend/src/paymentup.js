import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Paymentup() {
    const [payment, setPayment] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8084/api/Payment/${id}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setPayment(result); // Set the payment state with the fetched values
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleChange = event => {
        const { name, value } = event.target;
        setPayment(prevPayment => ({
            ...prevPayment,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const demo = JSON.stringify(payment);
        fetch(`http://localhost:8084/api/Payment/payment/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: demo
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response;
            })
            .then(data => {
                console.log("Payment updated successfully:", data);
                navigate('/ListPayment'); // Navigate back to the list payment page after successful update
            })
            .catch(error => {
                console.error("Error updating payment:", error);
            });
    };

    // Check if payment object is empty
    if (Object.keys(payment).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Payment Id:</label> 
                <input type="text" name="payment_Id" value={payment.payment_Id} onChange={handleChange} /><br />

                <label>Student Id:</label> 
                <input type="text" name="student_Id" value={payment.student_Id} onChange={handleChange} /><br />

                <label>Transaction Id:</label> 
                <input type="text" name="transaction_Id" value={payment.transaction_Id} onChange={handleChange} /><br />

                <label>Date:</label> 
                <input type="text" name="date" value={payment.date} onChange={handleChange} /><br />

                <label>Amount:</label> 
                <input type="text" name="amount" value={payment.amount} onChange={handleChange} /><br />

                <label>Batch Id:</label> 
                <input type="text" name="batch_Id" value={payment.batch_Id} onChange={handleChange} /><br />

                <label>Payment Type Id:</label> 
                <input type="text" name="paymentTypeId" value={payment.paymentTypeId} onChange={handleChange} /><br />

                {/* Add onClick event handler to the button */}
                <button type="submit" onClick={handleSubmit}>Update Payment</button>
            </form>
        </div>
    );
}

export default Paymentup;

/*import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Paymentup() {
    const [payment, setPayment] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/Payment/${id}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setPayment(result); // Set the payment state with the fetched values
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleChange = event => {
        const { name, value } = event.target;
        setPayment(prevPayment => ({
            ...prevPayment,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const demo = JSON.stringify(payment);
        fetch(`http://localhost:8080/api/Payment/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: demo
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("Payment updated successfully:", data);
                navigate('/ListPayment'); // Navigate back to the list page after successful update
            })
            .catch(error => {
                console.error("Error updating payment:", error);
            });
    };

    // Check if payment object is empty
    if (Object.keys(payment).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Payment Id:</label> 
                <input type="text" name="payment_Id" value={payment.payment_Id} onChange={handleChange} /><br />

                <label>Student Id:</label> 
                <input type="text" name="student_Id" value={payment.student_Id} onChange={handleChange} /><br />

                <label>Transaction Id:</label> 
                <input type="text" name="transaction_Id" value={payment.transaction_Id} onChange={handleChange} /><br />

                <label>Date:</label> 
                <input type="text" name="date" value={payment.date} onChange={handleChange} /><br />

                <label>Amount:</label> 
                <input type="text" name="amount" value={payment.amount} onChange={handleChange} /><br />

                <label>Batch Id:</label> 
                <input type="text" name="batch_Id" value={payment.batch_Id} onChange={handleChange} /><br />

                <label>Payment Type Id:</label> 
                <input type="text" name="paymentTypeId" value={payment.paymentTypeId} onChange={handleChange} /><br />

                <button type="submit">Update Payment</button>
            </form>
        </div>
    );
}

export default Paymentup;




/*import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Paymentup() {
    const [payment, setPayment] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/Payment/${id}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setPayment(result); // Set the payment state with the fetched values
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleChange = event => {
        const { name, value } = event.target;
        setPayment(prevPayment => ({
            ...prevPayment,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const demo = JSON.stringify(payment);
        fetch(`http://localhost:8080/api/Payment/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: demo
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("Payment updated successfully:", data);
                navigate('/'); // Navigate to the list page after successful update
            })
            .catch(error => {
                console.error("Error updating payment:", error);
            });
    };

    // Check if payment object is empty
    if (Object.keys(payment).length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <label>Payment Id:</label> 
            <input type="text" name="payment_Id" value={payment.payment_Id} onChange={handleChange} /><br />

            <label>Student Id:</label> 
            <input type="text" name="student_Id" value={payment.student_Id} onChange={handleChange} /><br />

            <label>Transaction Id:</label> 
            <input type="text" name="transaction_Id" value={payment.transaction_Id} onChange={handleChange} /><br />

            <label>Date:</label> 
            <input type="text" name="date" value={payment.date} onChange={handleChange} /><br />

            <label>Amount:</label> 
            <input type="text" name="amount" value={payment.amount} onChange={handleChange} /><br />

            <label>Batch Id:</label> 
            <input type="text" name="batch_Id" value={payment.batch_Id} onChange={handleChange} /><br />

            <label>Payment Type Id:</label> 
            <input type="text" name="paymentTypeId" value={payment.paymentTypeId} onChange={handleChange} /><br />

            <button onClick={handleSubmit}>Update Payment</button>
        </div>
    );
}

export default Paymentup;

/*import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Paymentup() {
    const [payment, setPayment] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/Payment/${id}`)
            .then(res => res.json())
            .then(result => {
                setPayment(result);
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleChange = event => {
        const { name, value } = event.target;
        setPayment(prevPayment => ({
            ...prevPayment,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const demo = JSON.stringify(payment);
        fetch(`http://localhost:8080/api/Payment/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: demo
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("Payment updated successfully:", data);
                navigate('/'); // Navigate to the list page after successful update
            })
            .catch(error => {
                console.error("Error updating payment:", error);
            });
    };

    return (
        <div>
            <label>Payment Id:</label> 
            <input type="text" name="payment_Id" value={payment.payment_Id || ''} onChange={handleChange} /><br />

            <label>Student Id:</label> 
            <input type="text" name="student_Id" value={payment.student_Id || ''} onChange={handleChange} /><br />

            <label>Transaction Id:</label> 
            <input type="text" name="transaction_Id" value={payment.transaction_Id || ''} onChange={handleChange} /><br />

            <label>Date:</label> 
            <input type="text" name="date" value={payment.date || ''} onChange={handleChange} /><br />

            <label>Amount:</label> 
            <input type="text" name="amount" value={payment.amount || ''} onChange={handleChange} /><br />

            <label>Batch Id:</label> 
            <input type="text" name="batch_Id" value={payment.batch_Id || ''} onChange={handleChange} /><br />

            <label>Payment Type Id:</label> 
            <input type="text" name="paymentTypeId" value={payment.paymentTypeId || ''} onChange={handleChange} /><br />

            <button onClick={handleSubmit}>Update Payment</button>
        </div>
    );
}

export default Paymentup;



/*import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Paymentup() {
    const [payment, setPayment] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/Payment/${id}`)
            .then(res => res.json())
            .then(result => {
                setPayment(result);
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleChange = event => {
        const { name, value } = event.target;
        setPayment(prevPayment => ({
            ...prevPayment,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const demo = JSON.stringify(payment);
        fetch(`http://localhost:8080/api/Payment/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: demo
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("Payment updated successfully:", data);
                navigate('/'); // Navigate to the list page after successful update
            })
            .catch(error => {
                console.error("Error updating payment:", error);
            });
    };

    return (
        <div>
            <label>Payment Id:</label> {payment.payment_Id}<br />
            <label>Student Id:</label> {payment.student_Id}<br />
            <label>Transaction Id:</label> {payment.transaction_Id}<br />
            <label>Date:</label> {payment.date}<br />
            <label>Amount:</label> {payment.amount}<br />
            <label>Batch Id:</label> {payment.batch_Id} <br />
            <label>Payment Type Id:</label> {payment.paymentTypeId}<br />

            <button onClick={handleSubmit}>Update Payment</button>
        </div>
    );
}

export default Paymentup;


/*import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Paymentup() {
    const [payment, setPayment] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/Payment/${id}`)
            .then(res => res.json())
            .then(result => {
                setPayment(result);
            })
            .catch(error => console.error(error));
    }, [id]);

    const handleChange = event => {
        const { name, value } = event.target;
        setPayment(prevPayment => ({
            ...prevPayment,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const demo = JSON.stringify(payment);
        fetch(`http://localhost:8080/api/Payment/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: demo
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                console.log("Payment updated successfully:", data);
                navigate('/');
            })
            .catch(error => {
                console.error("Error updating payment:", error);
            });
    };

    return (
        <div>
            <label>Payment Id:</label> {payment.payment_Id}<br />
            <label>Student Id:</label> {payment.student_Id}<br />
            <label>Transaction Id:</label> {payment.transaction_Id}<br />
            <label>Date:</label> {payment.date}<br />
            <label>Amount:</label> {payment.amount}<br />
            <label>Batch Id:</label> {payment.batch_Id} <br />
            <label>Payment Type Id:</label> {payment.paymentTypeId}<br />

            <button onClick={handleSubmit}>Update Payment</button>
        </div>
    );
}

export default Paymentup;


/*import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
function Paymentup() {
    const [payment, setPayment] = useState({});
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        fetch("https://localhost:8080/api/Payment/" + id)
            .then(res => res.json())
            .then((result) => {
                setPayment(result);
            }
            ).catch((e) => console.log(e));
    }, []);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPayment(values => ({ ...values, [name]: value }))
        console.log(payment);
    }
    const handleSubmit = (event) => {
        let demo = JSON.stringify(payment);
        console.log(JSON.parse(demo));
        fetch("https://localhost:8080/api/Payment/", {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: demo
        }).then(r => { console.log(r) })
        event.preventDefault();
        navigate('/');
    }

    return (
        <div>
            <label>Payment Id:</label> {payment.paymentid}<br />
            <label>Student Id:</label> {payment.studentId}<br />
            <label>Transaction Id:</label> {payment.transactionid}<br />
            <label>Date:</label>{payment.date}<br />
            <label>Amount:</label>{payment.amount}<br />
            <label>Batch Id:</label>{payment.batchid} <br />
            <label>Payment Type Id:</label>{payment.paymentTypeId}<br />

            <button onClick={handleSubmit}>Update Payment</button>
        </div>
    );
}
export default Paymentup;*/
