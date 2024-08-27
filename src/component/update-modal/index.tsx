import { Form, Modal, Input, message } from 'antd'
import { Book } from '../card/card'
import { booksDetail, booksUpdate } from '../../utils/interfaces/api'
import CoverUpload from '../cover-upload/index'
import { useEffect } from 'react'
interface UpdateBookMoalProps {
  id:number,
  isOpen: boolean,
  handleClose: ()=>void
}

export default function UpdateBookMoal(props:UpdateBookMoalProps){
  const [form] = Form.useForm<Book>()
  async function getBookDetail(){
    try{
      const res =await booksDetail(props.id)
      const { data } =res
      if(res.status ===200 || res.status === 201){
        form.setFieldValue('id', data.id);
        form.setFieldValue('name', data.name);
        form.setFieldValue('author', data.author);
        form.setFieldValue('description', data.description);
        form.setFieldValue('cover', data.cover);
      }
    }catch(error:any){
      message.error(error.response.data.message)
    }
  }
  useEffect(()=>{
    getBookDetail()
  },[props.id])
  const handleOk =async() => {
    await form.validateFields()
    const values = form.getFieldsValue()
    try{
      const res =await booksUpdate({...values, id: props.id})
      if(res.status===200 || res.status===201){
        message.success('更新图书成功')
        props.handleClose()
      }
    }catch(error:any){
      message.error(error.response.data.message)
    }
  }
  return(
    <Modal style={{fontSize:'16px'}}  open={props.isOpen} onOk={handleOk} onCancel={()=>props.handleClose()}>
      <div style={{fontSize:'20px',fontWeight:'bold'}}>编辑图书</div>
      <Form
        form={form}
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
          <CoverUpload />
        </Form.Item>
      </Form>
    </Modal>
  )
}