import Drawer from "./Drawer"
import List from "@mui/material/List"
import DrawerItem from "./DrawerItem"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import AvatarButton from './AvatarButton'
import { useState } from "react"
import { useSession } from 'next-auth/react'

export default function NavDrawer(){
  const [open, setOpen] = useState(false)
  const { data: session } = useSession()

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <Drawer
      variant="permanent"
      open={open}
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
      hideBackdrop={true}
      hidden={!session ? true : false}
      >
      <Toolbar sx={{justifyContent: 'center'}}>
        <IconButton>
          <AvatarButton />
        </IconButton>
      </Toolbar>
      <List>
        <DrawerItem name='Servers' open={open} />
        <DrawerItem name='Channels' open={open} />
      </List>
    </Drawer>
  )
}
