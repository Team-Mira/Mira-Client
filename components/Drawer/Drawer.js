import { styled } from "@mui/material/styles";
import { openedMixin, closedMixin } from "../MUIProps/NavDrawer";
import MuiDrawer from '@mui/material/Drawer'

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    whiteSpace: 'nowrap',
    ...(open && {...openedMixin(theme), '& .MuiDrawer-paper': openedMixin(theme),}),
    ...(!open && {...closedMixin(theme),'& .MuiDrawer-paper': closedMixin(theme),}),
  }),
);

export default Drawer
