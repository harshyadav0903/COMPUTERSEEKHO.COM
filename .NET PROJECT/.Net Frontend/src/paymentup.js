import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Paymentup() {
    const [payment, setPayment] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://localhost:7020/api/Payment/getby/${id}`)
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
        fetch(`https://localhost:7020/api/Payment/updatePayment/${id}`, {
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
                <input type="text" name="studentId" value={payment.studentId} onChange={handleChange} /><br />

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
