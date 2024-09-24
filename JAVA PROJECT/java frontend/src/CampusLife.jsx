import React from 'react';
import './CampusLife.css'; // Import your custom CSS file for styling

const CampusLife = () => {
    // Replace the image paths with your actual image paths
    const imagePaths = [
        '/Images/Campus_Life/Soft_Skill2.jpg',
        '/Images/Campus_Life/Soft_Skill.jpg',
        '/Images/Campus_Life/Halloween.jpg',
        '/Images/Campus_Life/Monsoon_Trek.jpg',
        '/Images/Campus_Life/Library.jpg',
        '/Images/Campus_Life/Mock_Interview.jpg',
        '/Images/Campus_Life/Group_Discussion.jpg',
        '/Images/Campus_Life/Library.jpg',
        '/Images/Campus_Life/Guest_Lecture.jpg',
        '/Images/Campus_Life/Lab.jpg',
    ];

    return (
        <div className="image-gallery">
            <h2>Campus Life</h2>
            <div className="image-container">
                {imagePaths.map((path, index) => (
                    <div key={index} className="image-item">
                        <img src={path} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampusLife;
