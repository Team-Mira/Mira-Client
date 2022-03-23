import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import NavigateBefore from "@mui/icons-material/NavigateBefore"
import ServerOverview from "../../../components/Views/ServerOverview"
import { useRouter } from "next/router";

export default function ServersOverview(){
  const router = useRouter()

  return(
    <>
      <Grid container spacing={0}>
        <Grid item xs={1}>
          <IconButton size="large" onClick={() => router.push('/servers')} >
            <NavigateBefore fontSize="inherit" />
          </IconButton>
        </Grid>
        <Grid item xs={10} >
          <Typography align="center" variant="h3">Server Name</Typography>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <ServerOverview />
    </>
  )
}
