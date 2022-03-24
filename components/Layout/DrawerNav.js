import { Toolbar, IconButton, List, Divider, ListItem, Avatar } from '@mui/material';
import { openedMixin, closedMixin } from '../MUIProperties/navbar'
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer'
import DrawerItem from './DrawerItem'

import Dns from '@mui/icons-material/Dns';
import Wysiwyg from '@mui/icons-material/Wysiwyg';


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: 200,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function DrawerNav(){
  const [open, setOpen] = useState(false);
  const { data: session } = useSession()

  const tabs = [
    {name: 'Servers', path: '/servers', icon: <Dns />},
    {name: 'Channels', path: '/channels', icon: <Wysiwyg />}
  ]

  if(!session){
    return <></>
  }

  const { user } = session

  return (
      <Drawer variant='permanent' hidden={session ? false : true} open={open}
        onMouseOver={() => {setOpen(true)}} onMouseLeave={() => {setOpen(false)}}>
          <Toolbar sx={{justifyContent: 'center'}}>
            <IconButton>
              <Avatar alt="discord_avatar" src={user.image} sx={{ p: 0 }} />
            </IconButton>
          </Toolbar>
        <Divider />
        <List>
          {tabs.map((tab) => (<DrawerItem item={tab} key={tab}/>))}
        </List>
      </Drawer>
  );
}
