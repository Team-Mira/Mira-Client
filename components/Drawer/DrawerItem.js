import DrawerButton from './DrawerButton';
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import CircleIcon from '@mui/icons-material/Circle';
import Dns from '@mui/icons-material/Dns';
import Wysiwyg from '@mui/icons-material/Wysiwyg';
import { useRouter } from 'next/router';

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
        return <Dns sx={{width: 24, height: 24}}/>
      case 'Channels':
        return <Wysiwyg sx={{width: 24, height: 24}} />
      default:
        return <CircleIcon sx={{width: 24, height: 24}} />
    }
  }

  return(
    <DrawerButton open={open} selected={active} onClick={handleNav}>
      <ListItemIcon>{drawerIcon(name)}</ListItemIcon>
      <ListItemText>{name}</ListItemText>
    </DrawerButton>
  )
}
