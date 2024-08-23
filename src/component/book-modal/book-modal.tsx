import { Modal,Form,Input } from 'antd'

interface CreateBookModalProps{
  isOpen: boolean;
  handleClose: ()=>void
}
export interface CreateBook {
  name: string;
  author: string;
  description: string;
  cover: string;
}

export default function CreateBookModal(props: CreateBookModalProps){
  function handleOk(){
    console.log('ok')
  }
 return(
  <Modal style={{fontSize:'16px'}}  open={props.isOpen} onOk={handleOk} onCancel={()=>props.handleClose()}>
    <div style={{fontSize:'20px',fontWeight:'bold'}}>新增图书</div>
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }} 
      style={{marginTop:'12px'}}>
      <Form.Item
        label="图书名称"
        name="name"
        rules={[{ required: true, message: '请输入图书名称!' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="作者"
        name="author"
        rules={[{ required: true, message: '请输入图书作者!' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="描述"
        name="description"
        rules={[{ required: true, message: '请输入图书描述!' }]}>
        <Input.TextArea rows={3} />
      </Form.Item>
      <Form.Item
         label="封面"
         name="cover"
         rules={[{ required: true, message: '请上传图书封面!' }]}>
        <Input />
      </Form.Item>
    </Form>
  </Modal>
 )
}