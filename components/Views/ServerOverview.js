import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"

import SSCS from "../Cards/ServerStatCardSmall"
import SSCM from "../Cards/ServerStatCardMedium"
import SSCL from '../Cards/ServerStatCardList'
import SSCG from '../Cards/ServerStatCardGraph'

const charts = [{name: 'Messages Per Channel'}, {name: 'Activity Per Channel'}, {name: 'Word Use'}]

export default function ServerOverview({ data }){

  const cardData = [
    {name: 'Total Messages', amount: data.totalMessages},
    {name: 'Total Reactions', amount: data.totalReactions},
    {name: 'Total Replies', amount: data.totalReplies},
    {name: 'Active Users', amount: data.activeUsers},
  ]

  // const leaderBoardData = [
  //   {name: 'Most Active Users', key: 'mostActiveUser'},
  //   {name: 'Most Reactive Users', key: 'mostActiveReactor'},
  //   {name: 'Most Popular Reactions', key: 'mostUsedReaction'},
  // ]
  return(
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          {charts.map((e, i) => <Grid item xs={12} key={'md' + i}><SSCM chartType={e} data={data}  /></Grid>)}
          {/* <Grid item xs={12} lg={12}>
            <SSCG data={data} />
          </Grid> */}
          {/* {leaderBoardData.map((e,i) => <Grid item xs={12} md={6} lg={4} key={'bd' + i}><SSCL header={e} data={data} /></Grid>)} */}
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Stack spacing={2}>
          {cardData.map((e, i) => <SSCS data={e} key={'sm' + i}/>)}
        </Stack>
      </Grid>
    </Grid>
  )
}
