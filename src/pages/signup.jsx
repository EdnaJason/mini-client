import React from 'react'
import axios from 'axios'
import {Form,Input,message} from 'antd'
import {Link,redirect, useNavigate} from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {
  const [loading, setLoading] = useState(false)
  const navigate= useNavigate()
  const OnFinishHandler = async (values) =>{
    setLoading(true)
    //const navigate =useNavigate()
   try {
    console.log(values)
    //dispatch(showloading())
    const res = await axios.post('http://localhost:8080/api/v1/user/signup',values)
   // dispatch(hideLoading())
    if(res.data.success){
     
     message.success("Registered successfully")
    navigate('/login')
    //redirect('/login')
    }
    else{
      message.error(res.data.message);
    }
   } catch (error) {
    console.log(error)
    
    message.error("something went wrong")

   }
   setLoading(false)

  };
  return (
    <div>
      <Form layout="vertical"
      onFinish={OnFinishHandler}
      className='signup-form'>
        <h3> signup</h3>
        <Form.Item label ="name" name="name">
          <Input type="text" required/>
        </Form.Item>
        <Form.Item label= 'ASHA Id' name ='ashaid'>
        <Input type="text" required/>
        </Form.Item>
        <Form.Item label ="email" name="email">
        <Input type="text" required/>
        </Form.Item>
        <Form.Item label ="password" name="password">
          <Input type="password" required/>
        </Form.Item>
        <button type="submit">{loading?<Spinner />:"register"}</button>
      </Form>
    </div>
  )
}

export default Signup