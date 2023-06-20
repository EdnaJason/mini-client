import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import api from '../../components/api';
//import Spinner from '../../components/Spinner';

const WorkerDetailsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const workerName = searchParams.get('name');
  const [workerDetails, setWorkerDetails] = useState(null);
  const { name } = useParams();
 
  
    
    
  const fetchWorkerDetails = async () => {
    try {
      const encodedName = encodeURIComponent(name);
      const response = await api.post(`/api/v1/user/ashadetail/${encodedName}`);
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
      <h3 className='option'>Worker Details</h3>
      <p  className='option'>Name: {workerDetails.name}</p>
      <p className='option'>Age: {workerDetails.age}</p>
      <p className='option'>Email: {workerDetails.email}</p>
      <p className='option'>Asha_id: {workerDetails.asha_id}</p>
      {/* Display other worker details */}
    </div>
  );
};

export default WorkerDetailsPage;
