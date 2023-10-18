import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3333'
  baseURL: 'http://192.168.2.103:3333'// meu ip
})

export default api;