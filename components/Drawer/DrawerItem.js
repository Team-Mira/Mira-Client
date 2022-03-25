import DrawerButton from './DrawerButton';
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import Dns from '@mui/icons-material/Dns';
import Wysiwyg from '@mui/icons-material/Wysiwyg';
import { useRouter } from 'next/router';

import { dark } from '../../styles/theme/M3colors'

export default function DrawerItem({name, open}){
  const router = useRouter()
  const path = router.pathname.slice(1, name.length + 1)

  const active = path === name.toLowerCase() ? true : false

  const handleNav = () => {
    router.push('/' + name.toLowerCase())
  }

  const drawerIcon = (name) => {
    switch(name){
      case 'Servers':
        return <Dns sx={{width: 24, height: 24, color: dark.onSurfaceVariant}}/>
      case 'Channels':
        return <Wysiwyg sx={{width: 24, height: 24, color: dark.onSurfaceVariant}} />
      default:
        return <CircleIcon sx={{width: 24, height: 24, color: dark.onSurfaceVariant}} />
    }
  }

  return(
    <DrawerButton open={open} selected={active} onClick={handleNav}>
      <ListItemIcon>{drawerIcon(name)}</ListItemIcon>
      <ListItemText>
        <Typography sx={{color: dark.onSurfaceVariant, fontWeight: 'bold'}}>{name}</Typography>
      </ListItemText>
    </DrawerButton>
  )
}
