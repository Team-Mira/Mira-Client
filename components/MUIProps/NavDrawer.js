import { dark } from '../../styles/theme/M3colors'

export const openedMixin = (theme) => ({
  width: 280,
  border: 0,
  backgroundColor: dark.background,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme) => ({
  border: 0,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: dark.background,
  overflowX: 'hidden',
  width: 80,
  [theme.breakpoints.up('sm')]: {
    width: 80,
  },
});

export const closedDrawerButton = (theme) => ({
  width: 55,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

export const openedDrawerButton = (theme) => ({
  width: 262,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  })
});
