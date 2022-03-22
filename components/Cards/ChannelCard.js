import { Card, CardActions, CardContent, Container, Button, Typography } from '@mui/material';

export default function ChannelCard(props){
  const { name, server } = props

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Server: {server}
        </Typography>
      </CardContent>
    </Card>
  );
}
