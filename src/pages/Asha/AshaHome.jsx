import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'antd';
import api from '../../components/api';

const AshaHome = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || null);
  const handleMouseEnter = (event) => {
    event.target.style.cursor = 'pointer';
  };
  const onClickProfile = (uid) => {
    console.log(uid);
    navigate(`/ashaprofile`);
  };

  const onClickNavViewAsha = () => {
    navigate("/viewasha");
    localStorage.clear(); // to clear local storage on logout
  };

  const onClickNav = () => {
    navigate("/viewasha");
     // to clear local storage on logout
  };
  const onClickSignout =()=>{
    localStorage.clear()
    navigate('/ashalogin')
  }

  const getUserData = async () => {
    try {
      const res = await api.post(
        '/api/v1/user/getashaData',
        {},
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        }
      );
      setUserData(res.data.data);
      console.log(userData)
      localStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    
  }, []);

  if (!userData) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  return (
    <section>
      
      <div className="circle"></div>
      <Button onClick={onClickProfile}> profile</Button>
      <h2 className="heading1">Welcome back, {userData.name}</h2>
      <Button onClick={onClickSignout}> signout</Button>
      <div className="container-short">
        <div className="rounded-rectangle">
          <div className="inside-button">
            <Button onClick={onClickNav} className="inside-button">
              View patients
            </Button>
          </div>
        </div>

        <div className="rounded-rectangle">
          <Button onClick={onClickNav} className="inside-button">
            Visit Schedules
          </Button>
        </div>
      </div>
      <div className="container-short">
        <div className="rounded-rectangle">
          <Button onClick={onClickNav} className="inside-button">
            Stock Details
          </Button>
        </div>

       </div>
    </section>
  );
};

export default AshaHome;
