import React, { useState, useEffect } from "react";
// import "./Receipt.css"; // Import the CSS file for Receipt styling

const Receipt = ({ payment, onClose }) => {
    // Logic to generate receipt content
    const [student, setStudent] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await fetch(`http://localhost:8084/api/Student/${payment.student_Id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch student data");
                }
                const data = await response.json();
                setStudent(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching student data:", error);
                setIsLoading(false);
            }
        };

        fetchStudent();
    }, [payment.student_Id]);

    const receiptContent = `
        Student Id: ${payment.student_Id}
        Student Name:${student.student_name || 'Loading...'}
        Transaction Id: ${payment.transaction_Id}
        Date: ${payment.date}
        Amount: ${payment.amount}
        Batch Id: ${payment.batch_Id}
        Payment Type Id: ${payment.paymentTypeId}
    `;

    const handlePrint = () => {
        const printWindow = window.open("", "PrintWindow", "width=600,height=600");
        printWindow.document.write(`<h4><center>PAYMENT RECEIPT</center></h4><pre>${receiptContent}</pre>`);
        printWindow.document.close();
        printWindow.print();
    };

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([receiptContent], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "receipt.txt";
        document.body.appendChild(element);
        element.click();
        onClose(); 
    };

    return (
        <div className="receipt">
            {isLoading ? (
                <p>Loading student data...</p>
            ) : (
                <pre>{receiptContent}</pre>
            )}
            <button className="print-button" onClick={handlePrint}>Print</button>
            <button className="download-button" onClick={handleDownload}>Download</button>
            <button className="close-button" onClick={onClose}>Close</button>
        </div>
    );
};

export default Receipt;

