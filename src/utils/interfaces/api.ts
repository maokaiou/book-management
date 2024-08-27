import { axiosInstance  } from './index'
import { CreateBook } from '../../component/book-modal/book-modal'
import { Book } from '../../component/card/card'
export async function register(username: string, password: string) {
  return await axiosInstance.post('/user/register', {
      username, password
  });
}
export async function login(username: string, password: string) {
  return await axiosInstance.post('/user/login', {
      username, password
  });
}
export async function booksList(name: string) {
  return await axiosInstance.get('/books/list',{
    params: {
      name
    }
  })
}
export async function add(book:CreateBook) {
  return await axiosInstance.post(`/books/add`,{
    ...book
  })
}
export async function booksDelete(id: number) {
  return await axiosInstance.delete(`/books/delete/${id}`)
}
export async function booksDetail(id: number) {
  return await axiosInstance.get(`/books/${id}`)
}
export async function booksUpdate(book:Book) {
  return await axiosInstance.put(`/books/update`,{
    ...book
  })
}