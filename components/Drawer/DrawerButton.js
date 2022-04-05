import { styled } from "@mui/material/styles";
import MuiListItemButton from '@mui/material/ListItemButton'
import { openedDrawerButton, closedDrawerButton} from '../MUIProps/NavDrawer'
import { dark } from "../../styles/theme/M3colors";

const DrawerButton = styled(MuiListItemButton, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    borderRadius: 100,
    height: 46,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 8,
    marginBottom: 8,
    '&.Mui-selected':{backgroundColor: dark.primary},
    ...(open && {...openedDrawerButton(theme)}),
    ...(!open && {...closedDrawerButton(theme)}),
  }),
);

export default DrawerButton
