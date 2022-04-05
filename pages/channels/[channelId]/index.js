import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import NavigateBefore from "@mui/icons-material/NavigateBefore"
import ChannelOverview from "../../../components/Views/ChannelOverview"
import ChannelUsers from "../../../components/Views/ChannelUsers"
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

  if(!session){
    return(
      <LoadingCard />
    )
  }

  const servers = session.user.servers

  let channel

  for(let i = 0; i < servers.length; i++){
    for(let j = 0; j < servers[i].channels.length; j++){
      if(servers[i].channels[j].id === router.query.channelId){
        channel = servers[i].channels[j]
      }
    }
  }

  if(!channel){
    return(
      <LoadingCard />
    )
  }

  const handleChange = ({target}) => {
    setChoice(target.value)
  }

  console.log(data)

  return(
    <>
      <Grid container spacing={0} sx={{mb: 1}}>
        <Grid item xs={1}>
          <IconButton size="large" onClick={() => router.push('/channels')}>
            <NavigateBefore fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid item xs={10} >
          <Stack>
          <Typography align="center" variant="h4">{channel.name}</Typography>
            <Typography align="center" variant="h6">{data.guildName}</Typography>
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
      {choice === 'Overview' ? <ChannelOverview data={data} /> : <ChannelUsers data={data} /> }
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch( ADDRESS + 'channels/ids')
  const ids = await res.json()

  return {
    paths:ids.map(channelId => ({params: {channelId}})),
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { channelId } = context.params

  try{
    const res = await fetch(`${ADDRESS}report/channel/${channelId}`)

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
