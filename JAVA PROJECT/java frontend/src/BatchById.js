import React, { useState, useEffect } from 'react';

const BatchById = ({ batch_id }) => {
    const [durationData, setDuration] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8084/api/Batch/${batch_id}`)
            .then(res => res.json())
            .then((result) => { setDuration(result) }
            );
    }, {});

    return (
        <td>
            {durationData ? (
                <>
                    <p>{durationData.batch_name}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </td>
    );
};

export default BatchById;