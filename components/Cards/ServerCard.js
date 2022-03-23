import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent';
import { useRouter } from "next/router";

export default function ServerCard(props){
  const { name, id } = props
  const router = useRouter()

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => {router.push(`/servers/${id}/overview`)}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Test
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
