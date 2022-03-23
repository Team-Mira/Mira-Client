import { getSession } from 'next-auth/react'
import fetchGuilds from '../../externalAPI/fetchGuilds'
import ServerCard from '../../components/Cards/ServerCard'

export default function Channels (props) {
    const {session, servers} = props

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

