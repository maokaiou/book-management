import { Form, Input, Button, message} from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import "./register.css"
import { register } from '../../utils/interfaces/api'
type RegisterType = {
  username:string,
  password:string
}
export default function Register(){
  const layout1 = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
  }
  const onFinish = async(value:RegisterType)=>{
    try {
      const res = await register(value.username,value.password)
      if(res.status === 201 || res.status === 200) {
          message.success('注册成功');

          setTimeout(() => {
              window.location.href = '/login';
          }, 1000);
      }
    } catch(e: any) {
        message.error(e.response.data.message);
    }
  }
  return(
    <div className="register-container">
      <div className="content">
        <div className="title">图书管理系统</div>
        <Form 
          {...layout1}
          onFinish={onFinish}>
          <Form.Item
            colon={false}
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input  placeholder="input username"/>
          </Form.Item>
          <Form.Item
            colon={false}
            label="密码"
            name="password"
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
            <Button type="primary" htmlType="submit" block>register</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}