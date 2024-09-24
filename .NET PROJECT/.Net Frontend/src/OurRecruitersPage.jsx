import React, { useState } from 'react';
import './OurRecruitersPage.css';

const OurRecruitersPage = () => {
  // Hardcoded array of image filenames
  const allLogos = ['Companies/1.png', 'Companies/2.png', 'Companies/3.png', 'Companies/4.png',
    'Companies/5.png', 'Companies/6.png', 'Companies/7.png', 'Companies/8.png','Companies/9.png', 'Companies/10.png', 'Companies/11.png', 'Companies/12.png',
    'Companies/13.png', 'Companies/14.png', 'Companies/15.png', 'Companies/16.png','Companies/17.png', 'Companies/18.png', 'Companies/19.png', 'Companies/20.png',
    'Companies/21.png', 'Companies/22.png', 'Companies/23.png', 'Companies/24.png','Companies/25.png', 'Companies/26.png', 'Companies/27.png', 'Companies/28.png',
    'Companies/29.png', 'Companies/30.png', 'Companies/31.png', 'Companies/32.png','Companies/33.png', 'Companies/34.png', 'Companies/35.png', 'Companies/36.png'];

  const [visibleLogos, setVisibleLogos] = useState(allLogos.slice(0, 16));
  const [showSeeMore, setShowSeeMore] = useState(true);

  const handleSeeMoreClick = () => {
    setVisibleLogos(allLogos);
    setShowSeeMore(false);
  };

  return (
    <div className="our-recruiters-page">
      <h2>Our Recruiters</h2>
      <div className="logo-grid">
        {visibleLogos.map((logo, index) => (
          <div key={index} className="logo-card">
            <img src={`/Images/${logo}`} alt={`Company Logo ${index + 1}`} className="company-logo" />
          </div>
        ))}
      </div>
      {showSeeMore && (
        <div className="centered-button">
          <button onClick={handleSeeMoreClick}>See More</button>
        </div>
      )}
    </div>
  );
};

export default OurRecruitersPage;
