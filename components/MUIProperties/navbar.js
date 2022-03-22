const drawerWidth = 200;

export const drawerProps = {
  sx: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper':
      {width: drawerWidth, boxSizing: 'border-box'}
    },
    variant:"permanent",
    anchor:"left"
  }
