import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import SSCS from "../Cards/ServerStatCardSmall"

const test = [1, 2, 3, 4]

export default function ServerOverview(){
  return(
    <Grid container spacing={2}>
      {test.map((e, i) => <Grid item xs={6} md={4} lg={3} key={i}><SSCS /></Grid>)}
    </Grid>
  )
}
