import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { useRouter } from "next/router";
import Link from '@mui/material/Link';

import { dark } from '../../styles/theme/M3colors'

export default function ChannelsCard(props){
  const { name, channels } = props
  const textChannels = channels.filter(channel => {
    if(channel.type === 'GUILD_TEXT'){
      return channel
    }
  })


  return (
    <Card sx={{ maxWidth: 345, backgroundColor: dark.surface, color: dark.onSurface, boxShadow: 0, borderRadius: 3}}>
      <CardContent sx={{flexGrow: 3}}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Channels</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack>
              {textChannels.map(channel => <Link href={`/channels/${channel.id}`} color="#FFFFFF" key={channel.id}>{channel.name}</Link>)}
            </Stack>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}
