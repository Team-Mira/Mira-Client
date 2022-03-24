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

  export const openedMixin = (theme) => ({
    width: 250,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  export const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });
