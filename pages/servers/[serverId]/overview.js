import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import NavigateBefore from "@mui/icons-material/NavigateBefore"
import ServerOverview from "../../../components/Views/ServerOverview"
import { useRouter } from "next/router";

import { dark } from '../../../styles/theme/M3colors'

export default function ServersOverview(){
  const router = useRouter()

  return(
    <>
      <Grid container spacing={0} sx={{mb: 1}}>
        <Grid item xs={1}>
          <IconButton size="large" onClick={() => router.push('/servers')}
            sx={{color: dark.onSurface}}>
            <NavigateBefore fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid item xs={10} >
          <Typography align="center" variant="h3" sx={{color: dark.onSurface}}>Server Name</Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <ServerOverview />
    </>
  )
}
