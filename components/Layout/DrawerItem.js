import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from "next/router";

export default function DrawerItem(props){
  const { name, icon, path } = props.item
  const router = useRouter()
  const active = router.pathname === path ? true : false;

  return(
    <ListItemButton key={name} active={active}
      sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', backgroundColor: active && 'rgba(255,255,255, 0.08)'}}
      onClick={() => router.push(path)}>
        <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
          {icon}
        </ListItemIcon>
      <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
    </ListItemButton>
  )
}
