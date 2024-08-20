import { Form} from "antd";
export default function Login(){
  return(
    <div>
      <Form>
          <Form.Item
            label="Username"
            name="username"
          >
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
          >
          </Form.Item>
        </Form>
    </div>
  )
}