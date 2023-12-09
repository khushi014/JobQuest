import React, { useState } from 'react';
import axios from 'axios';
import api from '../../api/Posts';

const MyComponent = () => {
  const [postData, setPostData] = useState({
    // Your data to be sent in the POST request
    email: 'bhaveshpurswani10@gmail.com',
    password: 'AbraKaDabra',
  });

  const handlePostRequest = async () => {
    try {
      const response = await api.post('applicant/login', postData, {
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
      });

      // Access the response data
      // Log the entire response.data to the console
      console.log('Response data:', response.data);
      const applicantDto = response.data.data.applicantDto;
      console.log('Applicant DTO:', applicantDto);
    //   
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <button onClick={handlePostRequest}>Make POST Request</button>
    </div>
  );
};

export default MyComponent;
