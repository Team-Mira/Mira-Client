import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useRouter } from "next/router";

import { dark } from '../../styles/theme/M3colors'


export default function ServerCard(props){
  const { name, id, members, channels } = props
  const router = useRouter()
  let channelCount = props.channelCount ?? 0

  if(id !== 'demo'){
    channels.map(channel => {
      if(channel.type === 'GUILD_TEXT'){
        channelCount = channelCount + 1
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: dark.surface, color: dark.onSurface, boxShadow: 0, borderRadius: 3}}>
      <CardActionArea onClick={() => {router.push(`/servers/${id}`)}}
        sx={{display: 'flex', px: 2 }}>
        <Grid container>
          <Grid item>
            <CardContent sx={{flexGrow: 3}}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2">
                {channelCount} Channels
              </Typography>
              <Typography variant="body2">
                {members} Users
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
