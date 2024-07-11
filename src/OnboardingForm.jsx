import React, { useState } from 'react';
import './OnboardingForm.css';

const OnboardingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    bloodGroup: '',
    email: '',
    certificate10th: null,
    certificate12th: null,
    marksheet: null,
    photo: null,
    resume: null,
  });

  const [submitted, setSubmitted] = useState(false); // State for form submission confirmation

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic (e.g., API call, validation)

    console.log(formData);

    // Show submission confirmation
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <div className="form-header">New Employee Onboarding</div>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="onboarding-form">
          <div className="form-left">
            <div>
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label>Blood Group:</label>
              <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} required />
            </div>
            <div>
              <label>10th Certificate (PDF):</label>
              <input type="file" name="certificate10th" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div>
              <label>Marksheet (PDF):</label>
              <input type="file" name="marksheet" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div>
              <label>Resume (PDF):</label>
              <input type="file" name="resume" accept="application/pdf" onChange={handleChange} required />
            </div>
          </div>
          <div className="form-right">
            <div>
              <label>Date of Birth:</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label>12th Certificate (PDF):</label>
              <input type="file" name="certificate12th" accept="application/pdf" onChange={handleChange} required />
            </div>
            <div>
              <label>Photo (JPG, JPEG, PNG):</label>
              <input type="file" name="photo" accept="image/jpeg, image/jpg, image/png" onChange={handleChange} required />
            </div>
          </div>
          <div className="form-button">
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div className="submission-message">
          <p>Your onboarding form has been submitted successfully. We will contact you via email for further processing.</p>
          <button className="ok-button" onClick={() => setSubmitted(false)}>OK</button>
        </div>
      )}
    </div>
  );
};

export default OnboardingForm;
