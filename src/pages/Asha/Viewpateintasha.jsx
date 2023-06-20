//import axios from "axios";
import { useNavigate } from "react-router-dom";
import React , {useEffect, useState} from 'react'
import axios from "axios";

import './viewasha.css'
const Viewpatientasha = () => {
  const navigate= useNavigate()
  const Onclicknav=(asha_id)=>{
    console.log(asha_id)
    navigate(`/patientdetail/${encodeURIComponent(asha_id)}`)
  }
  const [ashaWorker,setAshaworker] = useState([])
 const ashaview = async() =>
  {
       try{
         const patient = await axios.post('http://localhost:8080/api/v1/user/patient')
          setAshaworker(patient.data)
          console.log(patient)
       }
       catch(error)
       {
          console.log(error)
       }
  }
  /*const handleClick = (worker) => {
    navigate(`/worker-details?name=${worker}`)
  };*/
  const handleMouseEnter = (event) => {
    event.target.style.cursor = 'pointer';
  };

  useEffect(()=>{
    ashaview()
  },[]
  )
  return (
    <>
    <h1 className='heading1'>
      View patientlist
    </h1>
    <h3 color="white">Patients</h3>
      <ul>
        {ashaWorker.map((worker) => (
          <li key={worker.id}  className="option" onClick={() => Onclicknav(worker.patient_id)} onMouseEnter={handleMouseEnter}>
           patient:{worker.patient_id}     Name: {worker.name}
          </li>
        ))}
      </ul>

    </>
  )
}

export default Viewpatientasha