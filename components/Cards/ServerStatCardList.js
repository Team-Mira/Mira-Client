import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from '@mui/material/CardHeader';
import LeaderBoard from '../Charts/LeaderBoard'

import { dark } from '../../styles/theme/M3colors'

export default function SSCL(props){

  const {data, header} = props

  return (
    <Card sx={{backgroundColor: dark.surface, boxShadow: 0, borderRadius: 3, px: 2}}>
      <CardHeader title={header.name} />
      <CardContent>
        <LeaderBoard header={header} data={data}/>
      </CardContent>
    </Card>
  )
}