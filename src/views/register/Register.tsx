import { useState } from 'react'
import { Form, Input, Button} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import "./register.css"
export default function Register(){
  const layout1 = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
  }
  return(
    <div className="register-container">
      <div className="content">
        <div className="title">图书管理系统</div>
        <Form 
          {...layout1}>
          <Form.Item
            colon={false}
            label="用户名"
            name="用户名"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            colon={false}
            label="密码"
            name="密码"
            style={{marginTop: '20px'}}
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password
              placeholder="input password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <div><a href='/login'>已有账号？去登录</a></div>
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" block>submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}