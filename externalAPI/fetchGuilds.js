import { config } from "dotenv";
import axios from 'axios'
config()

export default async function fetchGuilds(id){
  const { data } = await axios.post( process.env.API_URL + 'guilds', { id })
  return data
}
