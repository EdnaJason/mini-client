//import axios from "axios";
import { useNavigate } from "react-router-dom";
import React , {useEffect, useState} from 'react'
import axios from "axios";

import './viewasha.css'
const Viewasha = () => {
  const navigate= useNavigate()
  const Onclicknav=(asha_id)=>{
    console.log(asha_id)
    navigate(`/ashadetail/${encodeURIComponent(asha_id)}`)
  }
  const [ashaWorker,setAshaworker] = useState([])
 const ashaview = async() =>
  {
       try{
         const ashaname = await axios.post('http://localhost:8080/api/v1/user/ashaname')
          setAshaworker(ashaname.data)
          console.log(ashaname)
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
      View ASHA worker list
    </h1>
    <h3 color="white">Asha Workers</h3>
      <ul>
        {ashaWorker.map((worker) => (
          <li key={worker.id}  className="option" onClick={() => Onclicknav(worker.name)} onMouseEnter={handleMouseEnter}>
           Asha id:{worker.asha_id}     Name: {worker.name}
          </li>
        ))}
      </ul>

    </>
  )
}

export default Viewasha