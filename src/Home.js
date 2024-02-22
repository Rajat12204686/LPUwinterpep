import React from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css'; // Import CSS file



const Home = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="home-container">
      <h2>User Details</h2>
      {formData && (
        <div className="user-details">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>Email ID:</strong> {formData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
