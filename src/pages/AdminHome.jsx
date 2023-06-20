import axios from 'axios'
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router';
import '../styles/homepagestyle.css'
import { Button,Form } from 'antd';
import api from '../components/api';
const AdminHome = () => {
    const navigate= useNavigate()
    const OnclickNavViewAsha = () => {
        navigate("/viewasha");
        // to clear local storage on logout
        
        localStorage.clear()
      };
      const OnclickNav = () => {
        navigate("/viewasha");
        // to clear local storage on logout
        
        localStorage.clear()
      };
 const getUserData= async()=>{
    try {
        const res= await api.post('/api/v1/user/getUserData',{},{
            headers:{
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        })
    } catch (error) {
        console.log(error)
    }
 }
 
 useEffect(() => {
    getUserData()
 },[])
 
 
    return (
        <section>
        <div className="circle"></div>
        <h2 className="heading1">Welcome back, Admin</h2>
  
        <div className="container-short">
          <div className="rounded-rectangle">
            <div className="inside-button">
              <Button onClick={OnclickNav} className="inside-button">
                View patients
              </Button>
            </div>
          </div>
  
          <div className="rounded-rectangle">
            <Button onClick={OnclickNav} className="inside-button">
              Visit Schedules
            </Button>
          </div>
        </div>
        <div className="container-short">
          <div className="rounded-rectangle">
            <Button onClick={OnclickNav} className="inside-button">
              Stock Details
            </Button>
          </div>
  
          <div className="rounded-rectangle">
            <Button onClick={OnclickNavViewAsha} className="inside-button">
              Staff Details
            </Button>
          </div>
        </div>
      </section>
  )
}

export default AdminHome