import axios from "axios"

export default async function guildsAPI(req, res, next){
  if(req.method === 'POST') {
    const { id } = req.body
    const { data } = await axios.post('http://localhost:8080/api/guilds', { id })
    res.send(data)
  } else {
    res.send('invalid route')
  }
}
