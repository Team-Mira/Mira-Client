import Stack from '@mui/material/Stack'
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import NavigateBefore from "@mui/icons-material/NavigateBefore"
import ServerCard from '../../components/Cards/ServerCard'
import { useRouter } from "next/router";
import { useSession } from 'next-auth/react'

import { dark } from '../../styles/theme/M3colors'

export default function Servers (props) {
    const { data: session, status} = useSession()
    const router = useRouter()

    if(!session){
        const server = {name: 'The Mira Discord', channelCount: 4, members: 7, id: 'demo'}
        return (
            <>
                <Grid container spacing={0} sx={{mb: 1}}>
                    <Grid item xs={1}>
                        <IconButton size="large" onClick={() => router.push('/')}
                            sx={{color: dark.onSurface}}>
                            <NavigateBefore fontSize="inherit" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={10} >
                        <Typography align="center" variant="h3" sx={{color: dark.onSurface}}>Servers</Typography>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
                <Stack spacing={2}>
                    <ServerCard {...server} key={server.id}/>
                </Stack>
            </>
        )
    }

    if(status === 'loading'){
        return <h3>Loading</h3>
    }

    if(!session.user.servers){
        return(
            <h4>No servers found</h4>
        )
    }

    return (
        <>
            <Grid container spacing={0} sx={{mb: 1}}>
                <Grid item xs={1}>
                    <IconButton size="large" onClick={() => router.push('/')}
                        sx={{color: dark.onSurface}}>
                        <NavigateBefore fontSize="inherit" />
                    </IconButton>
                </Grid>
                <Grid item xs={10} >
                    <Typography align="center" variant="h3" sx={{color: dark.onSurface}}>Servers</Typography>
                </Grid>
                <Grid item xs={1} />
            </Grid>
            <Stack spacing={2}>
                {session.user.servers ? session.user.servers.map(server => {return <ServerCard {...server} key={server.id}/>}) : <h3>No Servers</h3>}
            </Stack>
        </>
    )
}
