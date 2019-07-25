import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f052f60255d4bb036d7724e4bb9cd66661bd26d12ce5b10b39e74febd23fd0ec'
  }
})