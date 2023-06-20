import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const Patientdetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const workerName = searchParams.get('name');
  const [workerDetails, setWorkerDetails] = useState(null);
  const { name } = useParams();
 
  
    
    
  const fetchWorkerDetails = async () => {
    try {
      const encodedName = encodeURIComponent(name);
      const response = await axios.post(`http://localhost:8080/api/v1/user/patientdetail/${encodedName}`);
      setWorkerDetails(response.data);
      
    } catch (error) {
      console.error('Error not posted:', error);
    }
  };
  useEffect(() => {
    fetchWorkerDetails();
  }, [workerName]);

  if (!workerDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3 className='option'>Patient Details</h3>
      <p  className='option'>Name: {workerDetails.name}</p>
      <p className='option'>Age: {workerDetails.age}</p>
      <p className='option'>Email: {workerDetails.email}</p>
      <p className='option'>Patient id : {workerDetails.patient_id}</p>
      <p className='option'>Ward no: {workerDetails.ward_number}</p>
      {/* Display other worker details */}
    </div>
  );
};

export default Patientdetail;
