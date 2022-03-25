import { getSession } from 'next-auth/react'
import { Stack } from '@mui/material'
import fetchGuilds from '../../externalAPI/fetchGuilds'
import ChannelCard from '../../components/Cards/ChannelCard'
import grabChannels from '../../utility/grabChannels'

export default function Channels ({ session, servers }) {
    if(!session){
        return <></>
    }

    const channels = grabChannels(servers)

    return (
        <div>
            <h2>Channels</h2>
            <Stack spacing={2}>
                {channels.map(channel => {return <ChannelCard {...channel} key={channel.id}/>})}
            </Stack>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if(session){
        const id = session.user.id
        const servers = await fetchGuilds(id)
        return {
            props: {
            session,
            servers
            },
        }
    } else {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
}
