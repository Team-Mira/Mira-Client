import Grid from "@mui/material/Grid"

import SSCS from "../Cards/ServerStatCardSmall"
import SSCM from "../Cards/ServerStatCardMedium"

const fakeData = [
  {name: 'Total Messages', amount: '100'},
  {name: 'Total Reactions', amount: '58'},
  {name: 'Total Replies', amount: '6'},
  {name: 'Active Users', amount: '27'}
]

const charts = [{name: 'Messages Per Channel'}, {name: 'Activity Per Channel'}]

export default function ServerOverview({ data }){
  return(
    <Grid container spacing={2}>
      {fakeData.map((e, i) => <Grid item xs={6} md={4} lg={3} key={'sm' + i}><SSCS data={e} /></Grid>)}
      {charts.map((e, i) => <Grid item xs={12} lg={6} key={'md' + i}><SSCM chartType={e} data={data} /></Grid>)}
    </Grid>
  )
}
