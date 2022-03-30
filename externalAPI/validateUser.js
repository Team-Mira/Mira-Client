import axios from 'axios'
const ADDRESS = process.env.API_URL || 'http://localhost:8080/api/'

export default async function validateUser(userId, serverId){
  const { data } = await axios.post( ADDRESS + 'guilds/access', { userId, serverId })
  return data
}
