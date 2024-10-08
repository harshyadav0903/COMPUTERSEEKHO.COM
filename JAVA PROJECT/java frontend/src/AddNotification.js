import React, { useState } from 'react';


const NotificationForm = () => {
    const [formData, setFormData] = useState({
        arriving_date: '',
        expiry_date: '',
        notification_message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            fetch("http://localhost:8084/api/notification/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.text())
                .then((data) => {
                    console.log(data);
                    setFormData(data);
                })
            // Reset form data after successful submission
            setFormData({
                arriving_date: '',
                expiry_date: '',
                notification_message: '',
            });

            console.log('Data submitted successfully!');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <div>        
            <h1>Add New Notification</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="arriving_date">Arriving Date:</label>
            <input
                type="date"
                name="arriving_date"
              
                onChange={handleInputChange}
                required
            />

            <label htmlFor="expiry_date">Expiry Date:</label>
            <input
                type="date"
              
                name="expiry_date"
                
                onChange={handleInputChange}
                required
            />

            <label htmlFor="notification_message">Notification Message:</label>
            <textarea
             
                name="notification_message"
                
                onChange={handleInputChange}
                required
            />

            <button type="submit">Submit</button>
        </form>
        </div>

    );
};

export default NotificationForm;
