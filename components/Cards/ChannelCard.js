import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent';
import { useRouter } from "next/router";

export default function ChannelCard(props){
  const { name, server, id } = props
  const router = useRouter()

  console.log(props)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => {router.push(`/channels/${id}/overview`)}}>
      <CardContent>
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
