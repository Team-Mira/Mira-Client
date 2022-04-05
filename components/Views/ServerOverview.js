import Grid from "@mui/material/Grid"

import SSCS from "../Cards/ServerStatCardSmall"
import SSCM from "../Cards/ServerStatCardMedium"
import SSCL from '../Cards/ServerStatCardList'
import SSCG from '../Cards/ServerStatCardGraph'

const charts = [{name: 'Messages Per Channel'}, {name: 'Activity Per Channel'}]

export default function ServerOverview({ data }){
  
  const cardData = [
    {name: 'Total Messages', amount: data.totalMessages},
    {name: 'Total Reactions', amount: data.totalReactions},
    {name: 'Total Replies', amount: data.totalReplies},
    {name: 'Active Users', amount: data.activeUsers}
  ]
  
  const leaderBoardData = [
    {name: 'Most Active Users', key: 'mostActiveUser'},
    {name: 'Most Reactive Users', key: 'mostActiveReactor'},
    {name: 'Most Popular Reactions', key: 'mostUsedReaction'},
  ]
  return(
    <Grid container spacing={2}>
      {cardData.map((e, i) => <Grid item xs={12} md={6} lg={3} key={'sm' + i}><SSCS data={e} /></Grid>)}
      {charts.map((e, i) => <Grid item xs={12} lg={6} key={'md' + i}><SSCM chartType={e} data={data}  /></Grid>)}
      <Grid item xs={12} lg={12}><SSCG data={data} /></Grid>
      {leaderBoardData.map((e,i) => <Grid item xs={12} md={6} lg={4} key={'bd' + i}><SSCL header={e} data={data} /></Grid>)}
    </Grid>
  )
}
