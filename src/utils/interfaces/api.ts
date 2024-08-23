import { axiosInstance  } from './index'

// const getLogin= async (username:string,password:string) => {
//   console.log(username,password)
//   return await request.post('/user/register',{
//     username,
//     password
//   })
// }
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