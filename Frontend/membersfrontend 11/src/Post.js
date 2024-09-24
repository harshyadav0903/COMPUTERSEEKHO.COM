import React, { useState } from 'react';

export default function Post() {
    const [newMember, setNewMember] = useState({
        member_name: '',
        contact_no: '',
        fees_paid: 0
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMember({
            ...newMember,
            [name]: value
        });
    };

    const handleAddMember = () => {


        fetch("https://localhost:7105/api/members", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMember),
        })
            .then(response => response.json())
            .then(data => {
                alert('New member added:', data);

            })
            .catch(error => {
                alert('Error adding new member:', error);
            });
    };

    return (
        <div>
            <h2>Add New Member</h2>
            <form>
                <label>
                    Member Name:
                    <input type="text" name="member_name" value={newMember.member_name} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Contact Number:
                    <input type="text" name="contact_no" value={newMember.contact_no} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Fees Paid:
                    <input type="number" name="fees_paid" value={newMember.fees_paid} onChange={handleInputChange} />
                </label>
                <br />
                <button type="button" onClick={handleAddMember}>Add Member</button>
            </form>
        </div>
    );
}
