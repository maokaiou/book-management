import './card.css'
import { useState } from 'react'
import { Popconfirm, message } from 'antd'
import { booksDelete } from '../../utils/interfaces/api'
interface Book {
  id:number,
  name: string,
  author: string,
  description:string,
  cover: string
}
// 定义 CardMessageProps 接口
interface CardMessageProps {
  book: Book;
  isDelete:()=>void
}
export default function CardMessage({book,isDelete}:CardMessageProps){
  console.log('book',book)
  const handleDelete = async (id:number) => {
    try{
      await booksDelete(id)
      isDelete()
      message.success('删除成功')
    }catch(error:any){
      message.error(error.response.data.message)
    }
  }
  return(
    <div className="cardWrap">
      <div className="imgWrap">
        <img src={`http://localhost:3000/${book.cover}`} alt=""/>
      </div>
      <div className="contentWrap">
        <div style={{fontSize:'20px',lineHeight:'20px',fontWeight:'bold'}}>{book.name}</div>
        <div style={{fontSize:'16px',lineHeight:'16px',margin:'10px 0px'}}>{book.author}</div>
        <div style={{fontSize:'14px',lineHeight:'14px',color:'blue',display:'flex',justifyContent:'space-around'}}>
          <span>详情</span>
          <span>编辑</span>
          <Popconfirm
            title="图书删除"
            description="确认删除吗？"
            onConfirm={()=>handleDelete(book.id)}
            okText="Yes"
            cancelText="No"
          >
            <a href='#'>删除</a>
          </Popconfirm>
        </div>
      </div>
    </div>
  )
}