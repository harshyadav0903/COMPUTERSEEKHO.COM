import React, { useState, useEffect } from 'react';

const BatchById = ({ batch_id }) => {
    const [durationData, setDuration] = useState({});

    useEffect(() => {
        fetch(`https://localhost:7020/api/Batch/${batch_id}`)
            .then(res => res.json())
            .then((result) => { setDuration(result) }
            );
    }, {});

    return (
        <td>
            {durationData ? (
                <>
                    <p>{durationData.batchName}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </td>
    );
};

export default BatchById;