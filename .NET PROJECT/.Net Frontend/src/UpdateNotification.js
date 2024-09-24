import React, { useState, useEffect } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';

const UpdateNotificationForm = () => {

    const { notificationId } = useParams(); 
    const navigate=useNavigate();
    const [formData, setFormData] = useState({});


    useEffect(() => {
        // Fetch notifications as per notification
        fetch((`https://localhost:7020/api/Notification/${notificationId}`))
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
            await fetch(`https://localhost:7020/api/Notification/${notificationId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Reset form data 
            setFormData({});

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
                    name="arrivingDate"
                    value={formData.arrivingDate}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="expiry_date">Expiry Date:</label>
                <input
                    type="date"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="notification_message">Notification Message:</label>
                <textarea
                    name="notificationMessage"
                    value={formData.notificationMessage}
                    onChange={handleInputChange}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UpdateNotificationForm;
