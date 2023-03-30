import axios from 'axios'

const PersonaAPI = axios.create({
  baseURL : 'http://localhost:3000'
})


export const getPersonas = async () => {
  const res = await PersonaAPI.get('/personas')
  console.log(res)
  return res.data;
}