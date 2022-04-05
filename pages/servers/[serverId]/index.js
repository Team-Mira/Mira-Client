import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import NavigateBefore from "@mui/icons-material/NavigateBefore"
import ServerOverview from "../../../components/Views/ServerOverview"
import ServerUsers from "../../../components/Views/ServerUsers"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import MenuItem from "@mui/material/MenuItem"
import Select from '@mui/material/Select';
import { useRouter } from "next/router";
import { useSession } from "next-auth/react"
import { useState } from "react"
import LoadingCard from "../../../components/Cards/LoadingCard"

const ADDRESS = process.env.API_URL || 'http://localhost:8080/api/'

export default function ServersOverview(props){
  const { data: session, status } = useSession()
  const [choice, setChoice] = useState('Overview')
  const { data } = props

  const router = useRouter()

  if(router.query.serverId !== 'demo'){
    if(!session){
      return(
        <LoadingCard />
      )
    }
  }

  const server = router.query.serverId === 'demo' ? {name: 'The Mira Discord'}:
  session.user.servers.find(server => server.id === router.query.serverId)

  if(!server){
    return(
      <LoadingCard />
    )
  }

  const handleChange = ({target}) => {
    setChoice(target.value)
  }

  return(
    <>
      <Grid container spacing={0} sx={{mb: 1}}>
        <Grid item xs={1}>
          <IconButton size="large" onClick={() => router.push('/servers')}>
            <NavigateBefore fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid item xs={10} >
          <Stack>
            <Typography align="center" variant="h3">{server.name}</Typography>
            <Container align="center">
              <Select value={choice} onChange={handleChange}>
                <MenuItem value="Overview" name="Overview">Overview</MenuItem>
                <MenuItem value="Users" name="Users">Users</MenuItem>
              </Select>
            </Container>
          </Stack>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      {choice === 'Overview' ? <ServerOverview data={data} /> : <ServerUsers data={data} /> }
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch( ADDRESS + 'guilds/ids')
  const ids = await res.json()

  return {
    paths:ids.map(serverId => ({params: {serverId}})),
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { serverId } = context.params

  try{
    const res = await fetch(`${ADDRESS}report/${serverId}`)

    if(res.status !== 200){
      return{
        redirect: {
        destination: '/error',
        permanent: false,
      }}
    }

    const data = await res.json()

    return {
      props: {data},
      revalidate: 60
    }

  } catch(err){
    return{
      redirect: {
      destination: '/error',
      permanent: false,
    }}
  }
}
