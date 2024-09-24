//GET
import React, { useEffect, useState } from 'react';

export default function Get() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7105/api/members") // Adjust the API endpoint accordingly
            .then(res => res.json())
            .then(data => setMembers(data));
    }, []);

    return (
        <div>
            <h2>Member List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Member ID</th>
                        <th>Member Name</th>
                        <th>Contact Number</th>
                        <th>Fees Paid</th>
                        <th>MoreDetails</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map(member => (
                        <tr key={member.memberId}>
                            <td>{member.memberId}</td>
                            <td>{member.member_name}</td>
                            <td>{member.contact_no}</td>
                            <td>{member.fees_paid}</td>
                            <td><a href={'/MoreDetails/'+member.memberId}>
                                MoreDetails
                            </a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

