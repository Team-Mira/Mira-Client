import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { useRouter } from "next/router";

import { dark } from '../../styles/theme/M3colors'

import Face from '@mui/icons-material/Face';

export default function ChannelCard(props){
  const { name, server, id } = props
  const router = useRouter()

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: dark.surface, boxShadow: 0 }}>
      <CardActionArea onClick={() => {router.push(`/channels/${id}/overview`)}}
        sx={{display: 'flex' }}>
        <CardMedia sx={{flexGrow: 1}}>
          <Container>
            <Face />
          </Container>
        </CardMedia>
        <CardContent sx={{flexGrow: 3}}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Server: {server}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
