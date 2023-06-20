import React from 'react'
import {NavLink} from 'react-router-dom'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {
  const navigate= useNavigate()
  const onClickadmin= ()=>{
    navigate('/login')

  }
  const onClickasha= ()=>{
    navigate('/ashalogin')

  }
  const onClickpatient= ()=>{
    navigate('/adminhome')

  }
  return (
    <div>
    <h1> Homepage </h1>
    <ul>
  <li><NavLink to='/signup'> signup </NavLink></li>
  <li><NavLink to='/login'> login </NavLink></li>
    
   <Button  onClick={onClickadmin}>admin</Button> 
  <Button onClick={onClickasha}>ASHA worker</Button>
  <Button onClick={onClickpatient}>patient</Button> 
    </ul>
    </div>
  )
}

export default Homepage