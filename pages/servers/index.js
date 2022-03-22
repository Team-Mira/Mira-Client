import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import ServerCard from '../../components/Cards/ServerCard'
import axios from 'axios'

export default function Channels () {
    const [servers, setServers] = useState([])
    const {data: session} = useSession()

    const fetchServers = async () => {
        if(!session){
            return []
        }
        const { id } = session.user
        const { data } = await axios.post('/api/servers', { id })
        setServers(data)
    }

    useEffect(() => {
        fetchServers()
    }, [])

    if(!session){
        return <></>
    }

    return (
        <div>
            <h2>Servers</h2>
            {servers.map(server => {return <ServerCard {...server} key={server.id}/>})}
        </div>
    )
}
