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
    const { data: session } = useSession()
    const router = useRouter()

    if(!session){
        return <></>
    }

    console.log(session.user.servers)

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
                {session.user.servers.map(server => {return <ServerCard {...server} key={server.id}/>})}
            </Stack>
        </>
    )
}

// export async function getServerSideProps(context) {
//     const session = await getSession(context)

//     if(session){
//         return {
//             props: {
//             session,
//             },
//         }
//     } else {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         }
//     }
// }

