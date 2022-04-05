import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"

import SSCS from "../Cards/ServerStatCardSmall"
import SSCM from "../Cards/ServerStatCardMedium"
import SSCL from '../Cards/ServerStatCardList'
import SSCG from '../Cards/ServerStatCardGraph'

export default function ServerOverview({ data }){

  const cardData = [
    {name: 'Most Active', amount: data.totalMessages},
    {name: 'Reacted The Most', amount: data.totalReactions},
    {name: 'Replied The Most', amount: data.totalReplies},
    {name: 'Most Popular Reaction', amount: data.activeUsers},
  ]

  const leaderBoardData = [
    {name: 'Most Active Users', key: 'mostActiveUser'},
    {name: 'Most Reactive Users', key: 'mostActiveReactor'},
    {name: 'Most Popular Reactions', key: 'mostUsedReaction'},
  ]
  return(
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <SSCG data={data} />
          </Grid>
          {leaderBoardData.map((e,i) => <Grid item xs={12} md={6} lg={4} key={'bd' + i}><SSCL header={e} data={data} /></Grid>)}
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