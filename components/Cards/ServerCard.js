import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useRouter } from "next/router";

import { dark } from '../../styles/theme/M3colors'

import Face from '@mui/icons-material/Face';

export default function ServerCard(props){
  const { name, id, members, channels } = props
  const router = useRouter()
  let channelCount = 0

  channels.map(channel => {
    if(channel.type === 'GUILD_TEXT'){
      channelCount = channelCount + 1
    }
  })

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: dark.surface, boxShadow: 0, borderRadius: 3}}>
      <CardActionArea onClick={() => {router.push(`/servers/${id}/overview`)}}
        sx={{display: 'flex', px: 2 }}>
        <Grid container>
          <Grid item alignContent='center'>
            <CardMedia sx={{flexGrow: 1}}>
              <Container>
                <Face />
              </Container>
            </CardMedia>
          </Grid>
          <Grid item>
            <CardContent sx={{flexGrow: 3}}>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {channelCount} Channels
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {members} Users
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
