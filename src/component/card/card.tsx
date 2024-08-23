import './card.css'
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
}
export default function CardMessage({book}:CardMessageProps){
  return(
    <div className="cardWrap">
      <div className="imgWrap"></div>
      <div className="contentWrap">
        <div style={{fontSize:'20px',lineHeight:'20px',fontWeight:'bold'}}>{book.name}</div>
        <div style={{fontSize:'16px',lineHeight:'16px',margin:'10px 0px'}}>{book.author}</div>
        <div style={{fontSize:'14px',lineHeight:'14px',color:'blue',display:'flex',justifyContent:'space-around'}}>
          <span>详情</span>
          <span>编辑</span>
          <span>删除</span>
        </div>
      </div>
    </div>
  )
}