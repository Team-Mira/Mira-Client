import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import ChannelCard from '../../components/Cards/ChannelCard'
import axios from 'axios'

export default function Channels () {
    const [servers, setServers] = useState([])
    const {data: session} = useSession()
    let channels = []

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

    servers.map(
        server => server.channels.map(
            channel => {
                channel.server = server.name
                 channels.push(channel)
            }))

    return (
        <div>
            <h2>Channels</h2>
            {channels.map(channel => {return <ChannelCard {...channel} key={channel.id}/>})}
        </div>
    )
}
