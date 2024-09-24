import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Receipt from "./receipt"; // Import the Receipt component
import "./Addpayment.css";


export default function AddPayment() {
    const{studentid}=useParams();
    const [payment, setPayment] = useState({
        student_Id: "",
        transaction_Id: "",
        date: "",
        amount: "",
        batch_Id: "",
        paymentTypeId: ""
    });
    const [paymentmethod, setPaymentmethod] = useState([]);

    const [showReceipt, setShowReceipt] = useState(false); // State to toggle receipt visibility
    const navigate = useNavigate();


    useEffect(() => {
        fetch("https://localhost:7020/api/Paymentinfo")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPaymentmethod(data);
            });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPayment(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(payment);

        fetch("https://localhost:7020/api/Payment/create", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(payment)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setShowReceipt(true); // Show receipt after successful submission
                
            })
            .catch(error => {
                console.error('Error submitting data:', error);
                // Handle error here, for example, show an error message to the user
            });
    }

    return (
        <div>
            {showReceipt ? (
                <Receipt payment={payment} onClose={() => setShowReceipt(false)} />
            ) : (
                <form className="payment-form" onSubmit={handleSubmit}>
                    <h4><center>PAYMENT FORM</center></h4>
                    <div className="form-group">
                        <label htmlFor="studentId">Student Id:</label>
                        <input type="int" id="studentId" name="studentId" defaultValue={studentid} value={studentid} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="transaction_Id">Transaction Id:</label>
                        <input type="text" id="transaction_Id" name="transaction_Id" value={payment.transaction_Id} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input type="date" id="date" name="date" value={payment.date} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount:</label>
                        <input type="text" id="amount" name="amount" value={payment.amount} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="batch_Id">Batch Id:</label>
                        <input type="int" id="batch_Id" name="batch_Id" value={payment.batch_Id} onChange={handleChange} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="paymentTypeId">Payment Type:</label>
                        <select  name="paymentTypeId" onChange={handleChange}>
                            <option >Select Payment Type</option>
                            {paymentmethod.map(payment => (
                                <option key={payment.payment_Id} value={payment.payment_Id}>  
                                    {payment.payment_method_Description}
                                </option>
                            ))}
                        </select>

                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}
