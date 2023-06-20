import axios from 'axios';
import React from 'react';
import './Addpatient.css';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Space, message } from 'antd';

import { DatePicker, Form, Input, Select, Upload } from 'antd';
import { useState } from 'react';
import api from '../../components/api';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Addpatient = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);

  const onFinish = async (values) => {
    try {
      values.age=Number(values.age)
      values.phone=Number(values.phone)
      const response = await api.post('/api/v1/user/addpatient', values);
      console.log(response.data); 
      if(response.data.success){
     
        message.success("added successfully")// Optional: Display the response from the backend
      }// Perform any additional actions after successful submission
    } catch (error) {
      console.log(error);
      message.error("something went wrong");// Handle error case
    }
  };

  return (
    <div className='asd'>
      <h1>Add Patient</h1>
      <Form
        labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{
          maxWidth: 1000,
        }}
        onFinish={onFinish}
      >
        <fieldset>
          <div className="rounded-rectangle">
            <div className="left-content">
              <p>
                <Form.Item label="Name" name="name">
                  <Input />
                </Form.Item>
                <Form.Item label="Age" name="age">
                 <Input type="text"></Input>
                </Form.Item>
                <Form.Item label="Gender" name="gender">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Address" name="address">
                  <Input />
                </Form.Item>
                <Form.Item label="Phone" name="phone">
                  <Input />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input />
                </Form.Item>
              </p>
            </div>

            <div className="right-content">
              <p>
                <Form.Item label="Patient ID" name="patient_id">
                  <Input />
                </Form.Item>
                <Form.Item label="Visit Date" name="visitDate">
                  <DatePicker />
                </Form.Item>
                <Form.Item label="Ward number" name="wardNumber">
                  <Input />
                </Form.Item>
                <Form.Item label="Asha Worker" name="ashaWorker">
                  <Input />
                </Form.Item>
               
              </p>
            </div>
          </div>
        </fieldset>
        <Space wrap>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </Form>
    </div>
 
  )
      }
  export default Addpatient