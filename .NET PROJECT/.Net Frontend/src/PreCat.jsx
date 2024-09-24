
import React from 'react';
import './PreCat.css'; 

const PreCat = () => {
  return (
    <div className="precat-page">
      <header>
      <h1>Pre-CAT Course Information</h1>
      </header>
      <p>
        The Pre-CAT course is designed to prepare students for the Common Admission Test (CAT),
        an entrance exam for various management programs.
      </p>
      <h2>Program Highlights</h2>
      <ul>
        <li>Duration: 3 months</li>
        <li>Focus: Quantitative Aptitude, Verbal Ability, Logical Reasoning</li>
        <li>Preparation: Mock exams, study materials, and expert guidance</li>
        <li>Eligibility: Graduation or equivalent</li>
      </ul>
      <h2>Curriculum</h2>
      <p>
        The curriculum covers essential topics to excel in the CAT exam, including mathematics,
        English language skills, and critical reasoning.
      </p>
      <h2>Career Opportunities</h2>
      <p>
        Successful completion of the Pre-CAT course enhances the chances of securing admission
        to reputed management programs.
      </p>
    </div>
  );
};

export default PreCat;
