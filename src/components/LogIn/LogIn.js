import React, {useState} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './LogIn.css';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

const LogIn = () => {
  const [registerAccount, setRegisterAccount] = useState(false);
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
          <div className="logInContainer">
            <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
              {registerAccount ?
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email address'
                    }
                  ]}>
                    <Input/>
                </Form.Item> : null
               }
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
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
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
        
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
        
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            <Button type="link" onClick={() => setRegisterAccount(!registerAccount)}>{registerAccount ? "Have an account? Log In!" : `Don't have an account? Sign up here!` }</Button>
            </Form>
            
          </div>

      );
}

export default LogIn;