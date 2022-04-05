import Grid from "@mui/material/Grid"
import SSCL from '../Cards/ServerStatCardList'
import SSCG from '../Cards/ServerStatCardGraph'

export default function ServerOverview({ data }){

  const leaderBoardData = [
    {name: 'Most Active Users', key: 'mostActiveUser'},
    {name: 'Most Reactive Users', key: 'mostActiveReactor'},
    {name: 'Most Popular Reactions', key: 'mostUsedReaction'},
  ]
  return(
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={12}>
            <SSCG data={data} />
          </Grid>
          {leaderBoardData.map((e,i) => <Grid item xs={12} md={6} lg={4} key={'bd' + i}><SSCL header={e} data={data} /></Grid>)}
        </Grid>
      </Grid>
    </Grid>
  )
}
