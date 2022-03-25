import Drawer from "./Drawer"
import List from "@mui/material/List"
import DrawerItem from "./DrawerItem"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Avatar from "@mui/material/Avatar"
import { useState } from "react"

export default function NavDrawer(){
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <Drawer
      variant="permanent"
      open={open}
      onMouseEnter={handleOpen}
      onMouseLeave={handleOpen}
      hideBackdrop={true}>
      <Toolbar sx={{justifyContent: 'center'}}>
        <IconButton>
          <Avatar alt="discord_avatar" sx={{ p: 0 }} />
        </IconButton>
      </Toolbar>
      <List>
        <DrawerItem name='Servers' open={open} />
        <DrawerItem name='Channels' open={open} />
      </List>
    </Drawer>
  )
}
