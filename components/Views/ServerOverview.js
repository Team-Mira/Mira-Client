import Grid from "@mui/material/Grid"

import SSCS from "../Cards/ServerStatCardSmall"
import SSCM from "../Cards/ServerStatCardMedium"

const charts = [{name: 'Messages Per Channel'}, {name: 'Activity Per Channel'}, {name: 'User Map'}]

export default function ServerOverview({ guildReport }){
  
  export default function ServerOverview({ data }){
  const cardData = [
    {name: 'Total Messages', amount: data.totalMessages},
    {name: 'Total Reactions', amount: data.totalReactions},
    {name: 'Total Replies', amount: data.totalReplies},
    {name: 'Active Users', amount: data.activeUsers}
  ]
  
  return(
    <Grid container spacing={2}>
      {fakeData.map((e, i) => <Grid item xs={6} md={4} lg={3} key={'sm' + i}><SSCS data={e} /></Grid>)}
      {charts.map((e, i) => <Grid item xs={12} lg={6} key={'md' + i}><SSCM chartType={e} data={data} guildReport={guildReport} /></Grid>)}
    </Grid>
  )
}
