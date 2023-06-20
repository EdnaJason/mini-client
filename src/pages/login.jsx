import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../components/api";

const Login = () => {
  const navigate = useNavigate();
  //on finish handler function
  const onFinishHandler = async (values) => {
    try {
      const res = await api.post("/api/v1/user/login", values);
      if (res.data.success && res.data.isAdmin) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successful");
        navigate("/adminhome");
      } else if (res.data.success && !res.data.isAdmin) {
        message.error("YOu are not admin");
        navigate("/");
      } else {
        message.error("something went wrong");
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div className="adminlogin-form">
      <h1 align="center" className="Adminlogin" font-color="white">
        {" "}
        Admin login
      </h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinishHandler}
        className="adminloginbox"
      >
        <Form.Item
          label="Username"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
