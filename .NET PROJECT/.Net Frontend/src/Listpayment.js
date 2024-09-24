import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router DOM
// import "./ListPayment.css"; // Import the CSS file for table styling

function ListPayment() {
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchPaymentData();
    }, []);

    const fetchPaymentData = () => {
        fetch("https://localhost:7020/api/Payment/ListAll")
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setPayments(data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching data: ' + error.message);
                setLoading(false);
            });
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Payment Data</h2>
            <Link to="/admindashboard">Back</Link><br></br>
            <Link to="/Addpayment">Add Payment</Link>
            {error && <div className="alert alert-danger">{error}</div>}
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Payment Id</th>
                            <th>Student Id</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Batch Id</th>
                            <th>Payment Type Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map(payment => (
                            <tr key={payment.payment_Id}>
                                <td>{payment.payment_Id}</td>
                                <td>{payment.studentId}</td>
                                <td>{payment.transaction_Id}</td>
                                <td>{payment.date}</td> {/* You may need to format the date */}
                                <td>{payment.amount}</td>
                                <td>{payment.batch_Id}</td>
                                <td>{payment.paymentTypeId}</td>
                                <td>
                                    {/* Edit button that navigates to the updaEditte page */}
                                    <Link to={"/paymentup/"+payment.payment_Id}>Edit</Link><br/>
                                    {/* <Link to={"/receipt/"+payment.payment_Id}>Receipt</Link> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ListPayment;


