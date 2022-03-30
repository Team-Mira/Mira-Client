import axios from 'axios'
const ADDRESS = process.env.API_URL || 'http://localhost:8080/api/'

export default async function fetchGuilds(id){
  const { data } = await axios.post( ADDRESS + 'guilds', { id })
  return data
}
