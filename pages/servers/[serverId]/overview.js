import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import NavigateBefore from "@mui/icons-material/NavigateBefore"
import ServerOverview from "../../../components/Views/ServerOverview"
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"

import { dark } from '../../../styles/theme/M3colors'

export default function ServersOverview(props){
  const { data: session, status } = useSession()
  const { guildReport } = props

  const router = useRouter()

  if(!session){
    return(
      <Typography>Loading</Typography>
    )
  }



  const server = session.user.servers.find(server => server.id === router.query.serverId)

  if(!server){
    return(
      <Typography>Unable to view page</Typography>
    )
  }

  return(
    <>
      <Grid container spacing={0} sx={{mb: 1}}>
        <Grid item xs={1}>
          <IconButton size="large" onClick={() => router.push('/servers')}
            sx={{color: dark.onSurface}}>
            <NavigateBefore fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid item xs={10} >
          <Typography align="center" variant="h3" sx={{color: dark.onSurface}}>{server.name}</Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <ServerOverview guildReport={guildReport} />
    </>
  )
}

export async function getStaticPaths() {

  // const res = await fetch('http://localhost:8080/api/guilds/')
  // const ids = await res.json()

  return {
    paths: [{params: {serverId: "953680127726866442"}}],
    fallback: true
  };
}

export async function getStaticProps(context) {

  const { serverId } = context.params

  const res = await fetch(`http://localhost:8080/api/report/${serverId}`)
  const {guildReport} = await res.json()
  return {
    props: {guildReport},
  }
}
