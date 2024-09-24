import React, { useState, useEffect } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';

const UpdateNotificationForm = () => {

    const { notificationId } = useParams(); 
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        arriving_date: '',
        expiry_date: '',
        notification_message: '',
    });


    useEffect(() => {
        // Fetch notifications as per notification
        fetch((`http://localhost:8084/api/notification/${notificationId}`))
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                
                setFormData(data);
            })

    }, []);

    const handleInputChange = (event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch(`http://localhost:8084/api/notification/${notificationId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Reset form data 
            setFormData({
                arriving_date: '',
                expiry_date: '',
                notification_message: '',
            });

            alert("innserted")
            console.log('Data submitted successfully!');
        } catch (error) {
            console.error('Error submitting data:', error);
        }
        navigate("/shownotification")
    };

    return (
        <div>
            <h1>Update Notification</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="arriving_date">Arriving Date:</label>
                <input
                    type="date"
                    name="arriving_date"
                    value={formData.arriving_date}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="expiry_date">Expiry Date:</label>
                <input
                    type="date"
                    name="expiry_date"
                    value={formData.expiry_date}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="notification_message">Notification Message:</label>
                <textarea
                    name="notification_message"
                    value={formData.notification_message}
                    onChange={handleInputChange}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UpdateNotificationForm;
