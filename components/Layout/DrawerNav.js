import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, List, Divider, ListItem, Avatar, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from '@mui/material/ListItemText';
import { drawerProps } from '../MUIProperties/navbar'
import { useSession } from 'next-auth/react';
import { useRouter } from "next/router";


export default function DrawerNav(){
  const { data: session } = useSession()
  const router = useRouter()

  const tabs = [
    {name: 'Servers', path: '/servers'},
    {name: 'Channels', path: '/channels'}
  ]

  if(!session){
    return <></>
  }

  const { user } = session

  return (
      <Drawer {...drawerProps} hidden={session ? false : true}>

        <Toolbar>
          {/* <Typography sx={{ pr: 5 }}>{user.name}</Typography> */}
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="discord_avatar" src={user.image} />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {tabs.map((tab, index) => (
            <ListItem button key={tab.path} onClick={() => router.push(tab.path)}>
              <ListItemText primary={tab.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
  );
}
