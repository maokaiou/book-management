import { useEffect, useState } from 'react'
import { Form,Input, Button, message } from 'antd'
import './index.css'
import { booksList } from '../../utils/interfaces/api'
import CardMessage from '../../component/card/card'
import CreateBookModal from '../../component/book-modal/book-modal';
interface Book {
  id:number,
  name: string,
  author: string,
  description:string,
  cover: string
}
export default function Home(){
  const [bookList,setBookList] = useState<Array<Book>>([])
  const [name,setName]=useState('')
  const [num, setNum] = useState(0);
  const [isShowBookModal,setBookModal] = useState(false)
  async function fetchData(){
    try{
      const res = await booksList(name)
      if(res.status ===200 || res.status === 201){
        setBookList(res.data)
      }
    }catch(error:any){
      message.error(error)
    }
    
  }
  async function searchBooks(values:{name:string}){
    setName(values.name)
  }
  
  useEffect(()=>{
    fetchData()
  },[name, num])
  
  return(
    <div className="bookManage">
      <CreateBookModal isOpen={isShowBookModal} handleClose={()=>{setBookModal(false);setNum(Math.random())}} ></CreateBookModal>
      <div className="title">图书管理系统</div>
      <div className='book-search'>
        <Form
            name="search"
            layout='inline'
            colon={false}
            onFinish={searchBooks}
        >
          <Form.Item label="图书名称" name="name">
            <Input />
          </Form.Item>
          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
                搜索图书
            </Button>
            <Button type="primary" htmlType="submit" style={{background: 'green',marginLeft:'10px'}} onClick={()=>setBookModal(true)}>
                添加图书
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='book-list'>
        <div className='scroll-y'>
          {
            bookList.map((ele)=><CardMessage key={ele.id} book={ele} isDelete={()=>setNum(Math.random())}/>)
          }
        </div> 
      </div>
    </div>
  )
}