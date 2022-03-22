import { Card, CardActions, CardContent, Container, Button, Typography } from '@mui/material';

export default function LoginCard(){

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Log in with Discord
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We only check to see if you are in a server with Mira enabled.
        </Typography>
      </CardContent>
      <CardActions>
        <Container>
          <Button size="small">Learn More</Button>
        </Container>
      </CardActions>
    </Card>
  );
}
