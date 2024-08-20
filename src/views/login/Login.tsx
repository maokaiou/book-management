import './login.css'
import { Form, Button, Flex, Checkbox, Input} from "antd";
import { LockOutlined, UserOutlined  } from '@ant-design/icons'

export default function Login(){
  return(
    <div className="login-conatiner">
      <div className="title">图书管理系统</div>
      <Form style={{width:'400px',marginTop:'20px'}}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            or <a href="">Register now!</a>
          </Form.Item>
      </Form>
    </div>
  )
}