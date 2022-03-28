import { config } from "dotenv";
import axios from 'axios'
const ADDRESS = process.env.API_URL || 'http://localhost:8080/api/'
config()

export default async function fetchGuildIds(){
  const { data } = await axios.get( ADDRESS + 'guilds')
  return data
}
